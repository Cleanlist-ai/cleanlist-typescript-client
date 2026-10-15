# PublicSmartAgentsApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSmartAgentResults**](PublicSmartAgentsApi.md#getsmartagentresults) | **GET** /api/v2/smart-agents/{smart_agent_task_id} | Get smart agent results |
| [**listSmartAgents**](PublicSmartAgentsApi.md#listsmartagents) | **GET** /api/v2/smart-agents | List smart agent runs |
| [**runSmartAgent**](PublicSmartAgentsApi.md#runsmartagentoperation) | **POST** /api/v2/smart-agents/run | Run a smart agent |



## getSmartAgentResults

> SmartAgentResultsResponse getSmartAgentResults(smartAgentTaskId)

Get smart agent results

Poll a smart-agent run for status, progress, and per-lead output.  Returns the run\&#39;s lifecycle &#x60;status&#x60;, a &#x60;progress&#x60; percentage, and succeeded / failed / total counters, along with a &#x60;results&#x60; array holding each lead\&#39;s agent output (or its error). Poll this after POST /smart-agents/run until &#x60;status&#x60; is &#x60;completed&#x60; (or &#x60;failed&#x60;) — the &#x60;results&#x60; array grows as leads finish, so a still-running run returns a partial set. Access is checked via the run\&#39;s list, and unknown or inaccessible run ids return 404. This endpoint is free and does not consume credits.  **📖 Docs:** https://docs.cleanlist.ai/guides/using-ai-agents

### Example

```ts
import {
  Configuration,
  PublicSmartAgentsApi,
} from '@cleanlist-ai/sdk';
import type { GetSmartAgentResultsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicSmartAgentsApi(config);

  const body = {
    // string | Canonical id from /smart-agents/run\'s `smart_agent_task_id` field
    smartAgentTaskId: smartAgentTaskId_example,
  } satisfies GetSmartAgentResultsRequest;

  try {
    const data = await api.getSmartAgentResults(body);
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
| **smartAgentTaskId** | `string` | Canonical id from /smart-agents/run\&#39;s &#x60;smart_agent_task_id&#x60; field | [Defaults to `undefined`] |

### Return type

[**SmartAgentResultsResponse**](SmartAgentResultsResponse.md)

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


## listSmartAgents

> ListSmartAgentsResponse listSmartAgents(listId, limit)

List smart agent runs

List recent smart-agent runs with live progress counters.  Returns each run\&#39;s id, target list, agent type, status, and processed / failed / total counts so you can track in-flight and completed runs. Pass &#x60;list_id&#x60; to scope to a single list (access-checked so a known id can\&#39;t enumerate another workspace\&#39;s history); omit it for a caller-scoped rollup across every list you can see. This endpoint is free and does not consume credits. To read the per-lead output of any run, call GET /smart-agents/{smart_agent_task_id}.  **📖 Docs:** https://docs.cleanlist.ai/guides/using-ai-agents

### Example

```ts
import {
  Configuration,
  PublicSmartAgentsApi,
} from '@cleanlist-ai/sdk';
import type { ListSmartAgentsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicSmartAgentsApi(config);

  const body = {
    // string | Optional lead-list UUID. When set, returns only runs for that list (access-checked). When omitted, returns a rollup of recent runs across every list the caller can see. (optional)
    listId: listId_example,
    // number | Maximum number of runs to return, most recent first. (optional)
    limit: 56,
  } satisfies ListSmartAgentsRequest;

  try {
    const data = await api.listSmartAgents(body);
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
| **listId** | `string` | Optional lead-list UUID. When set, returns only runs for that list (access-checked). When omitted, returns a rollup of recent runs across every list the caller can see. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of runs to return, most recent first. | [Optional] [Defaults to `20`] |

### Return type

[**ListSmartAgentsResponse**](ListSmartAgentsResponse.md)

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


## runSmartAgent

> RunSmartAgentResponse runSmartAgent(runSmartAgentRequest)

Run a smart agent

Launch an AI smart agent over the leads in a list and return a run id.  Pick an &#x60;agent_type&#x60; — &#x60;custom_ai&#x60; (your own &#x60;prompt&#x60;), &#x60;cold_intro_email&#x60; (personalized opener), or a preset research agent — and the run executes asynchronously as a smart column, one AI call per lead. Runs are metered per lead by agent type (&#x60;custom_ai&#x60; is priced from its &#x60;prompt&#x60;, so read its price from the quote; &#x60;cold_intro_email&#x60; ≈ 3 credits/lead) and require a single-use &#x60;quote_id&#x60; from POST /credits/estimate; credits are debited before dispatch. Cold intro email requires enriched profiles and an active organization email template. Scope with &#x60;lead_scope&#x3D;\&quot;subset\&quot;&#x60; + &#x60;max_rows&#x60; for cost control. Any selection above the approval threshold (default 500 leads) is blocked with &#x60;approval_required&#x60;; this public route requires a smaller selection. The response returns immediately with &#x60;status&#x3D;\&quot;pending\&quot;&#x60;; poll GET /smart-agents/{smart_agent_task_id} for progress and per-lead results.  **📖 Docs:** https://docs.cleanlist.ai/guides/using-ai-agents

### Example

```ts
import {
  Configuration,
  PublicSmartAgentsApi,
} from '@cleanlist-ai/sdk';
import type { RunSmartAgentOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicSmartAgentsApi(config);

  const body = {
    // RunSmartAgentRequest
    runSmartAgentRequest: ...,
  } satisfies RunSmartAgentOperationRequest;

  try {
    const data = await api.runSmartAgent(body);
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
| **runSmartAgentRequest** | [RunSmartAgentRequest](RunSmartAgentRequest.md) |  | |

### Return type

[**RunSmartAgentResponse**](RunSmartAgentResponse.md)

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

