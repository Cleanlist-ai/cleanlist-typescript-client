/**
 * Quickstart — the 60-second tour. Free (no credits spent).
 *
 *   npx tsx examples/01_quickstart.ts
 */
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({
  accessToken: process.env.CLEANLIST_API_KEY,
  basePath: process.env.CLEANLIST_HOST, // undefined -> production default
});

async function main() {
  // Who am I? — identity, org, plan tier, scopes.
  const me = await cl.workspace.whoami();
  console.log(`Authenticated as org '${me.organization_name}' (tier: ${me.tier})`);

  // Credit balance.
  const { credits } = await cl.workspace.creditsBalance();
  console.log('Credit balance:', credits);

  // Create a lead list (idempotent on name).
  const list = await cl.leadLists.createList({ createListRequest: { name: 'SDK quickstart' } });
  console.log('List ready:', list.list_id);

  // Recent lists.
  const page = await cl.leadLists.listLists({ limit: 5 });
  console.log('Recent lists:');
  for (const s of page.lists) console.log(`  - ${s.name} (${s.lead_count} leads)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
