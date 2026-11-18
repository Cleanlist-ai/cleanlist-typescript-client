
# CreateTaskBody


## Properties

Name | Type
------------ | -------------
`lead_id` | string
`task_type` | string
`due_at` | string
`note` | string
`commit` | boolean

## Example

```typescript
import type { CreateTaskBody } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_id": null,
  "task_type": null,
  "due_at": null,
  "note": null,
  "commit": null,
} satisfies CreateTaskBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTaskBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


