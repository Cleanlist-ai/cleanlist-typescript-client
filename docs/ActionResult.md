
# ActionResult


## Properties

Name | Type
------------ | -------------
`action` | string
`session_id` | string
`kind` | string
`result` | any
`card` | [Card](Card.md)
`confirmed` | [ConfirmResult](ConfirmResult.md)

## Example

```typescript
import type { ActionResult } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "action": null,
  "session_id": null,
  "kind": null,
  "result": null,
  "card": null,
  "confirmed": null,
} satisfies ActionResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActionResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


