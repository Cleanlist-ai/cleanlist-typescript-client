
# SettingsIssueDto

A step of one of the agent\'s plays under the agent\'s settings (``tool_policy.play_findings``): blocked, or asking someone first.

## Properties

Name | Type
------------ | -------------
`playId` | string
`nodeId` | string
`code` | string
`message` | string
`fix` | string
`key` | string
`connection` | string
`approver` | string

## Example

```typescript
import type { SettingsIssueDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "playId": null,
  "nodeId": null,
  "code": null,
  "message": null,
  "fix": null,
  "key": null,
  "connection": null,
  "approver": null,
} satisfies SettingsIssueDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SettingsIssueDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


