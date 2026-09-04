
# SmartAgentRun


## Properties

Name | Type
------------ | -------------
`task_id` | string
`list_id` | string
`column_name` | string
`agent_type` | string
`status` | string
`total` | number
`processed` | number
`failed` | number
`created_at` | string

## Example

```typescript
import type { SmartAgentRun } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "list_id": null,
  "column_name": null,
  "agent_type": null,
  "status": null,
  "total": null,
  "processed": null,
  "failed": null,
  "created_at": null,
} satisfies SmartAgentRun

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SmartAgentRun
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


