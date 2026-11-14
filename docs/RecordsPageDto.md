
# RecordsPageDto


## Properties

Name | Type
------------ | -------------
`records` | [Array&lt;RunRecordDto&gt;](RunRecordDto.md)
`nextCursor` | string

## Example

```typescript
import type { RecordsPageDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "records": null,
  "nextCursor": null,
} satisfies RecordsPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecordsPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


