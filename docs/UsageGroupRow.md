
# UsageGroupRow


## Properties

Name | Type
------------ | -------------
`group` | string
`calls` | number
`credits_spent` | number
`errors` | number

## Example

```typescript
import type { UsageGroupRow } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "group": null,
  "calls": null,
  "credits_spent": null,
  "errors": null,
} satisfies UsageGroupRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageGroupRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


