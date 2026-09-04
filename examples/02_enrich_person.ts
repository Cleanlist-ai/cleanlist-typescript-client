/**
 * Enrich a single person and poll the workflow to completion.
 *
 * ⚠️ Spends credits (partial scope = 1 credit if data is found; pay-for-results).
 *
 *   npx tsx examples/02_enrich_person.ts
 */
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const TERMINAL = ['completed', 'failed', 'cancelled'];

async function main() {
  const list = await cl.leadLists.createList({ createListRequest: { name: 'SDK — enrich person' } });

  // Provide whatever you know: email, linkedin_url, or name + company/domain.
  const job = await cl.enrichment.enrichPerson({
    enrichPersonRequest: {
      lead_list_id: list.list_id,
      first_name: 'Ada',
      last_name: 'Lovelace',
      company_name: 'Analytical Engines',
    },
  });
  console.log(`Dispatched workflow ${job.workflow_id} (reserved ${job.credits_reserved} credits)`);

  let status = await cl.enrichment.enrichmentStatus({ workflowId: job.workflow_id });
  while (!TERMINAL.includes(status.status)) {
    console.log(`  status=${status.status} processed=${status.processed}/${status.total}`);
    await sleep(3000);
    status = await cl.enrichment.enrichmentStatus({ workflowId: job.workflow_id });
  }

  console.log(`Done: charged=${status.credits_charged} refunded=${status.credits_refunded}`);
  if (status.result) console.log('Result:', status.result);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
