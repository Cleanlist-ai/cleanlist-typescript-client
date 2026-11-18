
# Persona


## Properties

Name | Type
------------ | -------------
`label` | string
`titles` | Array&lt;string&gt;
`exclude_titles` | Array&lt;string&gt;
`count` | number

## Example

```typescript
import type { Persona } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "titles": null,
  "exclude_titles": null,
  "count": null,
} satisfies Persona

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Persona
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


