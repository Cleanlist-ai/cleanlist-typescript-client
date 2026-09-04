
# CsvImportRequest


## Properties

Name | Type
------------ | -------------
`csv_content_base64` | string
`column_mapping` | { [key: string]: string | null; }
`dispatch_enrichment` | boolean
`enrichment_type` | string
`quote_id` | string
`idempotency_key` | string

## Example

```typescript
import type { CsvImportRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "csv_content_base64": null,
  "column_mapping": null,
  "dispatch_enrichment": null,
  "enrichment_type": null,
  "quote_id": null,
  "idempotency_key": null,
} satisfies CsvImportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CsvImportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


