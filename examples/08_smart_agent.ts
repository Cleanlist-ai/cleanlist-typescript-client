/**
 * Run a custom AI smart-agent column over a list and read the per-lead results.
 *
 * ⚠️ Spends credits (priced per processed row). Estimates first and prints the cost.
 *
 *   npx tsx examples/08_smart_agent.ts <list_id>
 */
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const TERMINAL = ['completed', 'failed', 'cancelled'];
const MAX_ROWS = 25;

async function main() {
  const listId = process.argv[2];
  if (!listId) throw new Error('Usage: npx tsx examples/08_smart_agent.ts <list_id>');

  // Price the run for the exact request shape.
  const quote = await cl.workspace.creditsEstimate({
    estimateCostRequest: { tool: 'run_smart_agent', list_id: listId, agent_type: 'custom_ai', row_count: MAX_ROWS },
  });
  console.log(`Cost: ${quote.estimated_cost} credits (sufficient=${quote.sufficient})`);
  if (!quote.sufficient) throw new Error('Not enough credits.');

  const run = await cl.smartAgents.runSmartAgent({
    runSmartAgentRequest: {
      list_id: listId,
      agent_type: 'custom_ai',
      column_name: 'Outreach angle',
      prompt: 'In one sentence, suggest a cold-outreach angle for this lead.',
      lead_scope: 'subset',
      max_rows: MAX_ROWS,
      quote_id: quote.quote_id,
    },
  });
  console.log(`Started smart agent: ${run.smart_agent_task_id} (status=${run.status})`);

  // Poll the run's results endpoint until it finishes.
  let res = await cl.smartAgents.getSmartAgentResults({ smartAgentTaskId: run.smart_agent_task_id });
  while (!TERMINAL.includes(res.status)) {
    console.log(`  ${res.status}: ok=${res.succeeded} failed=${res.failed}/${res.total}`);
    await sleep(5000);
    res = await cl.smartAgents.getSmartAgentResults({ smartAgentTaskId: run.smart_agent_task_id });
  }

  for (const row of (res.results ?? []).slice(0, 10)) {
    console.log(`  lead=${row.lead_id} -> ${JSON.stringify(row.value)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
