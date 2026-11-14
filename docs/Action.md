
# Action


## Properties

Name | Type
------------ | -------------
`name` | string
`title` | string
`description` | string
`group` | string
`effect` | string
`card` | boolean
`scope` | string
`input_schema` | object

## Example

```typescript
import type { Action } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "title": null,
  "description": null,
  "group": null,
  "effect": null,
  "card": null,
  "scope": null,
  "input_schema": null,
} satisfies Action

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Action
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


