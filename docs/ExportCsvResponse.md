
# ExportCsvResponse


## Properties

Name | Type
------------ | -------------
`list_id` | string
`download_url` | string
`expires_at` | string
`row_count` | number
`file_size_bytes` | number

## Example

```typescript
import type { ExportCsvResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "list_id": null,
  "download_url": null,
  "expires_at": null,
  "row_count": null,
  "file_size_bytes": null,
} satisfies ExportCsvResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportCsvResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


