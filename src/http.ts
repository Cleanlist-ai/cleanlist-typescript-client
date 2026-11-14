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
    return Math.min(8_000, 500 * 2 ** (attempt - 1)) + Math.floor(Math.random() * 250);
}

function shouldRetry(status: number): boolean {
    return status === 429 || status >= 500;
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
 * retries; a key already on the request wins) and 429s and 5xx are retried.
 * Reads are always retried; anything else only when it carries an `Idempotency-Key`,
 * so the API runs it once however many tries it takes.
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
        const retryable = READ_METHODS.has(method) || headers.has('Idempotency-Key');

        for (let attempt = 1; ; attempt++) {
            const response = await fetchApi(input, requestInit);
            if (retryable && attempt < maxAttempts && shouldRetry(response.status)) {
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
