
# Manifest


## Properties

Name | Type
------------ | -------------
`version` | string
`groups` | [Array&lt;Group&gt;](Group.md)
`actions` | [Array&lt;Action&gt;](Action.md)

## Example

```typescript
import type { Manifest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "groups": null,
  "actions": null,
} satisfies Manifest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Manifest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


