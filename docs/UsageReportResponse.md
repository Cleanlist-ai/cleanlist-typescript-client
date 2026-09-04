
# UsageReportResponse


## Properties

Name | Type
------------ | -------------
`days` | number
`group_by` | string
`total_calls` | number
`total_credits_spent` | number
`total_errors` | number
`rows` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)

## Example

```typescript
import type { UsageReportResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "days": null,
  "group_by": null,
  "total_calls": null,
  "total_credits_spent": null,
  "total_errors": null,
  "rows": null,
} satisfies UsageReportResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageReportResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


