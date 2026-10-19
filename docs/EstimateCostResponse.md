
# EstimateCostResponse


## Properties

Name | Type
------------ | -------------
`crm_note` | string
`quote_id` | string
`expires_at` | number
`estimated_cost` | number
`tool` | string
`row_count` | number
`filter_hash` | string
`available_credits` | number
`sufficient` | boolean

## Example

```typescript
import type { EstimateCostResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "crm_note": null,
  "quote_id": null,
  "expires_at": null,
  "estimated_cost": null,
  "tool": null,
  "row_count": null,
  "filter_hash": null,
  "available_credits": null,
  "sufficient": null,
} satisfies EstimateCostResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EstimateCostResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


