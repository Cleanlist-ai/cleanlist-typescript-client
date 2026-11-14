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
    const fetchApi = fakeFetch([
        { status: 429, headers: { 'Retry-After': '2' } },
        { status: 503, body: { error: { code: 'idempotency_unavailable' } } },
        { status: 201 },
    ]);
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

const noSleep = { sleep: async () => {} };

test('a 500 or 502 on a POST is not retried', async () => {
    for (const status of [500, 502]) {
        const fetchApi = fakeFetch([{ status }, { status: 200 }]);
        const res = await retryingFetch(fetchApi, noSleep)('https://x/api/v2/lists', { method: 'POST' });
        assert.equal(res.status, status);
        assert.equal(fetchApi.calls.length, 1);
    }
});

test('a 503 idempotency_unavailable on a POST is retried with the same key; a bare 503 is not', async () => {
    const fetchApi = fakeFetch([{ status: 503, body: { error: { code: 'idempotency_unavailable' } } }, { status: 201 }]);
    const res = await retryingFetch(fetchApi, noSleep)('https://x/api/v2/lists', { method: 'POST' });
    assert.equal(res.status, 201);
    const [a, b] = fetchApi.calls.map((c) => c.headers.get('Idempotency-Key'));
    assert.ok(a);
    assert.equal(a, b);
    const bare = fakeFetch([{ status: 503, body: { error: { code: 'service_unavailable' } } }, { status: 200 }]);
    assert.equal((await retryingFetch(bare, noSleep)('https://x/a', { method: 'PUT' })).status, 503);
    assert.equal(bare.calls.length, 1);
});

test('a 429 on a POST is retried', async () => {
    const fetchApi = fakeFetch([{ status: 429 }, { status: 201 }]);
    const res = await retryingFetch(fetchApi, noSleep)('https://x/api/v2/lists', { method: 'POST' });
    assert.equal(res.status, 201);
    assert.equal(fetchApi.calls.length, 2);
});

test('a GET 500 is still retried', async () => {
    const fetchApi = fakeFetch([{ status: 500 }, { status: 200 }]);
    assert.equal((await retryingFetch(fetchApi, noSleep)('https://x/api/v2/lists', {})).status, 200);
    assert.equal(fetchApi.calls.length, 2);
});

test('inbox reply and actions confirm are never retried', async () => {
    for (const [url, responses] of [
        ['https://x/api/v2/inbox/threads/t1/reply', [{ status: 502, body: { error: { code: 'send_unconfirmed' } } }]],
        ['https://x/api/v2/inbox/threads/t1/reply', [{ status: 429 }]],
        ['https://x/api/v2/actions/confirm', [{ status: 500 }]],
        ['https://x/api/v2/actions/confirm?x=1', [{ status: 429 }]],
        ['https://x/api/v2/actions/confirm', [{ status: 503, body: { error: { code: 'idempotency_unavailable' } } }]],
    ]) {
        const fetchApi = fakeFetch([...responses, { status: 200 }]);
        const res = await retryingFetch(fetchApi, noSleep)(url, { method: 'POST' });
        assert.equal(res.status, responses[0].status, url);
        assert.equal(fetchApi.calls.length, 1, url);
    }
    const thrown = async () => {
        thrown.calls = (thrown.calls ?? 0) + 1;
        throw new TypeError('fetch failed');
    };
    await assert.rejects(retryingFetch(thrown, noSleep)('https://x/api/v2/actions/confirm', { method: 'POST' }));
    assert.equal(thrown.calls, 1);
});

test('a network error is retried for reads and keyed writes', async () => {
    const flaky = () => {
        let n = 0;
        const fn = async () => {
            n++;
            fn.calls = n;
            if (n === 1) throw new TypeError('fetch failed');
            return new Response('{}', { status: 200 });
        };
        return fn;
    };
    for (const method of ['GET', 'POST', 'PUT']) {
        const fetchApi = flaky();
        const headers = method === 'PUT' ? { 'Idempotency-Key': 'k1' } : {};
        assert.equal((await retryingFetch(fetchApi, noSleep)('https://x/a', { method, headers })).status, 200);
        assert.equal(fetchApi.calls, 2, method);
    }
    const bare = flaky();
    await assert.rejects(retryingFetch(bare, noSleep)('https://x/a', { method: 'PUT' }));
    assert.equal(bare.calls, 1);
});

test('Cleanlist: a live agent run retries a 503 idempotency_unavailable under one key', async () => {
    const fetchApi = fakeFetch([
        { status: 503, headers: { 'Retry-After': '0' }, body: { code: 'idempotency_unavailable' } },
        { status: 200, body: { committed: true, action: 'run_gtm_agent', description: 'Run', run_id: 'r1' } },
    ]);
    const cl = new Cleanlist({ accessToken: 'clapi_live_abc', basePath: 'https://x', fetchApi });
    await cl.gtmAgents.runGtmAgent({ agentId: 'a1', runGtmAgentBody: { quote_id: 'q1', commit: true } });
    assert.equal(fetchApi.calls.length, 2);
    assert.equal(fetchApi.calls[0].url, 'https://x/api/v2/gtm-agents/a1/runs');
    const [first, second] = fetchApi.calls.map((c) => c.headers.get('Idempotency-Key'));
    assert.ok(first);
    assert.equal(first, second);
    assert.equal(cl.lastResponse.status, 200);
});

const PREVIEW = {
    committed: false,
    action: 'agent_on',
    description: 'Turn on Outbound',
    credits_max: 40,
    records_max: null,
    effects: [],
    required_scopes: ['agents:live'],
    missing_scopes: [],
    estimate: { action: 'agent_on' },
};

test('live previews decode on agent status, agent runs and play runs', async () => {
    const fetchApi = fakeFetch([{ status: 200, body: PREVIEW }]);
    const cl = new Cleanlist({ accessToken: 'clapi_live_abc', basePath: 'https://x', fetchApi });
    const status = await cl.gtmAgents.setGtmAgentStatus({ agentId: 'a1', gtmAgentStatusBody: { status: 'on' } });
    assert.equal(status.committed, false);
    assert.equal(status.action, 'agent_on');
    assert.deepEqual(status.effects, []);
    assert.equal(status.skillRefs, undefined);
    const run = await cl.gtmAgents.runGtmAgent({ agentId: 'a1', runGtmAgentBody: {} });
    assert.equal(run.committed, false);
    assert.equal(run.credits_max, 40);
    const play = await cl.plays.runPlay({ playbookId: 'p1', runPlayBody: {} });
    assert.equal(play.committed, false);
    assert.deepEqual(play.required_scopes, ['agents:live']);
    assert.equal(play.event_id, undefined);
});

test('committed results still decode on agent status, agent runs and play runs', async () => {
    const agent = {
        id: 'a1', organizationId: 'o1', ownerUserId: 'u1', name: 'Outbound', description: '',
        selfEditInstructions: false, skillRefs: [], knowledge: {}, connections: [], tools: {},
        triggers: [], playIds: [], limits: {}, delivery: {}, status: 'on', aiManagedTriggers: false,
        isFavorite: false, version: 2,
    };
    const fetchApi = fakeFetch([{ status: 200, body: agent }]);
    const cl = new Cleanlist({ accessToken: 'clapi_live_abc', basePath: 'https://x', fetchApi });
    const status = await cl.gtmAgents.setGtmAgentStatus({ agentId: 'a1', gtmAgentStatusBody: { status: 'on', commit: true } });
    assert.equal(status.status, 'on');
    assert.deepEqual(status.skillRefs, []);
    assert.equal(status.committed, undefined);

    const runBody = { run_id: 'r1', queued: true };
    const cl2 = new Cleanlist({ accessToken: 'clapi_live_abc', basePath: 'https://x', fetchApi: fakeFetch([{ status: 200, body: runBody }]) });
    assert.deepEqual(await cl2.gtmAgents.runGtmAgent({ agentId: 'a1', runGtmAgentBody: { commit: true } }), runBody);

    const cl3 = new Cleanlist({ accessToken: 'clapi_live_abc', basePath: 'https://x', fetchApi: fakeFetch([{ status: 200, body: { run_id: 'r2', queued: true, event_id: 'e1' } }]) });
    const play = await cl3.plays.runPlay({ playbookId: 'p1', runPlayBody: { commit: true } });
    assert.equal(play.event_id, 'e1');
    assert.equal(play.run_id, 'r2');
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
