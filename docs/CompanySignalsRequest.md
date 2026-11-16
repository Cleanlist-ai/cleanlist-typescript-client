
# CompanySignalsRequest


## Properties

Name | Type
------------ | -------------
`signal_types` | Array&lt;string&gt;
`company_domains` | Array&lt;string&gt;
`since` | string
`quote_id` | string

## Example

```typescript
import type { CompanySignalsRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "signal_types": null,
  "company_domains": null,
  "since": null,
  "quote_id": null,
} satisfies CompanySignalsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompanySignalsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


