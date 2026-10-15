
# CompileRequest


## Properties

Name | Type
------------ | -------------
`criteria` | [PeopleSearchCriteria](PeopleSearchCriteria.md)
`company_criteria` | [CompanySearchCriteria](CompanySearchCriteria.md)
`crm` | string

## Example

```typescript
import type { CompileRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "criteria": null,
  "company_criteria": null,
  "crm": null,
} satisfies CompileRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompileRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


