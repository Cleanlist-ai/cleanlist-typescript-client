# PublicEnrichmentApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**enrichByTask**](PublicEnrichmentApi.md#enrichbytaskoperation) | **POST** /api/v2/enrichment/by-task | Enrich entities from a prior task |
| [**enrichCompany**](PublicEnrichmentApi.md#enrichcompanyoperation) | **POST** /api/v2/enrichment/company | Enrich a company |
| [**enrichList**](PublicEnrichmentApi.md#enrichlistoperation) | **POST** /api/v2/enrichment/bulk | Enrich a whole lead list |
| [**enrichPerson**](PublicEnrichmentApi.md#enrichpersonoperation) | **POST** /api/v2/enrichment/person | Enrich a single person |
| [**enrichmentStatus**](PublicEnrichmentApi.md#enrichmentstatus) | **GET** /api/v2/enrichment/status/{workflow_id} | Poll an enrichment workflow |



## enrichByTask

> EnrichByTaskResponse enrichByTask(enrichByTaskRequest)

Enrich entities from a prior task

Enrich a cohort of entities referenced by a &#x60;task_id&#x60; returned from a prior search, without re-listing every identifier.  The task\&#39;s entity type decides the flow. Person (or lead) tasks dispatch an asynchronous workflow — the response carries a &#x60;workflow_id&#x60; with every entity &#x60;queued&#x60;, and results land in &#x60;lead_list_id&#x60; (a hidden per-user scratch list is auto-created when none is given); poll status for progress. Company tasks run synchronously — each entity returns an inline &#x60;enriched&#x60;/&#x60;skipped&#x60;/&#x60;failed&#x60; result with no workflow. Both paths are billed per entity and REQUIRE a &#x60;quote_id&#x60; from POST /credits/estimate (person cohort cost follows the requested data points; company cohort is ~1 credit per 10 companies), settling with pay-for-results semantics.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment-types **📖 Docs:** https://docs.cleanlist.ai/guides/bulk-enrichment

### Example

```ts
import {
  Configuration,
  PublicEnrichmentApi,
} from '@cleanlist-ai/sdk';
import type { EnrichByTaskOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicEnrichmentApi(config);

  const body = {
    // EnrichByTaskRequest
    enrichByTaskRequest: ...,
  } satisfies EnrichByTaskOperationRequest;

  try {
    const data = await api.enrichByTask(body);
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
| **enrichByTaskRequest** | [EnrichByTaskRequest](EnrichByTaskRequest.md) |  | |

### Return type

[**EnrichByTaskResponse**](EnrichByTaskResponse.md)

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


## enrichCompany

> EnrichCompanyResponse enrichCompany(enrichCompanyRequest)

Enrich a company

Look up firmographics for a single company and return the full record synchronously.  Unlike person enrichment, this path is synchronous — it performs a CompanyDB single-record lookup inline (no Temporal workflow, no &#x60;workflow_id&#x60;) and returns the enriched &#x60;CompanyRecord&#x60; in the response, billing a flat 1 credit that settles before the response returns. Pass any of &#x60;domain&#x60; (most reliable), &#x60;company_id&#x60;, &#x60;company_name&#x60;, or &#x60;company_ticker&#x60;; a ticker is resolved to a domain via Finnhub (24h Redis cache) and falls back to a &#x60;company_name&#x60; fuzzy match when the symbol is unknown. &#x60;quote_id&#x60; is optional and, when present, verified and redeemed.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment-types **📖 Docs:** https://docs.cleanlist.ai/guides/bulk-enrichment

### Example

```ts
import {
  Configuration,
  PublicEnrichmentApi,
} from '@cleanlist-ai/sdk';
import type { EnrichCompanyOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicEnrichmentApi(config);

  const body = {
    // EnrichCompanyRequest
    enrichCompanyRequest: ...,
  } satisfies EnrichCompanyOperationRequest;

  try {
    const data = await api.enrichCompany(body);
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
| **enrichCompanyRequest** | [EnrichCompanyRequest](EnrichCompanyRequest.md) |  | |

### Return type

[**EnrichCompanyResponse**](EnrichCompanyResponse.md)

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


## enrichList

> EnrichListResponse enrichList(enrichListRequest)

Enrich a whole lead list

Run the provider waterfall over every lead in an existing list in one call.  This is an asynchronous, fan-out workflow: it reserves the estimated cost, returns a &#x60;workflow_id&#x60; immediately, then enriches all leads in parallel background child workflows — poll &#x60;poll_url&#x60; for aggregate progress and the settled billing. &#x60;scope&#x60; sets the per-lead enrichment type (&#x60;partial&#x60; &#x3D; 1 credit, &#x60;phone-only&#x60; &#x3D; 10, &#x60;full&#x60; &#x3D; 11). A &#x60;quote_id&#x60; from POST /credits/estimate is REQUIRED and bound to this list + scope + lead count; the actual charge is the recomputed cost capped at the quote\&#39;s &#x60;max_credits&#x60;, and pay-for-results refunds the unused reservation for leads where nothing was found.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment-types **📖 Docs:** https://docs.cleanlist.ai/guides/bulk-enrichment

### Example

```ts
import {
  Configuration,
  PublicEnrichmentApi,
} from '@cleanlist-ai/sdk';
import type { EnrichListOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicEnrichmentApi(config);

  const body = {
    // EnrichListRequest
    enrichListRequest: ...,
  } satisfies EnrichListOperationRequest;

  try {
    const data = await api.enrichList(body);
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
| **enrichListRequest** | [EnrichListRequest](EnrichListRequest.md) |  | |

### Return type

[**EnrichListResponse**](EnrichListResponse.md)

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


## enrichPerson

> EnrichPersonResponse enrichPerson(enrichPersonRequest)

Enrich a single person

Resolve email and/or phone for one contact through the provider waterfall and write the result to a lead list.  This is an asynchronous workflow: it reserves credits up front, returns a &#x60;workflow_id&#x60; immediately, then runs the provider cascade in the background — poll &#x60;poll_url&#x60; (GET /enrichment/status/{workflow_id}) until &#x60;status&#x60; is terminal. Cost is set by &#x60;enrichment_type&#x60;: 1 credit for &#x60;partial&#x60; (email only), 10 for &#x60;phone_only&#x60;, or 11 for &#x60;full&#x60; (email + phone); the legacy &#x60;include_phone&#x60; boolean is used when the field is unset. Pay-for-results means the final debit may be lower than &#x60;credits_reserved&#x60;. &#x60;quote_id&#x60; is optional here — single-call scale doesn\&#39;t require it, but a supplied quote is verified and redeemed so the caller can pre-commit spend.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment-types **📖 Docs:** https://docs.cleanlist.ai/guides/bulk-enrichment

### Example

```ts
import {
  Configuration,
  PublicEnrichmentApi,
} from '@cleanlist-ai/sdk';
import type { EnrichPersonOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicEnrichmentApi(config);

  const body = {
    // EnrichPersonRequest
    enrichPersonRequest: ...,
  } satisfies EnrichPersonOperationRequest;

  try {
    const data = await api.enrichPerson(body);
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
| **enrichPersonRequest** | [EnrichPersonRequest](EnrichPersonRequest.md) |  | |

### Return type

[**EnrichPersonResponse**](EnrichPersonResponse.md)

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


## enrichmentStatus

> WorkflowStatusResponse enrichmentStatus(workflowId)

Poll an enrichment workflow

Poll the status, progress, and settled billing of an enrichment workflow started by &#x60;enrich_person&#x60;, &#x60;enrich_list&#x60;, or &#x60;enrich_by_task&#x60;.  This read is free and idempotent — call it repeatedly until &#x60;status&#x60; reaches a terminal state (&#x60;completed&#x60; / &#x60;failed&#x60; / &#x60;cancelled&#x60;). It accepts EITHER a &#x60;workflow_id&#x60; (e.g. &#x60;enrich-...&#x60; / &#x60;bulk-enrich-...&#x60;) OR an MCPTask cohort &#x60;task_id&#x60; (&#x60;cl-task_...&#x60;), resolving the latter to the workflow bound at dispatch so the agent can keep using the one handle it already has. Terminal single-lead runs include the inline enriched &#x60;result&#x60;; bulk runs report aggregate counters instead. When a prepaid-via-MCP run ends in failure, &#x60;refund_status&#x60; surfaces &#x60;pending_review&#x60; (credits are not auto-refunded).  **📖 Docs:** https://docs.cleanlist.ai/api-reference/enrichment

### Example

```ts
import {
  Configuration,
  PublicEnrichmentApi,
} from '@cleanlist-ai/sdk';
import type { EnrichmentStatusRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicEnrichmentApi(config);

  const body = {
    // string
    workflowId: workflowId_example,
  } satisfies EnrichmentStatusRequest;

  try {
    const data = await api.enrichmentStatus(body);
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
| **workflowId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowStatusResponse**](WorkflowStatusResponse.md)

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

