/**
 * The estimate -> quote -> bulk-enrich credit flow.
 *
 * Bulk ops must be pre-priced: creditsEstimate returns a signed, single-use quote_id
 * that enrichList redeems. The quote caps the spend.
 *
 * ⚠️ Spends credits for every lead in the list. Stops before dispatch if the balance
 * is insufficient, and prints the cost first.
 *
 *   npx tsx examples/03_bulk_enrich_with_quote.ts <list_id>
 */
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const TERMINAL = ['completed', 'failed', 'cancelled'];
const SCOPE = 'full'; // partial | phone_only | full

async function main() {
  const listId = process.argv[2];
  if (!listId) throw new Error('Usage: npx tsx examples/03_bulk_enrich_with_quote.ts <list_id>');

  // 1. Price it.
  const quote = await cl.workspace.creditsEstimate({
    estimateCostRequest: { tool: 'enrich_list', list_id: listId, scope: SCOPE },
  });
  console.log(
    `Estimate: ${quote.estimated_cost} credits for ${quote.row_count} leads ` +
      `(you have ${quote.available_credits}, sufficient=${quote.sufficient})`,
  );
  if (!quote.sufficient) throw new Error('Not enough credits — top up at app.cleanlist.ai/billing.');

  // 2. Redeem the quote.
  const run = await cl.enrichment.enrichList({
    enrichListRequest: { list_id: listId, scope: SCOPE, quote_id: quote.quote_id },
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
