
# SmartAgentResultsResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`smart_agent_task_id` | string
`status` | string
`progress` | number
`total` | number
`succeeded` | number
`failed` | number
`results` | [Array&lt;SmartAgentResultRow&gt;](SmartAgentResultRow.md)

## Example

```typescript
import type { SmartAgentResultsResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "smart_agent_task_id": null,
  "status": null,
  "progress": null,
  "total": null,
  "succeeded": null,
  "failed": null,
  "results": null,
} satisfies SmartAgentResultsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SmartAgentResultsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


