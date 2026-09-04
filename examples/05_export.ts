/**
 * Export a list — CSV (signed URL) and JSON (inline, paginated). Free.
 *
 *   npx tsx examples/05_export.ts <list_id>
 */
import { Cleanlist } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

async function main() {
  const listId = process.argv[2];
  if (!listId) throw new Error('Usage: npx tsx examples/05_export.ts <list_id>');

  // CSV: short-lived signed URL.
  const signed = await cl.export.exportCsv({ exportCsvRequest: { list_id: listId } });
  console.log(`CSV: ${signed.row_count} rows, ${signed.file_size_bytes} bytes`);
  console.log(`     download_url (expires ${signed.expires_at}): ${signed.download_url}`);

  // JSON: rows inline, page by page.
  let cursor: string | null | undefined;
  let count = 0;
  let total = 0;
  do {
    const data = await cl.export.exportJson({ listId, limit: 500, cursor: cursor ?? undefined });
    count += data.leads.length;
    total = data.total;
    cursor = data.cursor;
  } while (cursor);
  console.log(`JSON: streamed ${count} of ${total} rows.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
