
# BuiltFromDto

What the build kit built the agent\'s play from: a recipe (its title and slug), the org\'s saved skill (its name) or none.

## Properties

Name | Type
------------ | -------------
`kind` | string
`name` | string
`slug` | string

## Example

```typescript
import type { BuiltFromDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "name": null,
  "slug": null,
} satisfies BuiltFromDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BuiltFromDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


