
# ExportCsvRequest


## Properties

Name | Type
------------ | -------------
`list_id` | string
`columns` | Array&lt;string&gt;
`include_smart_agents` | boolean

## Example

```typescript
import type { ExportCsvRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "list_id": null,
  "columns": null,
  "include_smart_agents": null,
} satisfies ExportCsvRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportCsvRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


