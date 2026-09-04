/**
 * Catching API errors. Free.
 *
 * Non-2xx responses throw a `ResponseError` carrying the raw fetch `Response`.
 *
 *   npx tsx examples/06_error_handling.ts
 */
import { Cleanlist, ResponseError } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

async function main() {
  try {
    await cl.leadLists.getList({ listId: '00000000-0000-0000-0000-000000000000' });
  } catch (err) {
    if (err instanceof ResponseError) {
      const status = err.response.status;
      const body = await err.response.json().catch(() => ({}));
      if (status === 404) console.log('[404] no such list — handled');
      else if (status === 401) console.log('[401] bad or missing API key');
      else console.log(`[${status}]`, body);
    } else {
      throw err;
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
