# PublicPeopleFinderApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**companiesFindStart**](PublicPeopleFinderApi.md#companiesfindstart) | **POST** /api/v2/people/find-at-companies | Find people at companies by filter (async discovery) |
| [**companiesFindStatus**](PublicPeopleFinderApi.md#companiesfindstatus) | **GET** /api/v2/people/find-at-companies/status/{task_id} | Poll a find-people-at-companies search |
| [**compileSearch**](PublicPeopleFinderApi.md#compilesearch) | **POST** /api/v2/people/find/compile | Compile criteria without running the search |
| [**searchFiltersPeople**](PublicPeopleFinderApi.md#searchfilterspeople) | **GET** /api/v2/people/find/filters | Search Filters People |
| [**searchPeople**](PublicPeopleFinderApi.md#searchpeople) | **POST** /api/v2/people/find | Search People |



## companiesFindStart

> CompaniesFindStartResponse companiesFindStart(peopleByCompaniesRequest)

Find people at companies by filter (async discovery)

Start an async \&quot;find people at these companies\&quot; search. FREE — credits are spent at enrichment / save time.  Returns a &#x60;&#x60;task_id&#x60;&#x60; immediately; poll &#x60;&#x60;poll_url&#x60;&#x60; (GET /people/find-at-companies/status/{task_id}) until &#x60;&#x60;status&#x60;&#x60; is terminal. One job returns one result block; page by re-calling with the returned &#x60;&#x60;cursor&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  PublicPeopleFinderApi,
} from '@cleanlist-ai/sdk';
import type { CompaniesFindStartRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPeopleFinderApi(config);

  const body = {
    // PeopleByCompaniesRequest
    peopleByCompaniesRequest: ...,
  } satisfies CompaniesFindStartRequest;

  try {
    const data = await api.companiesFindStart(body);
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
| **peopleByCompaniesRequest** | [PeopleByCompaniesRequest](PeopleByCompaniesRequest.md) |  | |

### Return type

[**CompaniesFindStartResponse**](CompaniesFindStartResponse.md)

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


## companiesFindStatus

> CompaniesFindStatusResponse companiesFindStatus(taskId)

Poll a find-people-at-companies search

Poll a search started by &#x60;&#x60;POST /people/find-at-companies&#x60;&#x60;. Free and idempotent — call until &#x60;&#x60;status&#x60;&#x60; is terminal (&#x60;&#x60;completed&#x60;&#x60; / &#x60;&#x60;failed&#x60;&#x60;). Cross-tenant task ids fail closed as 404.

### Example

```ts
import {
  Configuration,
  PublicPeopleFinderApi,
} from '@cleanlist-ai/sdk';
import type { CompaniesFindStatusRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPeopleFinderApi(config);

  const body = {
    // string
    taskId: taskId_example,
  } satisfies CompaniesFindStatusRequest;

  try {
    const data = await api.companiesFindStatus(body);
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

[**CompaniesFindStatusResponse**](CompaniesFindStatusResponse.md)

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


## compileSearch

> CompileResponse compileSearch(compileRequest)

Compile criteria without running the search

Show what a search would do, without doing it. FREE.  Returns the compiled query, the route the search would take, and the exclusions that would apply. Use it to check an unfamiliar combination of criteria before spending a search, and to explain to a user why a result is bounded: a by-companies route resolves a limited company set first, and incomplete CRM exclusions block compilation with an actionable error.

### Example

```ts
import {
  Configuration,
  PublicPeopleFinderApi,
} from '@cleanlist-ai/sdk';
import type { CompileSearchRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPeopleFinderApi(config);

  const body = {
    // CompileRequest
    compileRequest: ...,
  } satisfies CompileSearchRequest;

  try {
    const data = await api.compileSearch(body);
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
| **compileRequest** | [CompileRequest](CompileRequest.md) |  | |

### Return type

[**CompileResponse**](CompileResponse.md)

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


## searchFiltersPeople

> PeopleFiltersResponse searchFiltersPeople(field, query)

Search Filters People

Valid filter values for people search. ZERO CREDITS.  Fixed-enum fields (seniority, management_levels, departments, job_functions, company_headcount) return a canned list — Crustdata accepts these values verbatim, no autocomplete needed.  Autocompletable fields (titles, locations, company_industries) delegate to Crustdata\&#39;s autocomplete with the friendly field name translated via &#x60;_PEOPLE_AUTOCOMPLETE_FIELD_MAP&#x60;.

### Example

```ts
import {
  Configuration,
  PublicPeopleFinderApi,
} from '@cleanlist-ai/sdk';
import type { SearchFiltersPeopleRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPeopleFinderApi(config);

  const body = {
    // 'titles' | 'seniority' | 'departments' | 'job_functions' | 'management_levels' | 'locations' | 'company_headcount' | 'company_industries'
    field: field_example,
    // string (optional)
    query: query_example,
  } satisfies SearchFiltersPeopleRequest;

  try {
    const data = await api.searchFiltersPeople(body);
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
| **field** | `titles`, `seniority`, `departments`, `job_functions`, `management_levels`, `locations`, `company_headcount`, `company_industries` |  | [Defaults to `undefined`] [Enum: titles, seniority, departments, job_functions, management_levels, locations, company_headcount, company_industries] |
| **query** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PeopleFiltersResponse**](PeopleFiltersResponse.md)

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


## searchPeople

> PeopleSearchResponse searchPeople(peopleSearchRequest)

Search People

Search people. FREE — credits are spent at enrichment / save time.  Delegates to the internal staging handler so the 5-step filter pipeline (location component expansion → region contains expansion → column mapping → enum alias expansion → Crustdata format transform) runs unchanged. We pass the caller\&#39;s actual tier so FREE-tier callers get the 25-row preview cap.

### Example

```ts
import {
  Configuration,
  PublicPeopleFinderApi,
} from '@cleanlist-ai/sdk';
import type { SearchPeopleRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicPeopleFinderApi(config);

  const body = {
    // PeopleSearchRequest
    peopleSearchRequest: ...,
  } satisfies SearchPeopleRequest;

  try {
    const data = await api.searchPeople(body);
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
| **peopleSearchRequest** | [PeopleSearchRequest](PeopleSearchRequest.md) |  | |

### Return type

[**PeopleSearchResponse**](PeopleSearchResponse.md)

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

