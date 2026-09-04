
# EnrichCompanyRequest


## Properties

Name | Type
------------ | -------------
`domain` | string
`company_name` | string
`company_ticker` | string
`company_id` | string
`quote_id` | string

## Example

```typescript
import type { EnrichCompanyRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "domain": null,
  "company_name": null,
  "company_ticker": null,
  "company_id": null,
  "quote_id": null,
} satisfies EnrichCompanyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichCompanyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


