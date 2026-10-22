
# EnrichListResponse


## Properties

Name | Type
------------ | -------------
`crm_note` | string
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`workflow_id` | string
`status` | string
`total_leads` | number
`estimated_cost` | number
`credits_reserved` | number
`poll_url` | string

## Example

```typescript
import type { EnrichListResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "crm_note": null,
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "workflow_id": null,
  "status": null,
  "total_leads": null,
  "estimated_cost": null,
  "credits_reserved": null,
  "poll_url": null,
} satisfies EnrichListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


