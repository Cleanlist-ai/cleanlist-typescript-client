
# JobChangeCheckRequest


## Properties

Name | Type
------------ | -------------
`lead_ids` | Array&lt;string&gt;
`linkedin_urls` | Array&lt;string&gt;
`quote_id` | string

## Example

```typescript
import type { JobChangeCheckRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_ids": null,
  "linkedin_urls": null,
  "quote_id": null,
} satisfies JobChangeCheckRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobChangeCheckRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


