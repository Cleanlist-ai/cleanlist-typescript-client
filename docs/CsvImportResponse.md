
# CsvImportResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`list_id` | string
`rows_parsed` | number
`rows_imported` | number
`rows_skipped` | number
`skip_reasons` | { [key: string]: number | null; }
`sample_skip_rows` | Array&lt;number | null&gt;
`workflow_id` | string
`enrichment_status_url` | string
`idempotency_replayed` | boolean

## Example

```typescript
import type { CsvImportResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "list_id": null,
  "rows_parsed": null,
  "rows_imported": null,
  "rows_skipped": null,
  "skip_reasons": null,
  "sample_skip_rows": null,
  "workflow_id": null,
  "enrichment_status_url": null,
  "idempotency_replayed": null,
} satisfies CsvImportResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CsvImportResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


