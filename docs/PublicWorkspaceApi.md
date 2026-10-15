# PublicWorkspaceApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**creditsBalance**](PublicWorkspaceApi.md#creditsbalance) | **GET** /api/v2/credits/balance | Get credit balance |
| [**listApiKeys**](PublicWorkspaceApi.md#listapikeys) | **GET** /api/v2/api-keys | List API keys |
| [**usageReport**](PublicWorkspaceApi.md#usagereport) | **GET** /api/v2/usage | Get usage report |
| [**whoami**](PublicWorkspaceApi.md#whoami) | **GET** /api/v2/whoami | Get current identity &amp; entitlements |



## creditsBalance

> CreditsBalanceResponse creditsBalance()

Get credit balance

Return the current spendable credit balance for the caller\&#39;s organization. Reads the authoritative &#x60;organizations.credits_count&#x60; and returns it with a short &#x60;agent_instructions&#x60; nudge summarizing remaining credits. Requires the &#x60;credits:read&#x60; scope and deducts no credits itself. Use this before large operations, and pair it with &#x60;POST /credits/estimate&#x60; to confirm a specific action is affordable before spending.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/credits

### Example

```ts
import {
  Configuration,
  PublicWorkspaceApi,
} from '@cleanlist-ai/sdk';
import type { CreditsBalanceRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWorkspaceApi(config);

  try {
    const data = await api.creditsBalance();
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

[**CreditsBalanceResponse**](CreditsBalanceResponse.md)

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


## listApiKeys

> ApiKeysResponse listApiKeys()

List API keys

List the caller\&#39;s API keys, showing only the prefix and last 4 characters — full secret values are never returned. Results are user-scoped and further filtered to the calling token\&#39;s organization (defense in depth), so a Clerk user in multiple orgs only sees keys belonging to the active org. Requires the &#x60;admin:api_keys&#x60; scope and deducts no credits. Scopes are granted per-user today, so each key reports the caller\&#39;s own scopes.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/authentication

### Example

```ts
import {
  Configuration,
  PublicWorkspaceApi,
} from '@cleanlist-ai/sdk';
import type { ListApiKeysRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWorkspaceApi(config);

  try {
    const data = await api.listApiKeys();
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

[**ApiKeysResponse**](ApiKeysResponse.md)

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


## usageReport

> UsageReportResponse usageReport(days, groupBy)

Get usage report

Aggregate this organization\&#39;s public-API request log over the last &#x60;days&#x60; (1-365, default 7), grouped by &#x60;tool&#x60;, &#x60;key&#x60;, &#x60;day&#x60;, or &#x60;error&#x60;. Returns per-bucket call counts and error counts plus window totals, so admins can audit traffic and spot failing integrations. Requires the &#x60;admin:api_keys&#x60; scope and deducts no credits. Note: until the request log gains cost/ tool-name columns, &#x60;group_by&#x3D;\&quot;tool\&quot;&#x60; buckets by request path and &#x60;credits_spent&#x60; is always 0.0.  **📖 Docs:** https://docs.cleanlist.ai/api-reference/credits

### Example

```ts
import {
  Configuration,
  PublicWorkspaceApi,
} from '@cleanlist-ai/sdk';
import type { UsageReportRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWorkspaceApi(config);

  const body = {
    // number (optional)
    days: 56,
    // 'tool' | 'key' | 'day' | 'error' (optional)
    groupBy: groupBy_example,
  } satisfies UsageReportRequest;

  try {
    const data = await api.usageReport(body);
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
| **days** | `number` |  | [Optional] [Defaults to `7`] |
| **groupBy** | `tool`, `key`, `day`, `error` |  | [Optional] [Defaults to `&#39;tool&#39;`] [Enum: tool, key, day, error] |

### Return type

[**UsageReportResponse**](UsageReportResponse.md)

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


## whoami

> WhoamiResponse whoami()

Get current identity &amp; entitlements

Introspect the authenticated principal and its effective entitlements. Returns the caller\&#39;s identity (user, org, auth type, scopes) plus the resolved plan &#x60;tier&#x60;, any &#x60;appsumo_tier&#x60;, and the merged &#x60;features&#x60; list the server-side gates actually enforce — letting clients (and the MCP) tier-filter their advertised tools before hitting a gated route. This endpoint is free and deducts no credits; for API-key auth the returned &#x60;user_email&#x60; is masked so a leaked key can\&#39;t reveal the creator\&#39;s address, and display-name lookups are best-effort (null on a transient miss).  **📖 Docs:** https://docs.cleanlist.ai/api-reference/authentication

### Example

```ts
import {
  Configuration,
  PublicWorkspaceApi,
} from '@cleanlist-ai/sdk';
import type { WhoamiRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWorkspaceApi(config);

  try {
    const data = await api.whoami();
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

[**WhoamiResponse**](WhoamiResponse.md)

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

