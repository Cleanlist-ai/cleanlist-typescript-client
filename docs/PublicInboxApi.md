# PublicInboxApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listInboxThreads**](PublicInboxApi.md#listinboxthreads) | **GET** /api/v2/inbox/threads | List Inbox Threads |
| [**readInboxThread**](PublicInboxApi.md#readinboxthread) | **GET** /api/v2/inbox/threads/{thread_id} | Read Inbox Thread |
| [**replyInInboxThread**](PublicInboxApi.md#replyininboxthread) | **POST** /api/v2/inbox/threads/{thread_id}/reply | Reply In Inbox Thread |
| [**updateInboxThread**](PublicInboxApi.md#updateinboxthread) | **PATCH** /api/v2/inbox/threads/{thread_id} | Update Inbox Thread |



## listInboxThreads

> { [key: string]: Array&lt;{ [key: string]: any; }&gt;; } listInboxThreads(status, since, q, limit, offset)

List Inbox Threads

Inbox conversations newest first, as the Inbox lists them. &#x60;&#x60;done&#x60;&#x60; is the archived ones; &#x60;&#x60;since&#x60;&#x60; keeps those with a message on or after that day (UTC).

### Example

```ts
import {
  Configuration,
  PublicInboxApi,
} from '@cleanlist-ai/sdk';
import type { ListInboxThreadsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInboxApi(config);

  const body = {
    // 'open' | 'needs_reply' | 'snoozed' | 'done' (optional)
    status: status_example,
    // string | YYYY-MM-DD (optional)
    since: since_example,
    // string (optional)
    q: q_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListInboxThreadsRequest;

  try {
    const data = await api.listInboxThreads(body);
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
| **status** | `open`, `needs_reply`, `snoozed`, `done` |  | [Optional] [Defaults to `&#39;open&#39;`] [Enum: open, needs_reply, snoozed, done] |
| **since** | `string` | YYYY-MM-DD | [Optional] [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

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


## readInboxThread

> object readInboxThread(threadId)

Read Inbox Thread

### Example

```ts
import {
  Configuration,
  PublicInboxApi,
} from '@cleanlist-ai/sdk';
import type { ReadInboxThreadRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInboxApi(config);

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ReadInboxThreadRequest;

  try {
    const data = await api.readInboxThread(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |

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


## replyInInboxThread

> any replyInInboxThread(threadId, replyBody)

Reply In Inbox Thread

Reply to the lead from the address the Inbox replies from. Needs &#x60;&#x60;commit: true&#x60;&#x60;; without it the answer names who would get it.

### Example

```ts
import {
  Configuration,
  PublicInboxApi,
} from '@cleanlist-ai/sdk';
import type { ReplyInInboxThreadRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInboxApi(config);

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ReplyBody
    replyBody: ...,
  } satisfies ReplyInInboxThreadRequest;

  try {
    const data = await api.replyInInboxThread(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |
| **replyBody** | [ReplyBody](ReplyBody.md) |  | |

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


## updateInboxThread

> any updateInboxThread(threadId, updateThreadBody)

Update Inbox Thread

&#x60;&#x60;done&#x60;&#x60; archives the conversation and closes its Reply task; &#x60;&#x60;open&#x60;&#x60; brings it back.

### Example

```ts
import {
  Configuration,
  PublicInboxApi,
} from '@cleanlist-ai/sdk';
import type { UpdateInboxThreadRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicInboxApi(config);

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateThreadBody
    updateThreadBody: ...,
  } satisfies UpdateInboxThreadRequest;

  try {
    const data = await api.updateInboxThread(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |
| **updateThreadBody** | [UpdateThreadBody](UpdateThreadBody.md) |  | |

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

