
# BulkContactResult

One contact of a bulk run, returned when polling with `include_results=true`. `lead` is the same row `GET /lead-lists/{id}/leads` returns, so contact fields follow the same reveal rules.

## Properties

Name | Type
------------ | -------------
`index` | number
`status` | string
`failure_class` | string
`lead` | [LeadRow](LeadRow.md)

## Example

```typescript
import type { BulkContactResult } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "status": null,
  "failure_class": null,
  "lead": null,
} satisfies BulkContactResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkContactResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


