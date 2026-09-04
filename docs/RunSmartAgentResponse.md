
# RunSmartAgentResponse

Three identifiers can live on this response (T1-6 ID-space rename):  - `smart_agent_task_id` — canonical id for polling   `get_smart_agent_results`. - `smart_agent_task_ids` — dict keyed by column type when   `process_smart_columns` returns multiple underlying task ids. - `task_id` (from EnvelopeFields) — kept populated for back-compat   with v1.0 callers that read it from the envelope.  The three are distinct identifiers. A smart-column run\'s id is NOT an MCP cohort handle, but the envelope still carries `task_id` for transitional compat. New callers should read `smart_agent_task_id`.

## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`smart_agent_task_id` | string
`smart_agent_task_ids` | { [key: string]: string; }
`status` | string
`list_id` | string
`column_name` | string
`estimated_cost` | number

## Example

```typescript
import type { RunSmartAgentResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "smart_agent_task_id": null,
  "smart_agent_task_ids": null,
  "status": null,
  "list_id": null,
  "column_name": null,
  "estimated_cost": null,
} satisfies RunSmartAgentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunSmartAgentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


