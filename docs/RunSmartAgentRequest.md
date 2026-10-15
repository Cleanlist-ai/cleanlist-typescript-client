
# RunSmartAgentRequest


## Properties

Name | Type
------------ | -------------
`list_id` | string
`agent_type` | string
`prompt` | string
`column_name` | string
`template_id` | string
`lead_scope` | string
`max_rows` | number
`quote_id` | string
`overwrite` | boolean

## Example

```typescript
import type { RunSmartAgentRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "list_id": null,
  "agent_type": null,
  "prompt": null,
  "column_name": null,
  "template_id": null,
  "lead_scope": null,
  "max_rows": null,
  "quote_id": null,
  "overwrite": null,
} satisfies RunSmartAgentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunSmartAgentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


