
# PublicApiErrorPayload

The `error` field of every public-API error response.

## Properties

Name | Type
------------ | -------------
`code` | string
`problem` | string
`cause` | string
`fix` | string
`retryable` | boolean
`retry_after_ms` | number
`docs_url` | string
`request_id` | string
`estimated_cost_credits` | number
`available_credits` | number
`shortfall_credits` | number
`suggested_actions` | [Array&lt;SuggestedAction&gt;](SuggestedAction.md)
`details` | object

## Example

```typescript
import type { PublicApiErrorPayload } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "problem": null,
  "cause": null,
  "fix": null,
  "retryable": null,
  "retry_after_ms": null,
  "docs_url": null,
  "request_id": null,
  "estimated_cost_credits": null,
  "available_credits": null,
  "shortfall_credits": null,
  "suggested_actions": null,
  "details": null,
} satisfies PublicApiErrorPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicApiErrorPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


