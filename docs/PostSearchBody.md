
# PostSearchBody


## Properties

Name | Type
------------ | -------------
`account_id` | string
`keywords` | string
`days` | number
`limit` | number

## Example

```typescript
import type { PostSearchBody } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "account_id": null,
  "keywords": null,
  "days": null,
  "limit": null,
} satisfies PostSearchBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostSearchBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


