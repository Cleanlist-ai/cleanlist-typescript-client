# PublicExportApi

All URIs are relative to *https://api.cleanlist.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportCsv**](PublicExportApi.md#exportcsvoperation) | **POST** /api/v2/export/csv/signed-url | Export a list to CSV (signed URL) |
| [**exportJson**](PublicExportApi.md#exportjson) | **GET** /api/v2/export/json | Export a list as JSON |



## exportCsv

> ExportCsvResponse exportCsv(exportCsvRequest)

Export a list to CSV (signed URL)

Export a Lead List to CSV and return a time-limited signed download URL.  Streams the list\&#39;s leads through a temporary spooled file, uploads the result to blob storage, and responds with a SAS-signed &#x60;download_url&#x60; that expires 24 hours after generation (see &#x60;expires_at&#x60;). Pass &#x60;columns&#x60; to control which fields — and their order — are written, or omit it to use the default column set; set &#x60;include_smart_agents&#x3D;false&#x60; to skip any configured smart-agent result columns. This export is free and does not consume credits.  **📖 Docs:** https://docs.cleanlist.ai/guides/exporting-data

### Example

```ts
import {
  Configuration,
  PublicExportApi,
} from '@cleanlist-ai/sdk';
import type { ExportCsvOperationRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicExportApi(config);

  const body = {
    // ExportCsvRequest
    exportCsvRequest: ...,
  } satisfies ExportCsvOperationRequest;

  try {
    const data = await api.exportCsv(body);
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
| **exportCsvRequest** | [ExportCsvRequest](ExportCsvRequest.md) |  | |

### Return type

[**ExportCsvResponse**](ExportCsvResponse.md)

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


## exportJson

> ExportJsonResponse exportJson(listId, limit, cursor, columns)

Export a list as JSON

Export a Lead List as JSON rows returned inline in the response.  Returns a page of leads (default 100, max 500 per call) projected to the same columns as the CSV export and wrapped in the standard response envelope. Use the opaque &#x60;cursor&#x60; from each response to fetch the next page; a malformed cursor returns 400 rather than silently rewinding to page 0. This export is free and does not consume credits.  **📖 Docs:** https://docs.cleanlist.ai/guides/exporting-data

### Example

```ts
import {
  Configuration,
  PublicExportApi,
} from '@cleanlist-ai/sdk';
import type { ExportJsonRequest } from '@cleanlist-ai/sdk';

async function example() {
  console.log("🚀 Testing @cleanlist-ai/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicExportApi(config);

  const body = {
    // string
    listId: listId_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
    // Array<string> (optional)
    columns: ...,
  } satisfies ExportJsonRequest;

  try {
    const data = await api.exportJson(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **columns** | `Array<string>` |  | [Optional] |

### Return type

[**ExportJsonResponse**](ExportJsonResponse.md)

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

