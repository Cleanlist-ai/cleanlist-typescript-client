
# PlayGapDto

What one of the agent\'s saved plays doesn\'t do yet (``play_completeness``, CLE-478): its code, Clu\'s line, why (CRM sync off: not_added, not_connected, disconnected, declined) and the reply that asks Clu to propose the fix (none once declined).

## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string
`reason` | string
`quickReply` | string
`playId` | string

## Example

```typescript
import type { PlayGapDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "message": null,
  "reason": null,
  "quickReply": null,
  "playId": null,
} satisfies PlayGapDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlayGapDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


