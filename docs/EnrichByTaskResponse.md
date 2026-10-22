
# EnrichByTaskResponse


## Properties

Name | Type
------------ | -------------
`crm_note` | string
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`entity_kind` | string
`list_id` | string
`workflow_id` | string
`status` | string
`total_entities` | number
`credits_reserved` | number
`results` | [Array&lt;EnrichByTaskEntityResult&gt;](EnrichByTaskEntityResult.md)

## Example

```typescript
import type { EnrichByTaskResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "crm_note": null,
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "entity_kind": null,
  "list_id": null,
  "workflow_id": null,
  "status": null,
  "total_entities": null,
  "credits_reserved": null,
  "results": null,
} satisfies EnrichByTaskResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichByTaskResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


