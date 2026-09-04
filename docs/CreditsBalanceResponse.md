
# CreditsBalanceResponse

Minimal balance shape. The MCP `check_credits` description tells the agent to direct the user to billing for plan/renewal info, so we deliberately don\'t ship plan_slug / renew_at here even though callers might want them — keep the contract tight.

## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`organization_id` | string
`credits` | number

## Example

```typescript
import type { CreditsBalanceResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "organization_id": null,
  "credits": null,
} satisfies CreditsBalanceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreditsBalanceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


