
# UpdateTaskBody


## Properties

Name | Type
------------ | -------------
`status` | string
`outcome` | string
`note` | string
`commit` | boolean

## Example

```typescript
import type { UpdateTaskBody } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "outcome": null,
  "note": null,
  "commit": null,
} satisfies UpdateTaskBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateTaskBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


