
# ListDetailResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`list_id` | string
`name` | string
`description` | string
`lead_count` | number
`enriched_count` | number
`folder_id` | string
`created_at` | string
`reused` | boolean

## Example

```typescript
import type { ListDetailResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "list_id": null,
  "name": null,
  "description": null,
  "lead_count": null,
  "enriched_count": null,
  "folder_id": null,
  "created_at": null,
  "reused": null,
} satisfies ListDetailResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDetailResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


