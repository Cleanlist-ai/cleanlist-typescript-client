
# TriggerDto


## Properties

Name | Type
------------ | -------------
`id` | string
`kind` | string
`config` | object
`schedule` | object
`note` | string
`enabled` | boolean
`lastFiredAt` | string
`nextAt` | string
`nextCheckBy` | string
`source` | string
`health` | object

## Example

```typescript
import type { TriggerDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "kind": null,
  "config": null,
  "schedule": null,
  "note": null,
  "enabled": null,
  "lastFiredAt": null,
  "nextAt": null,
  "nextCheckBy": null,
  "source": null,
  "health": null,
} satisfies TriggerDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TriggerDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


