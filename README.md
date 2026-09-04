# Cleanlist TypeScript SDK (`@cleanlist-ai/sdk`)

Official TypeScript/JavaScript client for the **[Cleanlist](https://cleanlist.ai) API (v2)** —
B2B lead discovery, waterfall enrichment, lead lists, smart agents, and export.

Generated from the public v2 OpenAPI schema (`typescript-fetch`), with a small `Cleanlist`
convenience facade so you can get productive in a few lines.

```ts
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: 'clapi_live_...' });

const me = await cl.workspace.whoami();
const list = await cl.leadLists.createList({ createListRequest: { name: 'Q3 outbound' } });
console.log(me.organization_name, list.list_id);
```

- ✅ Fully typed request & response models
- ✅ Works in Node 18+ and the browser (uses the platform `fetch`)
- ✅ Ships CommonJS + ESM + `.d.ts`
- ✅ Bearer-token auth, production defaults
- ✅ Generated from the same schema the API serves, so it never drifts

---

## Table of contents

- [Installation](#installation)
- [Authentication](#authentication)
- [Quickstart](#quickstart)
- [Configuration](#configuration)
- [Core concepts](#core-concepts)
  - [Credits & the estimate → quote flow](#credits--the-estimate--quote-flow)
  - [Enrichment is asynchronous — poll for results](#enrichment-is-asynchronous--poll-for-results)
- [Endpoint reference](#endpoint-reference)
  - [Workspace](#workspace-clworkspace)
  - [Lead Lists](#lead-lists-clleadlists)
  - [Enrichment](#enrichment-clenrichment)
  - [Smart Agents](#smart-agents-clsmartagents)
  - [Export](#export-clexport)
- [Error handling](#error-handling)
- [Pagination](#pagination)
- [Using the generated API classes directly](#using-the-generated-api-classes-directly)
- [Regenerating from the schema](#regenerating-from-the-schema)
- [Support](#support)

---

## Installation

```bash
npm install @cleanlist-ai/sdk
```

Node **18+** (or any runtime with a global `fetch`). In older Node, pass a `fetch`
polyfill via `fetchApi` (see [Configuration](#configuration)).

## Authentication

Every request is authenticated with a **Cleanlist API key**, sent as an
`Authorization: Bearer <key>` header. Create one in the portal under
**[Settings → API Keys](https://app.cleanlist.ai/settings/api-keys)** (keys start with
`clapi_`).

Pass it explicitly, or set `CLEANLIST_API_KEY` and let the client read it:

```ts
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: 'clapi_live_...' }); // explicit
const cl2 = new Cleanlist('clapi_live_...');                 // shorthand
const cl3 = new Cleanlist();                                 // reads CLEANLIST_API_KEY
```

> **Keep keys secret.** Never ship a `clapi_` key in client-side browser code — proxy
> Cleanlist calls through your backend.

## Quickstart

```ts
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist(); // CLEANLIST_API_KEY

// 1. Who am I? (identity, tier, scopes)
const me = await cl.workspace.whoami();
console.log(`Org: ${me.organization_name} | tier: ${me.tier}`);

// 2. Credit balance
const { credits } = await cl.workspace.creditsBalance();
console.log('credits:', credits);

// 3. Create a lead list
const list = await cl.leadLists.createList({ createListRequest: { name: 'Demo — API' } });

// 4. Enrich a person into it (async workflow — returns a handle)
const job = await cl.enrichment.enrichPerson({
  enrichPersonRequest: {
    lead_list_id: list.list_id,
    first_name: 'Ada',
    last_name: 'Lovelace',
    company_name: 'Analytical Engines',
  },
});
console.log('workflow:', job.workflow_id, '| reserved:', job.credits_reserved);
```

> Response and request **body** fields are `snake_case` (they mirror the API exactly, e.g.
> `list_id`, `workflow_id`, `lead_list_id`). The **operation parameter** wrappers are
> `camelCase` (e.g. `createListRequest`, `listId`, `workflowId`).

## Configuration

`new Cleanlist(options)` accepts:

| Option        | Default                    | Description                                                       |
| ------------- | -------------------------- | ---------------------------------------------------------------- |
| `accessToken` | `$CLEANLIST_API_KEY`       | Your API key. Sent as `Authorization: Bearer …`.                 |
| `basePath`    | `https://api.cleanlist.ai` | API base URL. Use `http://localhost:8000` for local dev.         |
| `fetchApi`    | platform `fetch`           | Custom fetch (e.g. `node-fetch`/`undici` on Node < 18, or a mock). |

For advanced needs (middleware, custom headers), build a `Configuration` yourself and
pass it to the generated API classes — see
[Using the generated API classes directly](#using-the-generated-api-classes-directly).

## Core concepts

### Credits & the estimate → quote flow

Search and list management are free; **enrichment and smart-agent runs cost credits**.
Bulk/paid operations (`enrichList`, `runSmartAgent`, and CSV import with enrichment)
require a **signed quote** from `creditsEstimate` first. The quote pins the price and is
single-use:

```ts
const quote = await cl.workspace.creditsEstimate({
  estimateCostRequest: { tool: 'enrich_list', list_id: list.list_id, scope: 'full' },
});
console.log(`cost=${quote.estimated_cost} sufficient=${quote.sufficient}`);

if (quote.sufficient) {
  const run = await cl.enrichment.enrichList({
    enrichListRequest: { list_id: list.list_id, scope: 'full', quote_id: quote.quote_id },
  });
  console.log('bulk workflow:', run.workflow_id);
}
```

Enrichment **scopes**: `partial` (email + LinkedIn + title + company, 1 credit) ·
`phone_only` (10 credits) · `full` (email **and** phone, 11 credits). Pricing is
pay-for-results — the reservation is a cap and the unused portion is refunded.

### Enrichment is asynchronous — poll for results

`enrichPerson`, `enrichCompany`, `enrichByTask`, and `enrichList` **dispatch a workflow**
and return a `workflow_id`. Poll `enrichmentStatus` until it settles:

```ts
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const TERMINAL = ['completed', 'failed', 'cancelled'];

let status = await cl.enrichment.enrichmentStatus({ workflowId: job.workflow_id });
while (!TERMINAL.includes(status.status)) {
  await sleep(3000);
  status = await cl.enrichment.enrichmentStatus({ workflowId: job.workflow_id });
}
console.log('charged:', status.credits_charged, 'refunded:', status.credits_refunded);
```

---

## Endpoint reference

The v2 surface is 24 operations across five resource groups, exposed on the `Cleanlist`
facade as `cl.workspace`, `cl.leadLists`, `cl.enrichment`, `cl.smartAgents`, and
`cl.export`. Field-by-field model docs live in [`docs/`](docs/).

### Workspace (`cl.workspace`)

| Method | HTTP | Description |
| ------ | ---- | ----------- |
| `whoami()` | `GET /api/v2/whoami` | Identity, org, tier, scopes & features. |
| `creditsBalance()` | `GET /api/v2/credits/balance` | Spendable credit balance. |
| `creditsEstimate({ estimateCostRequest })` | `POST /api/v2/credits/estimate` | Price an op, get a signed quote. |
| `listApiKeys()` | `GET /api/v2/api-keys` | List the org's API keys. |
| `usageReport({ days?, groupBy? })` | `GET /api/v2/usage` | Credit-usage report. |

```ts
const me = await cl.workspace.whoami();
const usage = await cl.workspace.usageReport({ days: 30, groupBy: 'tool' });
const quote = await cl.workspace.creditsEstimate({
  estimateCostRequest: { tool: 'enrich_person', scope: 'full', row_count: 1 },
});
```

### Lead Lists (`cl.leadLists`)

| Method | HTTP | Description |
| ------ | ---- | ----------- |
| `createList({ createListRequest })` | `POST /api/v2/lead-lists` | Create a list (idempotent on name). |
| `listLists({ folderId?, limit?, cursor? })` | `GET /api/v2/lead-lists` | List your lists (paginated). |
| `getList({ listId })` | `GET /api/v2/lead-lists/{list_id}` | Fetch one list. |
| `updateList({ listId, publicLeadListUpdate })` | `PATCH /api/v2/lead-lists/{list_id}` | Rename / move / edit. |
| `deleteList({ listId })` | `DELETE /api/v2/lead-lists/{list_id}` | Delete a list. |
| `listLeadsInList({ listId, limit?, cursor? })` | `GET …/{list_id}/leads` | Page through leads. |
| `addLeadsToList({ listId, body })` | `POST …/{list_id}/leads` | Add leads by id or cohort. |
| `removeLeadsFromList({ listId, removeLeadsRequest })` | `DELETE …/{list_id}/leads` | Remove up to 100. |
| `csvImport({ listId, csvImportRequest })` | `POST …/{list_id}/csv-import` | Import from base64 CSV. |

```ts
const list = await cl.leadLists.createList({ createListRequest: { name: 'Prospects — West' } });

const page = await cl.leadLists.listLeadsInList({ listId: list.list_id, limit: 100 });

// `body` is a one-of: pass lead_ids OR a search cohort (task_id)
await cl.leadLists.addLeadsToList({ listId: list.list_id, body: { lead_ids: ['lead_a', 'lead_b'] } });

await cl.leadLists.removeLeadsFromList({
  listId: list.list_id,
  removeLeadsRequest: { lead_ids: ['lead_a'] },
});
```

### Enrichment (`cl.enrichment`)

| Method | HTTP | Description |
| ------ | ---- | ----------- |
| `enrichPerson({ enrichPersonRequest })` | `POST /api/v2/enrichment/person` | Enrich one contact into a list. |
| `enrichCompany({ enrichCompanyRequest })` | `POST /api/v2/enrichment/company` | Enrich a company. |
| `enrichByTask({ enrichByTaskRequest })` | `POST /api/v2/enrichment/by-task` | Enrich entities from a prior task. |
| `enrichList({ enrichListRequest })` | `POST /api/v2/enrichment/bulk` | Bulk-enrich a list (needs `quote_id`). |
| `enrichmentStatus({ workflowId })` | `GET /api/v2/enrichment/status/{workflow_id}` | Poll a workflow. |

```ts
const job = await cl.enrichment.enrichPerson({
  enrichPersonRequest: { lead_list_id: list.list_id, linkedin_url: 'https://linkedin.com/in/ada' },
});
const company = await cl.enrichment.enrichCompany({ enrichCompanyRequest: { domain: 'stripe.com' } });
```

### Smart Agents (`cl.smartAgents`)

| Method | HTTP | Description |
| ------ | ---- | ----------- |
| `runSmartAgent({ runSmartAgentRequest })` | `POST /api/v2/smart-agents/run` | Run an agent as a new AI column (needs `quote_id`). |
| `listSmartAgents({ listId?, limit? })` | `GET /api/v2/smart-agents` | Recent agent runs. |
| `getSmartAgentResults({ smartAgentTaskId })` | `GET /api/v2/smart-agents/{smart_agent_task_id}` | Per-lead output. |

```ts
const quote = await cl.workspace.creditsEstimate({
  estimateCostRequest: { tool: 'run_smart_agent', list_id: list.list_id, agent_type: 'custom_ai', row_count: 50 },
});
const run = await cl.smartAgents.runSmartAgent({
  runSmartAgentRequest: {
    list_id: list.list_id,
    agent_type: 'custom_ai',
    column_name: 'Personalized angle',
    prompt: 'In one sentence, suggest a cold-outreach angle for this lead.',
    max_rows: 50,
    quote_id: quote.quote_id,
  },
});
const results = await cl.smartAgents.getSmartAgentResults({ smartAgentTaskId: run.smart_agent_task_id });
```

### Export (`cl.export`)

| Method | HTTP | Description |
| ------ | ---- | ----------- |
| `exportCsv({ exportCsvRequest })` | `POST /api/v2/export/csv/signed-url` | Export to CSV; returns a signed URL. |
| `exportJson({ listId, limit?, cursor?, columns? })` | `GET /api/v2/export/json` | Export rows inline as JSON. |

```ts
const signed = await cl.export.exportCsv({ exportCsvRequest: { list_id: list.list_id } });
console.log('download:', signed.download_url); // valid until signed.expires_at

const data = await cl.export.exportJson({ listId: list.list_id, limit: 500 });
for (const row of data.leads) console.log(row);
```

## Error handling

Non-2xx responses throw a `ResponseError` carrying the raw `fetch` `Response`:

```ts
import { ResponseError } from '@cleanlist-ai/sdk';

try {
  await cl.leadLists.getList({ listId: 'does-not-exist' });
} catch (err) {
  if (err instanceof ResponseError) {
    console.error('API error', err.response.status);
    const body = await err.response.json().catch(() => ({}));
    console.error(body);
  } else {
    throw err;
  }
}
```

## Pagination

List endpoints return a page plus an opaque `cursor`. Pass it back for the next page; a
falsy cursor means you've reached the end:

```ts
let cursor: string | null | undefined;
do {
  const page = await cl.leadLists.listLeadsInList({ listId: list.list_id, limit: 500, cursor: cursor ?? undefined });
  for (const lead of page.leads) {
    // ...
  }
  cursor = page.cursor;
} while (cursor);
```

## Using the generated API classes directly

The `Cleanlist` facade is optional sugar. Wire the generated pieces yourself if you prefer:

```ts
import { Configuration, PublicWorkspaceApi } from '@cleanlist-ai/sdk';

const config = new Configuration({
  basePath: 'https://api.cleanlist.ai',
  accessToken: 'clapi_live_...',
});
const workspace = new PublicWorkspaceApi(config);
console.log(await workspace.whoami());
```

## Regenerating from the schema

This SDK is generated with [`openapi-generator-cli`](https://openapi-generator.tech)
(`typescript-fetch`, pinned in `openapitools.json`). To refresh after an API change:

```bash
# 1. Drop the latest openapi/cleanse-api-v2.oas.json in place, then:
npm run generate   # cleans operationIds, regenerates src/, re-applies the facade
npm run build
```

## Support

- Interactive API docs (OpenAPI): <https://api.cleanlist.ai/docs>
- Docs & guides: <https://docs.cleanlist.ai>
- Dashboard: <https://app.cleanlist.ai>
- Email: [sal@cleanlist.ai](mailto:sal@cleanlist.ai)

Licensed under the [MIT License](LICENSE).
