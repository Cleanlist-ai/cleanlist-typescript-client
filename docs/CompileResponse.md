
# CompileResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`route` | object
`person_filter` | object
`company_filter` | object
`warnings` | Array&lt;string&gt;
`exclusions_applied` | { [key: string]: number; }
`exclusions_complete` | boolean

## Example

```typescript
import type { CompileResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "route": null,
  "person_filter": null,
  "company_filter": null,
  "warnings": null,
  "exclusions_applied": null,
  "exclusions_complete": null,
} satisfies CompileResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompileResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


