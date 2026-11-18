
# PlayEventDto


## Properties

Name | Type
------------ | -------------
`event_id` | string
`status` | string
`run_id` | string
`error_code` | string

## Example

```typescript
import type { PlayEventDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "event_id": null,
  "status": null,
  "run_id": null,
  "error_code": null,
} satisfies PlayEventDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlayEventDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


