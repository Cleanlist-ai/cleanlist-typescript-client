
# WorkflowStatusResponse


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
`progress` | number
`total` | number
`processed` | number
`completed` | number
`failed` | number
`enrichment_type` | string
`lead_list_id` | string
`summary` | object
`refund_status` | string
`refund_message` | string
`result` | [SingleEnrichmentResultRead](SingleEnrichmentResultRead.md)
`credits_charged` | number
`credits_refunded` | number

## Example

```typescript
import type { WorkflowStatusResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "workflow_id": null,
  "status": null,
  "progress": null,
  "total": null,
  "processed": null,
  "completed": null,
  "failed": null,
  "enrichment_type": null,
  "lead_list_id": null,
  "summary": null,
  "refund_status": null,
  "refund_message": null,
  "result": null,
  "credits_charged": null,
  "credits_refunded": null,
} satisfies WorkflowStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


