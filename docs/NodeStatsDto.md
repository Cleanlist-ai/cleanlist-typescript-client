
# NodeStatsDto


## Properties

Name | Type
------------ | -------------
`nodeId` | string
`nodeType` | string
`status` | string
`skipReason` | string
`entered` | number
`succeeded` | number
`failed` | number
`filtered` | number
`creditsUsed` | number
`detail` | object

## Example

```typescript
import type { NodeStatsDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "nodeId": null,
  "nodeType": null,
  "status": null,
  "skipReason": null,
  "entered": null,
  "succeeded": null,
  "failed": null,
  "filtered": null,
  "creditsUsed": null,
  "detail": null,
} satisfies NodeStatsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NodeStatsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


