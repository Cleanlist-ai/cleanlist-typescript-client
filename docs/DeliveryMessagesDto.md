
# DeliveryMessagesDto


## Properties

Name | Type
------------ | -------------
`slackChannelId` | string
`slackChannelName` | string
`slackDm` | boolean
`email` | Array&lt;string&gt;
`dailySummary` | [DailySummaryDto](DailySummaryDto.md)

## Example

```typescript
import type { DeliveryMessagesDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "slackChannelId": null,
  "slackChannelName": null,
  "slackDm": null,
  "email": null,
  "dailySummary": null,
} satisfies DeliveryMessagesDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeliveryMessagesDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


