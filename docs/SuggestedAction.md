
# SuggestedAction

A follow-up suggestion the agent can present or call directly.

## Properties

Name | Type
------------ | -------------
`label` | string
`tool` | string
`arguments` | object
`url` | string

## Example

```typescript
import type { SuggestedAction } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "tool": null,
  "arguments": null,
  "url": null,
} satisfies SuggestedAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuggestedAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


