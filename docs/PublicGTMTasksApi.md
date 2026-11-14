# PublicGTMTasksApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createGtmTask**](PublicGTMTasksApi.md#creategtmtask) | **POST** /api/v2/gtm-tasks | Create Gtm Task |
| [**getGtmTask**](PublicGTMTasksApi.md#getgtmtask) | **GET** /api/v2/gtm-tasks/{task_id} | Get Gtm Task |
| [**listGtmTasks**](PublicGTMTasksApi.md#listgtmtasks) | **GET** /api/v2/gtm-tasks | List Gtm Tasks |
| [**listUpdates**](PublicGTMTasksApi.md#listupdates) | **GET** /api/v2/updates | List Updates |
| [**updateGtmTask**](PublicGTMTasksApi.md#updategtmtask) | **PATCH** /api/v2/gtm-tasks/{task_id} | Update Gtm Task |



## createGtmTask

> any createGtmTask(createTaskBody)

Create Gtm Task

A task for the caller on a lead in one of the organization\&#39;s sequences.

### Example

```ts
import {
  Configuration,
  PublicGTMTasksApi,
} from '@cleanlist-ai/sdk';
import type { CreateGtmTaskRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMTasksApi(config);

  const body = {
    // CreateTaskBody
    createTaskBody: ...,
  } satisfies CreateGtmTaskRequest;

  try {
    const data = await api.createGtmTask(body);
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
| **createTaskBody** | [CreateTaskBody](CreateTaskBody.md) |  | |

### Return type

**any**

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


## getGtmTask

> object getGtmTask(taskId)

Get Gtm Task

### Example

```ts
import {
  Configuration,
  PublicGTMTasksApi,
} from '@cleanlist-ai/sdk';
import type { GetGtmTaskRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMTasksApi(config);

  const body = {
    // string
    taskId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetGtmTaskRequest;

  try {
    const data = await api.getGtmTask(body);
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
| **taskId** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

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


## listGtmTasks

> { [key: string]: Array&lt;{ [key: string]: any; }&gt;; } listGtmTasks(status, taskType, limit)

List Gtm Tasks

The caller\&#39;s tasks, as the Tasks page lists them.

### Example

```ts
import {
  Configuration,
  PublicGTMTasksApi,
} from '@cleanlist-ai/sdk';
import type { ListGtmTasksRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMTasksApi(config);

  const body = {
    // 'open' | 'due' | 'overdue' | 'done' | 'all' (optional)
    status: status_example,
    // '' | 'Call' | 'Manual' | 'Reply' (optional)
    taskType: taskType_example,
    // number (optional)
    limit: 56,
  } satisfies ListGtmTasksRequest;

  try {
    const data = await api.listGtmTasks(body);
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
| **status** | `open`, `due`, `overdue`, `done`, `all` |  | [Optional] [Defaults to `&#39;open&#39;`] [Enum: open, due, overdue, done, all] |
| **taskType** | ``, `Call`, `Manual`, `Reply` |  | [Optional] [Defaults to `&#39;&#39;`] [Enum: , Call, Manual, Reply] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

**{ [key: string]: Array<{ [key: string]: any; }>; }**

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


## listUpdates

> object listUpdates(since, limit)

List Updates

Everything new since &#x60;&#x60;since&#x60;&#x60; (up to 30 days back).

### Example

```ts
import {
  Configuration,
  PublicGTMTasksApi,
} from '@cleanlist-ai/sdk';
import type { ListUpdatesRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMTasksApi(config);

  const body = {
    // string | An ISO time or a day; default 24 hours ago. (optional)
    since: since_example,
    // number (optional)
    limit: 56,
  } satisfies ListUpdatesRequest;

  try {
    const data = await api.listUpdates(body);
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
| **since** | `string` | An ISO time or a day; default 24 hours ago. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |

### Return type

**object**

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


## updateGtmTask

> any updateGtmTask(taskId, updateTaskBody)

Update Gtm Task

&#x60;&#x60;done&#x60;&#x60; completes the task as the Tasks page does (a call task needs &#x60;&#x60;outcome&#x60;&#x60;); &#x60;&#x60;skipped&#x60;&#x60; brings it back on its sequence\&#39;s next sending day.

### Example

```ts
import {
  Configuration,
  PublicGTMTasksApi,
} from '@cleanlist-ai/sdk';
import type { UpdateGtmTaskRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicGTMTasksApi(config);

  const body = {
    // string
    taskId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTaskBody
    updateTaskBody: ...,
  } satisfies UpdateGtmTaskRequest;

  try {
    const data = await api.updateGtmTask(body);
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
| **taskId** | `string` |  | [Defaults to `undefined`] |
| **updateTaskBody** | [UpdateTaskBody](UpdateTaskBody.md) |  | |

### Return type

**any**

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

