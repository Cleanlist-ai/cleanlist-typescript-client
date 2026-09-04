
# WhoamiResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`user_email` | string
`user_id` | string
`user_name` | string
`organization_id` | string
`organization_name` | string
`auth_type` | string
`scopes` | Array&lt;string | null&gt;
`tier` | string
`appsumo_tier` | number
`features` | Array&lt;string | null&gt;

## Example

```typescript
import type { WhoamiResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "user_email": null,
  "user_id": null,
  "user_name": null,
  "organization_id": null,
  "organization_name": null,
  "auth_type": null,
  "scopes": null,
  "tier": null,
  "appsumo_tier": null,
  "features": null,
} satisfies WhoamiResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhoamiResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


