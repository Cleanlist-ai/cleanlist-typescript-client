
# RunSummaryDto


## Properties

Name | Type
------------ | -------------
`id` | string
`playbookId` | string
`status` | string
`isDryRun` | boolean
`sampleSize` | number
`skipped` | number
`kind` | string
`holds` | { [key: string]: number; }
`fromPlays` | Array&lt;{ [key: string]: string; }&gt;
`recordsTotal` | number
`recordsCompleted` | number
`recordsFailed` | number
`creditsUsed` | number
`workflowId` | string
`createdAt` | string
`finishedAt` | string
`period` | object
`scan` | object
`meeting` | object
`sheet` | object
`cleanup` | object
`review` | object
`brief` | string
`conversationId` | string
`testRecord` | object
`waitingHolds` | { [key: string]: number; }
`error` | { [key: string]: string; }
`outcome` | { [key: string]: string; }

## Example

```typescript
import type { RunSummaryDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "playbookId": null,
  "status": null,
  "isDryRun": null,
  "sampleSize": null,
  "skipped": null,
  "kind": null,
  "holds": null,
  "fromPlays": null,
  "recordsTotal": null,
  "recordsCompleted": null,
  "recordsFailed": null,
  "creditsUsed": null,
  "workflowId": null,
  "createdAt": null,
  "finishedAt": null,
  "period": null,
  "scan": null,
  "meeting": null,
  "sheet": null,
  "cleanup": null,
  "review": null,
  "brief": null,
  "conversationId": null,
  "testRecord": null,
  "waitingHolds": null,
  "error": null,
  "outcome": null,
} satisfies RunSummaryDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunSummaryDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


