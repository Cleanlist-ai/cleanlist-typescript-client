
# RunDetailDto


## Properties

Name | Type
------------ | -------------
`samplePreview` | object
`id` | string
`playbookId` | string
`status` | string
`outcome` | { [key: string]: string; }
`isDryRun` | boolean
`sampleSize` | number
`skipped` | number
`testRecord` | object
`projectionResult` | object
`kind` | string
`holds` | { [key: string]: number; }
`fromPlays` | Array&lt;{ [key: string]: string; }&gt;
`leadListId` | string
`graphSnapshot` | object
`recordsTotal` | number
`recordsCompleted` | number
`recordsFailed` | number
`creditsUsed` | number
`errors` | Array&lt;object | null&gt;
`nodeStats` | [Array&lt;NodeStatsDto&gt;](NodeStatsDto.md)
`frontier` | [Array&lt;FrontierEntryDto&gt;](FrontierEntryDto.md)
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
`waiting` | { [key: string]: object | null; }
`projection` | object

## Example

```typescript
import type { RunDetailDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "samplePreview": null,
  "id": null,
  "playbookId": null,
  "status": null,
  "outcome": null,
  "isDryRun": null,
  "sampleSize": null,
  "skipped": null,
  "testRecord": null,
  "projectionResult": null,
  "kind": null,
  "holds": null,
  "fromPlays": null,
  "leadListId": null,
  "graphSnapshot": null,
  "recordsTotal": null,
  "recordsCompleted": null,
  "recordsFailed": null,
  "creditsUsed": null,
  "errors": null,
  "nodeStats": null,
  "frontier": null,
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
  "waiting": null,
  "projection": null,
} satisfies RunDetailDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunDetailDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


