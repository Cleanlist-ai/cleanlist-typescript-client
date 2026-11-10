// Runs against the built package: `npm test` builds first.
const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const {
    Cleanlist,
    ResponseError,
    retryingFetch,
    withIdempotencyKey,
    verifyWebhookSignature,
} = require('../dist');

function fakeFetch(responses) {
    const calls = [];
    const fn = async (url, init) => {
        calls.push({ url: String(url), init, headers: new Headers(init && init.headers) });
        const next = responses[Math.min(calls.length - 1, responses.length - 1)];
        return new Response(JSON.stringify(next.body ?? {}), {
            status: next.status,
            headers: { 'Content-Type': 'application/json', ...(next.headers ?? {}) },
        });
    };
    fn.calls = calls;
    return fn;
}

test('retries a 429 after Retry-After and keeps one Idempotency-Key', async () => {
    const fetchApi = fakeFetch([{ status: 429, headers: { 'Retry-After': '2' } }, { status: 503 }, { status: 201 }]);
    const waits = [];
    const wrapped = retryingFetch(fetchApi, { sleep: async (ms) => void waits.push(ms) });
    const res = await wrapped('https://x/api/v2/lists', { method: 'POST', body: '{}' });
    assert.equal(res.status, 201);
    assert.equal(fetchApi.calls.length, 3);
    assert.equal(waits[0], 2000);
    const keys = fetchApi.calls.map((c) => c.headers.get('Idempotency-Key'));
    assert.ok(keys[0]);
    assert.deepEqual(keys, [keys[0], keys[0], keys[0]]);
});

test('each write call gets its own key; reads get none', async () => {
    const fetchApi = fakeFetch([{ status: 200 }]);
    const wrapped = retryingFetch(fetchApi);
    await wrapped('https://x/a', { method: 'POST' });
    await wrapped('https://x/a', { method: 'DELETE' });
    await wrapped('https://x/a', { method: 'GET' });
    const [a, b, c] = fetchApi.calls.map((x) => x.headers.get('Idempotency-Key'));
    assert.ok(a && b && a !== b);
    assert.equal(c, null);
});

test('stops after maxAttempts and returns the last response', async () => {
    const fetchApi = fakeFetch([{ status: 500 }]);
    const wrapped = retryingFetch(fetchApi, { maxAttempts: 2, sleep: async () => {} });
    const res = await wrapped('https://x/a', { method: 'GET' });
    assert.equal(res.status, 500);
    assert.equal(fetchApi.calls.length, 2);
});

test('does not retry 4xx other than 429, nor a Retry-After over a minute', async () => {
    const bad = fakeFetch([{ status: 422 }]);
    assert.equal((await retryingFetch(bad, { sleep: async () => {} })('https://x', {})).status, 422);
    assert.equal(bad.calls.length, 1);
    const daily = fakeFetch([{ status: 429, headers: { 'Retry-After': '3600' } }]);
    assert.equal((await retryingFetch(daily, { sleep: async () => {} })('https://x', {})).status, 429);
    assert.equal(daily.calls.length, 1);
});

test('Cleanlist: per-call key override, rate limits and mode on lastResponse', async () => {
    const fetchApi = fakeFetch([
        { status: 429, headers: { 'Retry-After': '0' } },
        {
            status: 200,
            body: { id: 'l1', name: 'Q3' },
            headers: {
                'X-RateLimit-Limit': '600',
                'X-RateLimit-Remaining': '599',
                'X-RateLimit-Reset': '1762790400',
                'Cleanlist-Mode': 'test',
                'Idempotent-Replayed': 'true',
            },
        },
    ]);
    const cl = new Cleanlist({ accessToken: 'clapi_live_abc', basePath: 'https://x', fetchApi });
    assert.equal(cl.mode, 'live');
    await cl.leadLists.createList({ createListRequest: { name: 'Q3' } }, withIdempotencyKey('order-1'));
    assert.deepEqual(
        fetchApi.calls.map((c) => c.headers.get('Idempotency-Key')),
        ['order-1', 'order-1'],
    );
    assert.equal(fetchApi.calls[1].headers.get('Authorization'), 'Bearer clapi_live_abc');
    assert.deepEqual(cl.lastResponse.rateLimit, { limit: 600, remaining: 599, reset: 1762790400 });
    assert.equal(cl.lastResponse.idempotentReplayed, true);
    assert.equal(cl.mode, 'test');
});

test('Cleanlist: test key prefix implies test mode; errors still throw after retries', async () => {
    const fetchApi = fakeFetch([{ status: 502, headers: { 'Retry-After': '0' } }]);
    const cl = new Cleanlist({ accessToken: 'clapi_test_abc', basePath: 'https://x', fetchApi, maxAttempts: 2 });
    assert.equal(cl.mode, 'test');
    await assert.rejects(cl.workspace.whoami(), ResponseError);
    assert.equal(fetchApi.calls.length, 2);
    assert.equal(cl.lastResponse.status, 502);
});

test('withIdempotencyKey refuses empty and over-long keys', () => {
    assert.throws(() => withIdempotencyKey(''));
    assert.throws(() => withIdempotencyKey('k'.repeat(256)));
});

function sign(secret, t, body) {
    return `t=${t},v1=${crypto.createHmac('sha256', secret).update(`${t}.${body}`).digest('hex')}`;
}

test('verifyWebhookSignature', async () => {
    const body = '{"id":"evt_1","type":"reply.received","data":{}}';
    const now = 1762790400;
    const header = sign('whsec', now, body);
    assert.equal(await verifyWebhookSignature(body, header, 'whsec', { now }), true);
    assert.equal(await verifyWebhookSignature(new TextEncoder().encode(body), header, 'whsec', { now }), true);
    assert.equal(await verifyWebhookSignature(body + ' ', header, 'whsec', { now }), false);
    assert.equal(await verifyWebhookSignature(body, header, 'other', { now }), false);
    assert.equal(await verifyWebhookSignature(body, header, 'whsec', { now: now + 301 }), false);
    assert.equal(await verifyWebhookSignature(body, `v1=${'0'.repeat(64)},${header}`, 'whsec', { now }), true);
    for (const junk of [undefined, '', 'garbage', `t=abc,v1=${'0'.repeat(64)}`, `t=${now}`, `t=${now},v1=zz`]) {
        assert.equal(await verifyWebhookSignature(body, junk, 'whsec', { now }), false);
    }
});
