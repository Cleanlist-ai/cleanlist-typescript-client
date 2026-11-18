
# Group


## Properties

Name | Type
------------ | -------------
`name` | string
`title` | string
`summary` | string
`action_count` | number
`missing_scopes` | Array&lt;string&gt;

## Example

```typescript
import type { Group } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "title": null,
  "summary": null,
  "action_count": null,
  "missing_scopes": null,
} satisfies Group

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Group
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


