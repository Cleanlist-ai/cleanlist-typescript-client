# PublicAccountsDataApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**buyingCommittee**](PublicAccountsDataApi.md#buyingcommittee) | **POST** /api/v2/companies/buying-committee | Buying Committee |
| [**listMeetings**](PublicAccountsDataApi.md#listmeetings) | **GET** /api/v2/meetings | List Meetings |
| [**orgStructure**](PublicAccountsDataApi.md#orgstructure) | **GET** /api/v2/companies/org-structure | Org Structure |
| [**readMeeting**](PublicAccountsDataApi.md#readmeeting) | **GET** /api/v2/meetings/{meeting_id} | Read Meeting |



## buyingCommittee

> object buyingCommittee(buyingCommitteeBody)

Buying Committee

The people in each role group at one company, marked when the connected CRM has them. Not saved; one search on metered plans.

### Example

```ts
import {
  Configuration,
  PublicAccountsDataApi,
} from '@cleanlist-ai/sdk';
import type { BuyingCommitteeRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicAccountsDataApi(config);

  const body = {
    // BuyingCommitteeBody
    buyingCommitteeBody: ...,
  } satisfies BuyingCommitteeRequest;

  try {
    const data = await api.buyingCommittee(body);
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
| **buyingCommitteeBody** | [BuyingCommitteeBody](BuyingCommitteeBody.md) |  | |

### Return type

**object**

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


## listMeetings

> object listMeetings(since, accountDomain, personEmail, limit)

List Meetings

Synced calls newest first (default: the last 30 days).

### Example

```ts
import {
  Configuration,
  PublicAccountsDataApi,
} from '@cleanlist-ai/sdk';
import type { ListMeetingsRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicAccountsDataApi(config);

  const body = {
    // string (optional)
    since: since_example,
    // string (optional)
    accountDomain: accountDomain_example,
    // string (optional)
    personEmail: personEmail_example,
    // number (optional)
    limit: 56,
  } satisfies ListMeetingsRequest;

  try {
    const data = await api.listMeetings(body);
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
| **since** | `string` |  | [Optional] [Defaults to `undefined`] |
| **accountDomain** | `string` |  | [Optional] [Defaults to `undefined`] |
| **personEmail** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |

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


## orgStructure

> object orgStructure(company)

Org Structure

A company\&#39;s leaders, Owner / Partner down to Manager, by tier and department (up to 25 people). One search on metered plans.

### Example

```ts
import {
  Configuration,
  PublicAccountsDataApi,
} from '@cleanlist-ai/sdk';
import type { OrgStructureRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicAccountsDataApi(config);

  const body = {
    // string
    company: company_example,
  } satisfies OrgStructureRequest;

  try {
    const data = await api.orgStructure(body);
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
| **company** | `string` |  | [Defaults to `undefined`] |

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


## readMeeting

> object readMeeting(meetingId, transcript)

Read Meeting

One call\&#39;s summary, action items and attendees; the transcript too with &#x60;&#x60;transcript&#x3D;true&#x60;&#x60; (Fireflies and Fathom).

### Example

```ts
import {
  Configuration,
  PublicAccountsDataApi,
} from '@cleanlist-ai/sdk';
import type { ReadMeetingRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicAccountsDataApi(config);

  const body = {
    // string
    meetingId: meetingId_example,
    // boolean (optional)
    transcript: true,
  } satisfies ReadMeetingRequest;

  try {
    const data = await api.readMeeting(body);
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
| **meetingId** | `string` |  | [Defaults to `undefined`] |
| **transcript** | `boolean` |  | [Optional] [Defaults to `false`] |

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

