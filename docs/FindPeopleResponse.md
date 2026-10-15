
# FindPeopleResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`workflow_id` | string
`status` | string
`total_companies` | number
`estimated_credits` | number
`lead_list_id` | string
`poll_url` | string

## Example

```typescript
import type { FindPeopleResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "workflow_id": null,
  "status": null,
  "total_companies": null,
  "estimated_credits": null,
  "lead_list_id": null,
  "poll_url": null,
} satisfies FindPeopleResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FindPeopleResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


