
# FindPeopleStatusResponse


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
`people_found` | number
`people_imported` | number
`credits_used` | number
`lead_ids` | Array&lt;string&gt;
`errors` | Array&lt;string&gt;

## Example

```typescript
import type { FindPeopleStatusResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "workflow_id": null,
  "status": null,
  "people_found": null,
  "people_imported": null,
  "credits_used": null,
  "lead_ids": null,
  "errors": null,
} satisfies FindPeopleStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FindPeopleStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


