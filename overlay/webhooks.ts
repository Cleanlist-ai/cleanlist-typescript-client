/* tslint:disable */
/* eslint-disable */
/**
 * Verifies the `Cleanlist-Signature` header on webhook deliveries.
 *
 * Hand-authored (not generated) and re-applied on every regeneration by
 * `scripts/generate.sh`.
 *
 * The header is `t=<unix seconds>,v1=<hex HMAC-SHA256 of "<t>.<raw body>">`,
 * keyed with the secret `POST /api/v2/webhooks` returned once.
 */

/** Deliveries signed longer ago than this are refused, so a captured one can't be replayed later. */
export const DEFAULT_WEBHOOK_TOLERANCE_SECONDS = 300;

export const WEBHOOK_SIGNATURE_HEADER = 'Cleanlist-Signature';

export interface VerifyWebhookOptions {
    /** Max age of the signature in seconds. Defaults to 300. */
    toleranceSeconds?: number;
    /** Current unix seconds; for tests. */
    now?: number;
}

async function subtleCrypto(): Promise<SubtleCrypto> {
    const subtle = (globalThis as any).crypto?.subtle;
    if (subtle) return subtle;
    // Node 18 doesn't expose webcrypto as a global.
    const nodeCrypto = await import('crypto');
    return (nodeCrypto as any).webcrypto.subtle;
}

function hexToBytes(hex: string): ArrayBuffer | undefined {
    if (!/^[0-9a-fA-F]{64}$/.test(hex)) return undefined;
    const out = new ArrayBuffer(32);
    const view = new Uint8Array(out);
    for (let i = 0; i < 32; i++) view[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    return out;
}

/**
 * True when `signatureHeader` is a valid, fresh signature of `payload` (the raw
 * request body, exactly as received; re-serialized JSON won't match).
 */
export async function verifyWebhookSignature(
    payload: string | Uint8Array,
    signatureHeader: string | null | undefined,
    secret: string,
    options: VerifyWebhookOptions = {},
): Promise<boolean> {
    if (!signatureHeader || !secret) return false;

    let timestamp: string | undefined;
    const signatures: ArrayBuffer[] = [];
    for (const part of signatureHeader.split(',')) {
        const eq = part.indexOf('=');
        if (eq < 0) continue;
        const key = part.slice(0, eq).trim();
        const value = part.slice(eq + 1).trim();
        if (key === 't') timestamp = value;
        else if (key === 'v1') {
            const bytes = hexToBytes(value);
            if (bytes) signatures.push(bytes);
        }
    }
    if (!timestamp || !/^\d+$/.test(timestamp) || signatures.length === 0) return false;

    const tolerance = options.toleranceSeconds ?? DEFAULT_WEBHOOK_TOLERANCE_SECONDS;
    const now = options.now ?? Math.floor(Date.now() / 1000);
    if (Math.abs(now - Number(timestamp)) > tolerance) return false;

    const encoder = new TextEncoder();
    const body = typeof payload === 'string' ? encoder.encode(payload) : payload;
    const prefix = encoder.encode(`${timestamp}.`);
    const signed = new Uint8Array(prefix.length + body.length);
    signed.set(prefix, 0);
    signed.set(body, prefix.length);

    const subtle = await subtleCrypto();
    const key = await subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
        'verify',
    ]);
    for (const signature of signatures) {
        // subtle.verify compares in constant time.
        if (await subtle.verify('HMAC', key, signature, signed)) return true;
    }
    return false;
}
