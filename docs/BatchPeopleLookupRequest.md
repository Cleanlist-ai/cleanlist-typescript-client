
# BatchPeopleLookupRequest


## Properties

Name | Type
------------ | -------------
`items` | Array&lt;any&gt;
`fields` | Array&lt;string&gt;
`quote_id` | string
`lead_list_id` | string

## Example

```typescript
import type { BatchPeopleLookupRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "fields": null,
  "quote_id": null,
  "lead_list_id": null,
} satisfies BatchPeopleLookupRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchPeopleLookupRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


