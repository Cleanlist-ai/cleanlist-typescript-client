
# EnrichCompanyResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`company` | [CompanyRecord](CompanyRecord.md)
`credits_charged` | number

## Example

```typescript
import type { EnrichCompanyResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "company": null,
  "credits_charged": null,
} satisfies EnrichCompanyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichCompanyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


