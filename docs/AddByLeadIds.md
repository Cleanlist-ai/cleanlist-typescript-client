
# AddByLeadIds

Mode A: add already-materialized leads by UUID.  These come from `list_leads_in_list` (real lead UUIDs) or a list already owned by the workspace.

## Properties

Name | Type
------------ | -------------
`lead_ids` | Array&lt;string&gt;
`idempotency_key` | string

## Example

```typescript
import type { AddByLeadIds } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_ids": null,
  "idempotency_key": null,
} satisfies AddByLeadIds

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddByLeadIds
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


