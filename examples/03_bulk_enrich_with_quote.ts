/**
 * The quote -> bulk-enrich credit flow.
 *
 * Bulk ops must be pre-priced: enrichList redeems a signed, single-use quote_id (bound
 * to the list + scope + lead count). The quote caps the spend. The pricing endpoint
 * (POST /api/v2/credits/estimate) is no longer part of the public API spec, so this
 * SDK cannot request a quote — pass one you already have.
 *
 * ⚠️ Spends credits for every lead in the list.
 *
 *   npx tsx examples/03_bulk_enrich_with_quote.ts <list_id> <quote_id>
 */
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const TERMINAL = ['completed', 'failed', 'cancelled'];
const SCOPE = 'full'; // partial | phone_only | full

async function main() {
  const [listId, quoteId] = process.argv.slice(2);
  if (!listId || !quoteId) {
    throw new Error('Usage: npx tsx examples/03_bulk_enrich_with_quote.ts <list_id> <quote_id>');
  }

  // 1. Show the balance before spending.
  console.log('Balance:', await cl.workspace.creditsBalance());

  // 2. Redeem the quote.
  const run = await cl.enrichment.enrichList({
    enrichListRequest: { list_id: listId, scope: SCOPE, quote_id: quoteId },
  });
  console.log('Bulk workflow dispatched:', run.workflow_id);

  // 3. Poll.
  let status = await cl.enrichment.enrichmentStatus({ workflowId: run.workflow_id });
  while (!TERMINAL.includes(status.status)) {
    console.log(`  ${status.status}: ${status.processed}/${status.total} (ok=${status.completed} failed=${status.failed})`);
    await sleep(5000);
    status = await cl.enrichment.enrichmentStatus({ workflowId: run.workflow_id });
  }
  console.log(`Finished: charged=${status.credits_charged} refunded=${status.credits_refunded}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
