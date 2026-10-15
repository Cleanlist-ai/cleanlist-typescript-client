
# CompaniesFindStatusResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`entity_kind` | string
`status` | string
`results` | Array&lt;any&gt;
`total` | number
`cursor` | string
`credits_charged` | number
`resolved_company_count` | number
`composite_warning` | string

## Example

```typescript
import type { CompaniesFindStatusResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "entity_kind": null,
  "status": null,
  "results": null,
  "total": null,
  "cursor": null,
  "credits_charged": null,
  "resolved_company_count": null,
  "composite_warning": null,
} satisfies CompaniesFindStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompaniesFindStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


