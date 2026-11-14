
# BatchLookupResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`status` | string
`total_rows` | number
`accepted_rows` | number
`workflow_id` | string
`list_id` | string
`credits_reserved` | number
`credits_charged` | number
`read_back_url` | string
`poll_url` | string
`rows` | [Array&lt;BatchRow&gt;](BatchRow.md)

## Example

```typescript
import type { BatchLookupResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "status": null,
  "total_rows": null,
  "accepted_rows": null,
  "workflow_id": null,
  "list_id": null,
  "credits_reserved": null,
  "credits_charged": null,
  "read_back_url": null,
  "poll_url": null,
  "rows": null,
} satisfies BatchLookupResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchLookupResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


