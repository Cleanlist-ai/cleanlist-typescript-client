
# EnrichListRequest


## Properties

Name | Type
------------ | -------------
`list_id` | string
`scope` | string
`quote_id` | string
`lead_ids` | Array&lt;string&gt;

## Example

```typescript
import type { EnrichListRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "list_id": null,
  "scope": null,
  "quote_id": null,
  "lead_ids": null,
} satisfies EnrichListRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichListRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


