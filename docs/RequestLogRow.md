
# RequestLogRow


## Properties

Name | Type
------------ | -------------
`id` | string
`time` | Date
`method` | string
`path` | string
`status` | number
`duration_ms` | number
`tool` | string
`credits` | number
`key_prefix` | string
`client` | string

## Example

```typescript
import type { RequestLogRow } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "time": null,
  "method": null,
  "path": null,
  "status": null,
  "duration_ms": null,
  "tool": null,
  "credits": null,
  "key_prefix": null,
  "client": null,
} satisfies RequestLogRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestLogRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


