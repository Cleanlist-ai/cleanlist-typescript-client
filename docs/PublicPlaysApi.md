# PublicPlaysApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPlayEvent**](PublicPlaysApi.md#getplayevent) | **GET** /api/v2/plays/{playbook_id}/events/{event_id} | Get Play Event |
| [**listPlays**](PublicPlaysApi.md#listplays) | **GET** /api/v2/plays | List Plays |
| [**runPlay**](PublicPlaysApi.md#runplay) | **POST** /api/v2/plays/{playbook_id}/runs | Run Play |



## getPlayEvent

> PlayEventDto getPlayEvent(playbookId, eventId)

Get Play Event

A record a play run admitted: whether a run took it yet, and which.

### Example

```ts
import {
  Configuration,
  PublicPlaysApi,
} from '@cleanlist-ai/sdk';
import type { GetPlayEventRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPlaysApi(config);

  const body = {
    // string
    playbookId: playbookId_example,
    // string
    eventId: eventId_example,
  } satisfies GetPlayEventRequest;

  try {
    const data = await api.getPlayEvent(body);
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
| **playbookId** | `string` |  | [Defaults to `undefined`] |
| **eventId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**PlayEventDto**](PlayEventDto.md)

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


## listPlays

> Array&lt;PlayDto&gt; listPlays()

List Plays

This organization\&#39;s agent plays, each with the inputs its webhook trigger reads. A play without one has no inputs.

### Example

```ts
import {
  Configuration,
  PublicPlaysApi,
} from '@cleanlist-ai/sdk';
import type { ListPlaysRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPlaysApi(config);

  try {
    const data = await api.listPlays();
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

[**Array&lt;PlayDto&gt;**](PlayDto.md)

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


## runPlay

> ResponseRunPlayApiV2PlaysPlaybookIdRunsPost runPlay(playbookId, runPlayBody, xConfirmChannel)

Run Play

Run the play on one record made of &#x60;&#x60;inputs&#x60;&#x60;, as its webhook would: a preview without &#x60;&#x60;commit&#x60;&#x60;, and with it a quote and the approval the play needs.

### Example

```ts
import {
  Configuration,
  PublicPlaysApi,
} from '@cleanlist-ai/sdk';
import type { RunPlayRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPlaysApi(config);

  const body = {
    // string
    playbookId: playbookId_example,
    // RunPlayBody
    runPlayBody: ...,
    // string (optional)
    xConfirmChannel: xConfirmChannel_example,
  } satisfies RunPlayRequest;

  try {
    const data = await api.runPlay(body);
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
| **playbookId** | `string` |  | [Defaults to `undefined`] |
| **runPlayBody** | [RunPlayBody](RunPlayBody.md) |  | |
| **xConfirmChannel** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ResponseRunPlayApiV2PlaysPlaybookIdRunsPost**](ResponseRunPlayApiV2PlaysPlaybookIdRunsPost.md)

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

