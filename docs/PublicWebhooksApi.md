# PublicWebhooksApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhook**](PublicWebhooksApi.md#createwebhookoperation) | **POST** /api/v2/webhooks | Subscribe a URL to events |
| [**deleteWebhook**](PublicWebhooksApi.md#deletewebhook) | **DELETE** /api/v2/webhooks/{webhook_id} | Remove a webhook |
| [**listWebhookDeliveries**](PublicWebhooksApi.md#listwebhookdeliveries) | **GET** /api/v2/webhooks/deliveries | List webhook deliveries |
| [**listWebhooks**](PublicWebhooksApi.md#listwebhooks) | **GET** /api/v2/webhooks | List webhooks |



## createWebhook

> CreatedWebhook createWebhook(createWebhookRequest)

Subscribe a URL to events

Subscribe a public HTTPS URL to event types. Returns the signing secret once: verify each delivery\&#39;s &#x60;Cleanlist-Signature&#x60; header (&#x60;t&#x3D;&lt;unix&gt;,v1&#x3D;&lt;hex HMAC-SHA256 of \&quot;&lt;t&gt;.&lt;raw body&gt;\&quot;&gt;&#x60;) with it.

### Example

```ts
import {
  Configuration,
  PublicWebhooksApi,
} from '@cleanlist-ai/sdk';
import type { CreateWebhookOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWebhooksApi(config);

  const body = {
    // CreateWebhookRequest
    createWebhookRequest: ...,
  } satisfies CreateWebhookOperationRequest;

  try {
    const data = await api.createWebhook(body);
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
| **createWebhookRequest** | [CreateWebhookRequest](CreateWebhookRequest.md) |  | |

### Return type

[**CreatedWebhook**](CreatedWebhook.md)

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


## deleteWebhook

> DeletedWebhook deleteWebhook(webhookId)

Remove a webhook

Stop sending events to a subscription. Its delivery log stays.

### Example

```ts
import {
  Configuration,
  PublicWebhooksApi,
} from '@cleanlist-ai/sdk';
import type { DeleteWebhookRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWebhooksApi(config);

  const body = {
    // string
    webhookId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWebhookRequest;

  try {
    const data = await api.deleteWebhook(body);
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
| **webhookId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeletedWebhook**](DeletedWebhook.md)

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


## listWebhookDeliveries

> any listWebhookDeliveries(workflowId, limit)

List webhook deliveries

Delivery attempts for a &#x60;workflow_id&#x60;, newest first: the v1 route. For a subscription\&#39;s event, pass the event id (&#x60;evt_...&#x60;); the log\&#39;s &#x60;webhook_id&#x60; is the subscription\&#39;s id.

### Example

```ts
import {
  Configuration,
  PublicWebhooksApi,
} from '@cleanlist-ai/sdk';
import type { ListWebhookDeliveriesRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWebhooksApi(config);

  const body = {
    // string
    workflowId: workflowId_example,
    // number (optional)
    limit: 56,
  } satisfies ListWebhookDeliveriesRequest;

  try {
    const data = await api.listWebhookDeliveries(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

**any**

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


## listWebhooks

> WebhooksResponse listWebhooks()

List webhooks

List this organization\&#39;s active webhook subscriptions. Secrets are never returned after creation.

### Example

```ts
import {
  Configuration,
  PublicWebhooksApi,
} from '@cleanlist-ai/sdk';
import type { ListWebhooksRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWebhooksApi(config);

  try {
    const data = await api.listWebhooks();
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

[**WebhooksResponse**](WebhooksResponse.md)

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

