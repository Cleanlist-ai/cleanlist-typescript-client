
# RunPlayResponse


## Properties

Name | Type
------------ | -------------
`run_id` | string
`queued` | boolean
`reason` | string
`event_id` | string

## Example

```typescript
import type { RunPlayResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "run_id": null,
  "queued": null,
  "reason": null,
  "event_id": null,
} satisfies RunPlayResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunPlayResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


