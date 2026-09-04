
# ListSummary


## Properties

Name | Type
------------ | -------------
`list_id` | string
`name` | string
`lead_count` | number
`folder_id` | string
`created_at` | string
`owner_name` | string
`visibility` | string

## Example

```typescript
import type { ListSummary } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "list_id": null,
  "name": null,
  "lead_count": null,
  "folder_id": null,
  "created_at": null,
  "owner_name": null,
  "visibility": null,
} satisfies ListSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


