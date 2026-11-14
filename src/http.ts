/* tslint:disable */
/* eslint-disable */
/**
 * Retries, idempotency keys and response metadata for the Cleanlist API.
 *
 * Hand-authored (not generated) and re-applied on every regeneration by
 * `scripts/generate.sh`. `Cleanlist` wires `retryingFetch` in for you.
 */
import type { FetchAPI, InitOverrideFunction } from './runtime';

/** Methods that get an automatic `Idempotency-Key`: the ones the API dedupes on it. */
const WRITE_METHODS = new Set(['POST', 'PATCH', 'DELETE']);
/** Methods retried without a key: they change nothing, so a second try is safe. */
const READ_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

/** Total tries per request, the first one included. */
export const DEFAULT_MAX_ATTEMPTS = 3;
/** A `Retry-After` longer than this is returned to the caller instead of waited out. */
export const MAX_RETRY_DELAY_MS = 60_000;

export interface RateLimit {
    /** `X-RateLimit-Limit`: requests allowed in the tightest bucket that applied. */
    limit: number;
    /** `X-RateLimit-Remaining`: requests left in that bucket. */
    remaining: number;
    /** `X-RateLimit-Reset`: unix seconds when the bucket refills. */
    reset: number;
}

export type Mode = 'live' | 'test';

export interface ResponseMeta {
    status: number;
    /** Missing when the response carried no rate-limit headers. */
    rateLimit?: RateLimit;
    /** `test` for a test key's sandbox workspace, from the `Cleanlist-Mode` header. */
    mode?: Mode;
    /** True when the server replayed a stored response for a repeated `Idempotency-Key`. */
    idempotentReplayed: boolean;
}

function intHeader(response: Response, name: string): number | undefined {
    const raw = response.headers.get(name);
    if (raw === null || raw.trim() === '') return undefined;
    const value = Number(raw);
    return Number.isFinite(value) ? value : undefined;
}

/** Reads rate-limit, mode and replay headers off any response (including `ResponseError.response`). */
export function readResponseMeta(response: Response): ResponseMeta {
    const limit = intHeader(response, 'X-RateLimit-Limit');
    const remaining = intHeader(response, 'X-RateLimit-Remaining');
    const reset = intHeader(response, 'X-RateLimit-Reset');
    const rawMode = (response.headers.get('Cleanlist-Mode') ?? response.headers.get('X-Cleanlist-Mode') ?? '')
        .trim()
        .toLowerCase();
    return {
        status: response.status,
        rateLimit:
            limit !== undefined && remaining !== undefined && reset !== undefined
                ? { limit, remaining, reset }
                : undefined,
        mode: rawMode === 'test' || rawMode === 'live' ? rawMode : undefined,
        idempotentReplayed: (response.headers.get('Idempotent-Replayed') ?? '').toLowerCase() === 'true',
    };
}

/**
 * Per-call `Idempotency-Key`, passed as the generated methods' `initOverrides`:
 * `cl.leadLists.createList(params, withIdempotencyKey('order-1234'))`.
 */
export function withIdempotencyKey(key: string): InitOverrideFunction {
    if (!key || key.length > 255) {
        throw new Error('An Idempotency-Key must be 1 to 255 characters.');
    }
    return async ({ init }) => ({ headers: { ...init.headers, 'Idempotency-Key': key } });
}

function newIdempotencyKey(): string {
    const c = (globalThis as any).crypto;
    if (c && typeof c.randomUUID === 'function') return c.randomUUID();
    // Node 18 without the global webcrypto: uniqueness is what matters here, not secrecy.
    return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}-${Math.random().toString(16).slice(2)}`;
}

/** Wait before the next try: `Retry-After` when the server sent one, else exponential backoff with jitter. */
export function retryDelayMs(response: Response, attempt: number): number {
    const header = response.headers.get('Retry-After');
    if (header !== null && header.trim() !== '') {
        const seconds = Number(header);
        if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
        const date = Date.parse(header);
        if (!Number.isNaN(date)) return Math.max(0, date - Date.now());
    }
    return backoffMs(attempt);
}

function backoffMs(attempt: number): number {
    return Math.min(8_000, 500 * 2 ** (attempt - 1)) + Math.floor(Math.random() * 250);
}

/** Single-use writes that are never retried: a second try after a lost response can't be told apart from a repeat. */
const NEVER_RETRY_PATHS = [/\/api\/v2\/actions\/confirm\/?$/, /\/api\/v2\/inbox\/threads\/[^/]+\/reply\/?$/];

function requestPath(input: RequestInfo | URL): string {
    const raw = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
    try {
        return new URL(raw, 'http://localhost').pathname;
    } catch {
        return raw.split(/[?#]/)[0];
    }
}

/** The error envelope's `code`, read off a clone so the caller still gets the body. */
async function errorCode(response: Response): Promise<string | undefined> {
    try {
        const body = await response.clone().json();
        return body?.error?.code ?? body?.code;
    } catch {
        return undefined;
    }
}

/**
 * Reads retry on 429 and 5xx. Writes retry on 429, and on a 503 `idempotency_unavailable`
 * (refused before the route ran). Any other 5xx on a write may have run the route, and
 * the server doesn't store 5xx under the key, so a retry would run it again.
 */
async function shouldRetry(read: boolean, response: Response): Promise<boolean> {
    if (response.status === 429) return true;
    if (read) return response.status >= 500;
    return response.status === 503 && (await errorCode(response)) === 'idempotency_unavailable';
}

export interface RetryingFetchOptions {
    /** Total tries per request, the first one included. 1 turns retries off. */
    maxAttempts?: number;
    /** Called with every final response, retried or not. */
    onResponse?: (meta: ResponseMeta) => void;
    /** Test hook. */
    sleep?: (ms: number) => Promise<void>;
}

/**
 * Wraps `fetch` so writes carry an `Idempotency-Key` (one per call, reused on its
 * retries; a key already on the request wins). Reads are retried on network errors,
 * 429s and 5xx. Writes are retried on 429s, a 503 `idempotency_unavailable`, and a
 * network error with no response when they carry an `Idempotency-Key`; never on any
 * other 5xx. `POST /api/v2/actions/confirm` and inbox replies are never retried.
 */
export function retryingFetch(fetchApi: FetchAPI, options: RetryingFetchOptions = {}): FetchAPI {
    const maxAttempts = Math.max(1, Math.floor(options.maxAttempts ?? DEFAULT_MAX_ATTEMPTS));
    const sleep = options.sleep ?? ((ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms)));

    return async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
        const method = (init?.method ?? 'GET').toUpperCase();
        const headers = new Headers(init?.headers);
        if (WRITE_METHODS.has(method) && !headers.has('Idempotency-Key')) {
            headers.set('Idempotency-Key', newIdempotencyKey());
        }
        const requestInit: RequestInit = { ...init, headers };
        const read = READ_METHODS.has(method);
        const path = requestPath(input);
        const retryable = read || !NEVER_RETRY_PATHS.some((re) => re.test(path));
        const retryNetworkError = read || (retryable && headers.has('Idempotency-Key'));

        for (let attempt = 1; ; attempt++) {
            let response: Response;
            try {
                response = await fetchApi(input, requestInit);
            } catch (err) {
                if (retryNetworkError && attempt < maxAttempts && !init?.signal?.aborted) {
                    await sleep(backoffMs(attempt));
                    continue;
                }
                throw err;
            }
            if (retryable && attempt < maxAttempts && (await shouldRetry(read, response))) {
                const delay = retryDelayMs(response, attempt);
                if (delay <= MAX_RETRY_DELAY_MS) {
                    try {
                        await response.body?.cancel();
                    } catch {
                        // Already consumed or not cancellable; nothing to free.
                    }
                    await sleep(delay);
                    continue;
                }
            }
            options.onResponse?.(readResponseMeta(response));
            return response;
        }
    };
}
