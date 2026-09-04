/**
 * Full lead-list lifecycle — create, read, update, paginate, delete. Free.
 *
 *   npx tsx examples/04_lead_lists.ts
 */
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

/** Yield every lead in a list, transparently following the cursor. */
async function* iterAllLeads(listId: string, pageSize = 500) {
  let cursor: string | null | undefined;
  do {
    const page = await cl.leadLists.listLeadsInList({ listId, limit: pageSize, cursor: cursor ?? undefined });
    yield* page.leads;
    cursor = page.cursor;
  } while (cursor);
}

async function main() {
  // Create (idempotent on name).
  const list = await cl.leadLists.createList({
    createListRequest: { name: 'SDK — CRUD demo', description: 'created by the SDK example' },
  });
  console.log(`Created ${list.list_id} (reused=${list.reused})`);

  // Read one.
  const detail = await cl.leadLists.getList({ listId: list.list_id });
  console.log(`Name=${detail.name} leads=${detail.lead_count} enriched=${detail.enriched_count}`);

  // Update.
  await cl.leadLists.updateList({
    listId: list.list_id,
    publicLeadListUpdate: { description: 'updated by the SDK example' },
  });
  console.log('Updated description.');

  // Paginate all leads.
  let total = 0;
  for await (const _ of iterAllLeads(list.list_id)) total++;
  console.log(`Walked ${total} leads across all pages.`);

  // Clean up.
  await cl.leadLists.deleteList({ listId: list.list_id });
  console.log('Deleted list.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
