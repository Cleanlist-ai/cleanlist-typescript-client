
# AddByCohort

Mode B: materialize a prior search cohort into the list.  `search_*` rows carry integer search-DB ids (not lead UUIDs), so Mode A\'s `UUID(lead_id)` rejects them — Mode B resolves the cohort by `task_id` and creates the lead rows from the task\'s cached `entity_details`.

## Properties

Name | Type
------------ | -------------
`task_id` | string
`entity_ids` | Array&lt;string&gt;
`idempotency_key` | string

## Example

```typescript
import type { AddByCohort } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "entity_ids": null,
  "idempotency_key": null,
} satisfies AddByCohort

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddByCohort
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


