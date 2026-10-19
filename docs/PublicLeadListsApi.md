# PublicLeadListsApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addLeadsToList**](PublicLeadListsApi.md#addleadstolist) | **POST** /api/v2/lead-lists/{list_id}/leads | Add leads to a list |
| [**createList**](PublicLeadListsApi.md#createlistoperation) | **POST** /api/v2/lead-lists | Create a lead list |
| [**csvImport**](PublicLeadListsApi.md#csvimportoperation) | **POST** /api/v2/lead-lists/{list_id}/csv-import | Import leads from CSV |
| [**deleteList**](PublicLeadListsApi.md#deletelist) | **DELETE** /api/v2/lead-lists/{list_id} | Delete a lead list |
| [**findPeople**](PublicLeadListsApi.md#findpeopleoperation) | **POST** /api/v2/lead-lists/{list_id}/find-people | Find people at companies already in a list and import them (async) |
| [**findPeopleStatus**](PublicLeadListsApi.md#findpeoplestatus) | **GET** /api/v2/lead-lists/{list_id}/find-people/status/{workflow_id} | Poll a find-people job |
| [**getList**](PublicLeadListsApi.md#getlist) | **GET** /api/v2/lead-lists/{list_id} | Get a lead list |
| [**listLeadsInList**](PublicLeadListsApi.md#listleadsinlist) | **GET** /api/v2/lead-lists/{list_id}/leads | List leads in a list |
| [**listLists**](PublicLeadListsApi.md#listlists) | **GET** /api/v2/lead-lists | List lead lists |
| [**removeLeadsFromList**](PublicLeadListsApi.md#removeleadsfromlist) | **DELETE** /api/v2/lead-lists/{list_id}/leads | Remove leads from a list |
| [**updateList**](PublicLeadListsApi.md#updatelist) | **PATCH** /api/v2/lead-lists/{list_id} | Update a lead list |



## addLeadsToList

> AddLeadsResponse addLeadsToList(listId, body)

Add leads to a list

Add leads to a list in one of two mutually-exclusive modes.  Mode A (&#x60;lead_ids&#x60;): add already-materialized leads by UUID. Mode B (&#x60;task_id&#x60; [+ &#x60;entity_ids&#x60;]): materialize a prior search cohort into the list (search rows carry integer search-DB ids, not lead UUIDs, so they can\&#39;t go through Mode A).  The body is an exclusive &#x60;oneOf&#x60; union (&#x60;AddByLeadIds | AddByCohort&#x60;): both-set or neither-set bodies are rejected at the schema layer (422), so this handler only sees a well-formed single mode. Filter-based add is rejected — the MCP description tells the agent to translate filters into a cohort task_id (or lead_ids) first.  Import / \&quot;Add to list\&quot; is FREE — materializing leads costs no credits; only enrichment is billed separately. Pass an optional &#x60;idempotency_key&#x60; so a retried add inserts exactly once. Requires the &#x60;lists:write&#x60; scope.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { AddLeadsToListRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // Body
    body: ...,
  } satisfies AddLeadsToListRequest;

  try {
    const data = await api.addLeadsToList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |
| **body** | [Body](Body.md) |  | |

### Return type

[**AddLeadsResponse**](AddLeadsResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createList

> ListDetailResponse createList(createListRequest)

Create a lead list

Create a private LeadList in the caller\&#39;s workspace.  Idempotent on name: MCP agents sometimes fire create_list twice for one \&quot;make a list\&quot; request (seconds apart), leaving an orphan empty list. If the caller already OWNS an exact same-name list (case-insensitive), reuse it instead of inserting a duplicate — returns 200 + &#x60;reused: true&#x60;. Strictly caller-scoped: a user never reuses a teammate\&#39;s org-visible list, and match is exact name only, so \&quot;Q3 Leads\&quot; never reuses \&quot;Q3 Leads List\&quot;.  Requires the &#x60;lists:write&#x60; scope. Public-tier keys carry no contact-list cap, but the cap is still enforced defensively (403 &#x60;list_cap_reached&#x60;). Pass an optional &#x60;folder_id&#x60; you own to file the new list on creation.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { CreateListOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // CreateListRequest
    createListRequest: ...,
  } satisfies CreateListOperationRequest;

  try {
    const data = await api.createList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createListRequest** | [CreateListRequest](CreateListRequest.md) |  | |

### Return type

[**ListDetailResponse**](ListDetailResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **200** | Existing same-name list reused (idempotent); &#x60;reused&#x60; is true. |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## csvImport

> CsvImportResponse csvImport(listId, csvImportRequest)

Import leads from CSV

Import a CSV into a lead list and optionally dispatch bulk enrichment.  Pipeline:     1. Authz: &#x60;lists:write&#x60; always; &#x60;enrich:write&#x60; additionally when        &#x60;dispatch_enrichment&#x3D;True&#x60; (the workflow spends credits).     2. Idempotency cache lookup (org-wide, 24h TTL).     3. Base64 decode + parse via &#x60;parse_csv_to_rawpeople&#x60;.     4. If dispatching: verify quote (if provided), open reservation,        redeem quote.     5. Bulk-insert RawPeople into the list. UUIDs are stamped        Python-side so we can hand them to the workflow.     6. If dispatching: kick off &#x60;start_bulk_enrichment&#x60; with the        parsed prospects + raw_person_ids. The workflow\&#39;s per-Lead        &#x60;insert_lead_to_list&#x60; activity handles prospect_count        updates per the existing pattern; import-only path bumps        prospect_count here directly.     7. Cache the response under &#x60;idempotency_key&#x60; (if provided).  Cross-list dedup: this endpoint dedupes ONLY within the upload. A row whose identity already exists as a Lead elsewhere in the workspace still imports as a RawPerson here; the workflow\&#39;s &#x60;persist_enrichment_result&#x60; then deduplicates against existing Leads by public_identifier / prospect_id (existing behavior). Net effect: no duplicate Lead, but the RawPerson stub persists until the workflow processes it.  Send the file as base64 in &#x60;csv_content_base64&#x60; (≤150 KB / ~600 rows) with a &#x60;column_mapping&#x60; from canonical field to CSV header. Requires the &#x60;lists:write&#x60; scope, plus &#x60;enrich:write&#x60; when &#x60;dispatch_enrichment&#x3D;true&#x60; (the enrichment spend). Importing rows is free; when dispatching, enrichment is billed on top (partial 1cr, phone_only 10cr, full 11cr per lead). Pass an &#x60;idempotency_key&#x60; to make retries safe.  **📖 Docs:** https://docs.cleanlist.ai/guides/bulk-enrichment

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { CsvImportOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // CsvImportRequest
    csvImportRequest: ...,
  } satisfies CsvImportOperationRequest;

  try {
    const data = await api.csvImport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |
| **csvImportRequest** | [CsvImportRequest](CsvImportRequest.md) |  | |

### Return type

[**CsvImportResponse**](CsvImportResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteList

> DeleteListResponse deleteList(listId)

Delete a lead list

Delete a list and its lead memberships. Leads survive.  Hard delete via &#x60;delete_with_dependencies&#x60; (mirrors the portal): smart/action columns, CRM-contact links, per-user state, shares, raw-person stubs, and junction rows are removed; the Lead rows themselves are global entities and are NOT deleted — they stay findable via search_people and in any other list they belong to.  Owner-only + is_protected guards mirror the portal. There is no in-flight-workflow guard (the portal has none either; the MCP confirm-gate already prevents accidental deletes off a fuzzy name match). Re-deleting an unknown/already-deleted list returns 404.  Owner-only: a non-owner gets 404 (indistinguishable from missing) and a protected list gets 403 &#x60;list_protected&#x60;. Requires the &#x60;lists:write&#x60; scope.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { DeleteListRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
  } satisfies DeleteListRequest;

  try {
    const data = await api.deleteList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteListResponse**](DeleteListResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findPeople

> FindPeopleResponse findPeople(listId, findPeopleRequest)

Find people at companies already in a list and import them (async)

Start an async job that finds people at the given companies (which must already belong to &#x60;&#x60;list_id&#x60;&#x60;) and imports them into that list. Take the &#x60;&#x60;company_ids&#x60;&#x60; from the &#x60;&#x60;company_id&#x60;&#x60; field of the list\&#39;s lead rows (GET /lead-lists/{list_id}/leads).  Returns a &#x60;&#x60;workflow_id&#x60;&#x60; immediately; poll &#x60;&#x60;poll_url&#x60;&#x60; (GET /lead-lists/{list_id}/find-people/status/{workflow_id}) until &#x60;&#x60;status&#x60;&#x60; is terminal. Discovery is free; imports bill the standard per-new-lead cost.

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { FindPeopleOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // FindPeopleRequest
    findPeopleRequest: ...,
  } satisfies FindPeopleOperationRequest;

  try {
    const data = await api.findPeople(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |
| **findPeopleRequest** | [FindPeopleRequest](FindPeopleRequest.md) |  | |

### Return type

[**FindPeopleResponse**](FindPeopleResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findPeopleStatus

> FindPeopleStatusResponse findPeopleStatus(listId, workflowId)

Poll a find-people job

Poll a find-people job started by &#x60;&#x60;POST /lead-lists/{list_id}/find-people&#x60;&#x60;. Free and idempotent — call until &#x60;&#x60;status&#x60;&#x60; is terminal (&#x60;&#x60;completed&#x60;&#x60; / &#x60;&#x60;failed&#x60;&#x60; / &#x60;&#x60;cancelled&#x60;&#x60;). Cross-tenant workflow ids fail closed as 404. &#x60;&#x60;list_id&#x60;&#x60; is for path nesting; the lookup is by &#x60;&#x60;workflow_id&#x60;&#x60; + org.

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { FindPeopleStatusRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // string
    workflowId: workflowId_example,
  } satisfies FindPeopleStatusRequest;

  try {
    const data = await api.findPeopleStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |
| **workflowId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**FindPeopleStatusResponse**](FindPeopleStatusResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getList

> ListDetailResponse getList(listId)

Get a lead list

Return one LeadList accessible to the caller.  &#x60;lead_count&#x60; is derived from a live membership COUNT rather than the denormalized &#x60;prospect_count&#x60; column, so a just-completed add/remove is reflected immediately and any historical counter drift can\&#39;t surface a wrong number here.  Resolves any list you can access — owned, org-visible, or shared with you — and 404s otherwise so private lists never leak. Requires the &#x60;lists:read&#x60; scope.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { GetListRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
  } satisfies GetListRequest;

  try {
    const data = await api.getList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ListDetailResponse**](ListDetailResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLeadsInList

> LeadsPageResponse listLeadsInList(listId, limit, cursor)

List leads in a list

Paginate leads in a list.  Fields like &#x60;first_name&#x60;, &#x60;last_name&#x60;, &#x60;title&#x60;, &#x60;company&#x60; come from the joined Prospect + Company relations — the Lead row itself only carries enrichment results (email, phone, linkedin URL).  Page forward with &#x60;limit&#x60; (1–500, default 100) and the opaque &#x60;cursor&#x60;. The response also carries a &#x60;task_id&#x60; cohort handle for the page so a follow-up &#x60;add_person_enrichments&#x60; can operate on these leads without re-passing lead_ids. Requires the &#x60;lists:read&#x60; scope.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { ListLeadsInListRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListLeadsInListRequest;

  try {
    const data = await api.listLeadsInList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**LeadsPageResponse**](LeadsPageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLists

> ListsPageResponse listLists(folderId, limit, cursor)

List lead lists

Paginate the lead lists the caller can access (owned, org-wide, shared).  Returns a page of &#x60;ListSummary&#x60; rows with live lead counts and owner names. Page forward with &#x60;limit&#x60; (1–100, default 50) and the opaque &#x60;cursor&#x60; from the previous response; omit &#x60;cursor&#x60; to start at the top. Pass &#x60;folder_id&#x60; to scope the page to one folder. Requires the &#x60;lists:read&#x60; scope.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { ListListsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string (optional)
    folderId: folderId_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListListsRequest;

  try {
    const data = await api.listLists(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **folderId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListsPageResponse**](ListsPageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeLeadsFromList

> RemoveLeadsResponse removeLeadsFromList(listId, removeLeadsRequest)

Remove leads from a list

Remove leads from a list (max 100 per call).  Removes the membership row only — the Lead itself stays in the workspace (still findable via &#x60;search_people&#x60;, still in other lists it belonged to). Non-existent lead_ids are silently no-op so the caller can dedupe loosely without 404s.  Removing leads is free — no credits are refunded or charged. Requires the &#x60;lists:write&#x60; scope.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { RemoveLeadsFromListRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // RemoveLeadsRequest
    removeLeadsRequest: ...,
  } satisfies RemoveLeadsFromListRequest;

  try {
    const data = await api.removeLeadsFromList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |
| **removeLeadsRequest** | [RemoveLeadsRequest](RemoveLeadsRequest.md) |  | |

### Return type

[**RemoveLeadsResponse**](RemoveLeadsResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateList

> ListDetailResponse updateList(listId, publicLeadListUpdate)

Update a lead list

Rename a list (and optionally re-describe it / move it between folders).  PATCH semantics: only the fields present in the body change. A &#x60;null&#x60; &#x60;description&#x60; clears it; a &#x60;null&#x60; &#x60;folder_id&#x60; unfiles the list; an omitted field is left untouched. Renaming to the current name is an idempotent 200 no-op. Owner-only + is_protected guards mirror the portal\&#39;s edit path.  At least one of &#x60;name&#x60;, &#x60;description&#x60;, or &#x60;folder_id&#x60; must be present; an empty body is a 422. Requires the &#x60;lists:write&#x60; scope.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/lead-lists · https://docs.cleanlist.ai/guides/managing-lists

### Example

```ts
import {
  Configuration,
  PublicLeadListsApi,
} from '@cleanlist-ai/sdk';
import type { UpdateListRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicLeadListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // PublicLeadListUpdate
    publicLeadListUpdate: ...,
  } satisfies UpdateListRequest;

  try {
    const data = await api.updateList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listId** | `string` |  | [Defaults to `undefined`] |
| **publicLeadListUpdate** | [PublicLeadListUpdate](PublicLeadListUpdate.md) |  | |

### Return type

[**ListDetailResponse**](ListDetailResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Request failed validation. |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

