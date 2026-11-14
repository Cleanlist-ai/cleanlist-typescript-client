
# BatchRow


## Properties

Name | Type
------------ | -------------
`row` | number
`status` | string
`entity_id` | string
`result_index` | number
`error` | string
`company` | [CompanyRecord](CompanyRecord.md)

## Example

```typescript
import type { BatchRow } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "row": null,
  "status": null,
  "entity_id": null,
  "result_index": null,
  "error": null,
  "company": null,
} satisfies BatchRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


