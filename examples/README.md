# Cleanlist TypeScript SDK — examples

Reference scripts using `@cleanlist-ai/sdk`.

## Setup

```bash
npm install @cleanlist-ai/sdk
export CLEANLIST_API_KEY="clapi_live_..."   # app.cleanlist.ai → Settings → API Keys
```

Run a TypeScript example with [`tsx`](https://github.com/privatenumber/tsx) (no build step):

```bash
npx tsx examples/01_quickstart.ts
```

Point at a local backend with `export CLEANLIST_HOST="http://localhost:8000"`.

Type-check every example against the SDK sources (no build needed):

```bash
npx tsc -p examples
```

## Examples

| File | What it shows |
| ---- | ------------- |
| [`01_quickstart.ts`](01_quickstart.ts) | whoami, credit balance, create a list. Free. |
| [`02_enrich_person.ts`](02_enrich_person.ts) | Enrich one contact and poll to completion. Spends credits. |
| [`03_bulk_enrich_with_quote.ts`](03_bulk_enrich_with_quote.ts) | The estimate → quote → bulk-enrich flow. Spends credits. |
| [`04_lead_lists.ts`](04_lead_lists.ts) | List CRUD + paginate all leads. Free. |
| [`05_export.ts`](05_export.ts) | CSV (signed URL) + JSON export. Free. |
| [`06_error_handling.ts`](06_error_handling.ts) | Catching `ResponseError`. Free. |
| [`07_find_people.ts`](07_find_people.ts) | People Finder: filter values, compile preview, search + next page. Free. |
| [`08_smart_agent.ts`](08_smart_agent.ts) | Run a custom AI smart-agent column and read the results. Spends credits. |

> ⚠️ Examples that enrich or run smart agents **spend credits** (they estimate first and
> print the cost). Read each script's header before running.
