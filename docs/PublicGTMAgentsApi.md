# PublicGTMAgentsApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createGtmAgent**](PublicGTMAgentsApi.md#creategtmagent) | **POST** /api/v2/gtm-agents | Create Gtm Agent |
| [**getGtmAgent**](PublicGTMAgentsApi.md#getgtmagent) | **GET** /api/v2/gtm-agents/{agent_id} | Get Gtm Agent |
| [**getGtmRun**](PublicGTMAgentsApi.md#getgtmrun) | **GET** /api/v2/gtm-runs/{run_id} | Get Gtm Run |
| [**listGtmAgentRuns**](PublicGTMAgentsApi.md#listgtmagentruns) | **GET** /api/v2/gtm-agents/{agent_id}/runs | List Gtm Agent Runs |
| [**listGtmAgents**](PublicGTMAgentsApi.md#listgtmagents) | **GET** /api/v2/gtm-agents | List Gtm Agents |
| [**listGtmRunRecords**](PublicGTMAgentsApi.md#listgtmrunrecords) | **GET** /api/v2/gtm-runs/{run_id}/records | List Gtm Run Records |
| [**patchGtmAgent**](PublicGTMAgentsApi.md#patchgtmagent) | **PATCH** /api/v2/gtm-agents/{agent_id} | Patch Gtm Agent |
| [**runGtmAgent**](PublicGTMAgentsApi.md#rungtmagent) | **POST** /api/v2/gtm-agents/{agent_id}/runs | Run Gtm Agent |
| [**setGtmAgentStatus**](PublicGTMAgentsApi.md#setgtmagentstatus) | **POST** /api/v2/gtm-agents/{agent_id}/status | Set Gtm Agent Status |



## createGtmAgent

> AgentDto createGtmAgent(createGtmAgentBody)

Create Gtm Agent

A draft agent, off, with no play, owned by the caller, with any settings.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { CreateGtmAgentRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // CreateGtmAgentBody
    createGtmAgentBody: ...,
  } satisfies CreateGtmAgentRequest;

  try {
    const data = await api.createGtmAgent(body);
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
| **createGtmAgentBody** | [CreateGtmAgentBody](CreateGtmAgentBody.md) |  | |

### Return type

[**AgentDto**](AgentDto.md)

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


## getGtmAgent

> AgentDto getGtmAgent(agentId)

Get Gtm Agent

One agent, with its plays and status.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { GetGtmAgentRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // string
    agentId: agentId_example,
  } satisfies GetGtmAgentRequest;

  try {
    const data = await api.getGtmAgent(body);
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
| **agentId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AgentDto**](AgentDto.md)

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


## getGtmRun

> RunDetailDto getGtmRun(runId)

Get Gtm Run

One run: its status, counts and per-step stats.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { GetGtmRunRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // string
    runId: runId_example,
  } satisfies GetGtmRunRequest;

  try {
    const data = await api.getGtmRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**RunDetailDto**](RunDetailDto.md)

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


## listGtmAgentRuns

> Array&lt;RunSummaryDto&gt; listGtmAgentRuns(agentId)

List Gtm Agent Runs

The agent\&#39;s runs, newest first.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { ListGtmAgentRunsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // string
    agentId: agentId_example,
  } satisfies ListGtmAgentRunsRequest;

  try {
    const data = await api.listGtmAgentRuns(body);
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
| **agentId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;RunSummaryDto&gt;**](RunSummaryDto.md)

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


## listGtmAgents

> Array&lt;AgentDto&gt; listGtmAgents()

List Gtm Agents

This organization\&#39;s agents, newest first.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { ListGtmAgentsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  try {
    const data = await api.listGtmAgents();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;AgentDto&gt;**](AgentDto.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Bad request. |  -  |
| **401** | Authentication required or invalid. |  -  |
| **403** | Permission denied or feature not enabled. |  -  |
| **404** | Resource not found. |  -  |
| **409** | Resource conflict. |  -  |
| **429** | Rate limited. |  -  |
| **500** | Internal error. |  -  |
| **502** | Upstream provider error. |  -  |
| **422** | Request failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listGtmRunRecords

> RecordsPageDto listGtmRunRecords(runId, nodeId, status, cursor, limit, include)

List Gtm Run Records

A page of the run\&#39;s records, and with &#x60;&#x60;include&#x3D;outputs&#x60;&#x60; what each step wrote for them.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { ListGtmRunRecordsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // string
    runId: runId_example,
    // string (optional)
    nodeId: nodeId_example,
    // string (optional)
    status: status_example,
    // string (optional)
    cursor: cursor_example,
    // number (optional)
    limit: 56,
    // 'outputs' | `outputs` adds each record\'s step outputs. (optional)
    include: include_example,
  } satisfies ListGtmRunRecordsRequest;

  try {
    const data = await api.listGtmRunRecords(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |
| **nodeId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |
| **include** | `outputs` | &#x60;outputs&#x60; adds each record\&#39;s step outputs. | [Optional] [Defaults to `undefined`] [Enum: outputs] |

### Return type

[**RecordsPageDto**](RecordsPageDto.md)

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


## patchGtmAgent

> AgentDto patchGtmAgent(agentId, patchGtmAgentBody)

Patch Gtm Agent

Change the name, settings or schedule, by the portal\&#39;s PATCH rules. An agent that is on changes only its name, description and favorite.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { PatchGtmAgentRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // string
    agentId: agentId_example,
    // PatchGtmAgentBody
    patchGtmAgentBody: ...,
  } satisfies PatchGtmAgentRequest;

  try {
    const data = await api.patchGtmAgent(body);
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
| **agentId** | `string` |  | [Defaults to `undefined`] |
| **patchGtmAgentBody** | [PatchGtmAgentBody](PatchGtmAgentBody.md) |  | |

### Return type

[**AgentDto**](AgentDto.md)

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


## runGtmAgent

> ResponseRunGtmAgentApiV2GtmAgentsAgentIdRunsPost runGtmAgent(agentId, runGtmAgentBody, xConfirmChannel)

Run Gtm Agent

Start one live run of the agent\&#39;s play now: a preview without &#x60;&#x60;commit&#x60;&#x60;, and with it a quote and the approval its play needs. Answers &#x60;&#x60;{run_id, agent_id, status, message}&#x60;&#x60;, or &#x60;&#x60;queued&#x60;&#x60; with no run yet when a CRM cleanup play waits for its scan.

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { RunGtmAgentRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // string
    agentId: agentId_example,
    // RunGtmAgentBody
    runGtmAgentBody: ...,
    // string (optional)
    xConfirmChannel: xConfirmChannel_example,
  } satisfies RunGtmAgentRequest;

  try {
    const data = await api.runGtmAgent(body);
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
| **agentId** | `string` |  | [Defaults to `undefined`] |
| **runGtmAgentBody** | [RunGtmAgentBody](RunGtmAgentBody.md) |  | |
| **xConfirmChannel** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ResponseRunGtmAgentApiV2GtmAgentsAgentIdRunsPost**](ResponseRunGtmAgentApiV2GtmAgentsAgentIdRunsPost.md)

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


## setGtmAgentStatus

> ResponseSetGtmAgentStatusApiV2GtmAgentsAgentIdStatusPost setGtmAgentStatus(agentId, gtmAgentStatusBody, xConfirmChannel)

Set Gtm Agent Status

Turn an agent off, or on with the On toggle\&#39;s checks: a preview without &#x60;&#x60;commit&#x60;&#x60;, and with it a quote and the approval its plays need (see the module note).

### Example

```ts
import {
  Configuration,
  PublicGTMAgentsApi,
} from '@cleanlist-ai/sdk';
import type { SetGtmAgentStatusRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMAgentsApi(config);

  const body = {
    // string
    agentId: agentId_example,
    // GtmAgentStatusBody
    gtmAgentStatusBody: ...,
    // string (optional)
    xConfirmChannel: xConfirmChannel_example,
  } satisfies SetGtmAgentStatusRequest;

  try {
    const data = await api.setGtmAgentStatus(body);
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
| **agentId** | `string` |  | [Defaults to `undefined`] |
| **gtmAgentStatusBody** | [GtmAgentStatusBody](GtmAgentStatusBody.md) |  | |
| **xConfirmChannel** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ResponseSetGtmAgentStatusApiV2GtmAgentsAgentIdStatusPost**](ResponseSetGtmAgentStatusApiV2GtmAgentsAgentIdStatusPost.md)

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

