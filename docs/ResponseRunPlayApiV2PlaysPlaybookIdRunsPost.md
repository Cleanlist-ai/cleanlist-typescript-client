
# ResponseRunPlayApiV2PlaysPlaybookIdRunsPost


## Properties

Name | Type
------------ | -------------
`committed` | boolean
`action` | string
`description` | string
`credits_max` | number
`records_max` | number
`effects` | Array&lt;string&gt;
`required_scopes` | Array&lt;string&gt;
`missing_scopes` | Array&lt;string&gt;
`estimate` | object
`run_id` | string
`queued` | boolean
`reason` | string
`event_id` | string

## Example

```typescript
import type { ResponseRunPlayApiV2PlaysPlaybookIdRunsPost } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "committed": null,
  "action": null,
  "description": null,
  "credits_max": null,
  "records_max": null,
  "effects": null,
  "required_scopes": null,
  "missing_scopes": null,
  "estimate": null,
  "run_id": null,
  "queued": null,
  "reason": null,
  "event_id": null,
} satisfies ResponseRunPlayApiV2PlaysPlaybookIdRunsPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseRunPlayApiV2PlaysPlaybookIdRunsPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


