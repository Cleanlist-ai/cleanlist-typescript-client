
# PersonRefDto

A member a connection names: first name (else email), and whether they have left the organization.

## Properties

Name | Type
------------ | -------------
`userId` | string
`name` | string
`left` | boolean

## Example

```typescript
import type { PersonRefDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "name": null,
  "left": null,
} satisfies PersonRefDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonRefDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


