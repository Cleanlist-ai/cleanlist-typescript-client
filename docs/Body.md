
# Body


## Properties

Name | Type
------------ | -------------
`lead_ids` | Array&lt;string&gt;
`idempotency_key` | string
`task_id` | string
`entity_ids` | Array&lt;string&gt;

## Example

```typescript
import type { Body } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_ids": null,
  "idempotency_key": null,
  "task_id": null,
  "entity_ids": null,
} satisfies Body

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Body
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


