/**
 * Find people by filters — look up valid values, preview the compiled query, search.
 *
 * Free: searching spends no credits (credits are spent only when you enrich or save).
 *
 *   npx tsx examples/07_find_people.ts
 */
import { Cleanlist, PeopleSearchCriteria } from '@cleanlist-ai/sdk';

const cl = new Cleanlist({ accessToken: process.env.CLEANLIST_API_KEY, basePath: process.env.CLEANLIST_HOST });

async function main() {
  // 1. Look up valid filter values. Fixed-enum fields (seniority, departments, ...)
  //    return a canned list; free-text fields (titles, locations) autocomplete `query`.
  const seniority = await cl.peopleFinder.searchFiltersPeople({ field: 'seniority' });
  console.log('Seniority values:', seniority.options.slice(0, 8).map((o) => o.id).join(', '));

  const titles = await cl.peopleFinder.searchFiltersPeople({ field: 'titles', query: 'vp sales' });
  console.log('Title suggestions:', titles.options.slice(0, 5).map((o) => o.label).join(', '));

  const criteria: PeopleSearchCriteria = {
    jobTitlesInclude: ['VP of Sales', 'Head of Sales'],
    seniority: ['Vice President'],
    contactCountries: ['USA', 'CAN'],
    companySizes: ['51-200', '201-500'],
  };

  // 2. Dry run: compile the criteria into the provider filter without searching.
  const compiled = await cl.peopleFinder.compileSearch({ compileRequest: { criteria } });
  console.log('Compiled route:', compiled.route);
  for (const warning of compiled.warnings ?? []) console.log('  warning:', warning);

  // 3. Search. `limit` caps this page; pass `cursor` back for the next one.
  const page = await cl.peopleFinder.searchPeople({ peopleSearchRequest: { criteria, limit: 10 } });
  console.log(`${page.total} matches (credits charged: ${page.credits_charged})`);
  for (const row of page.results) {
    console.log(`  - ${row.full_name} | ${row.title} @ ${row.company} | ${row.linkedin_url}`);
  }

  if (page.cursor) {
    const more = await cl.peopleFinder.searchPeople({
      peopleSearchRequest: { criteria, limit: 10, cursor: page.cursor },
    });
    console.log(`Next page: ${more.results.length} more rows`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
