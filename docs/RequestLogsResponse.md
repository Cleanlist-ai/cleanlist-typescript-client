
# RequestLogsResponse


## Properties

Name | Type
------------ | -------------
`logs` | [Array&lt;RequestLogRow&gt;](RequestLogRow.md)
`next_cursor` | string

## Example

```typescript
import type { RequestLogsResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "logs": null,
  "next_cursor": null,
} satisfies RequestLogsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestLogsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


