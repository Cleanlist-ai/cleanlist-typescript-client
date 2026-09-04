
# EnrichByTaskRequest


## Properties

Name | Type
------------ | -------------
`task_id` | string
`data_points` | Array&lt;string&gt;
`entity_ids` | Array&lt;string&gt;
`lead_list_id` | string
`quote_id` | string

## Example

```typescript
import type { EnrichByTaskRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "data_points": null,
  "entity_ids": null,
  "lead_list_id": null,
  "quote_id": null,
} satisfies EnrichByTaskRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichByTaskRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


