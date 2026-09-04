
# AddLeadsResponse


## Properties

Name | Type
------------ | -------------
`list_id` | string
`added` | number
`skipped_duplicates` | number
`created` | number
`credits_charged` | number

## Example

```typescript
import type { AddLeadsResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "list_id": null,
  "added": null,
  "skipped_duplicates": null,
  "created": null,
  "credits_charged": null,
} satisfies AddLeadsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddLeadsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


