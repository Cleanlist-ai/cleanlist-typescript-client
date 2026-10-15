
# PeopleSearchRequest


## Properties

Name | Type
------------ | -------------
`filters` | object
`criteria` | [PeopleSearchCriteria](PeopleSearchCriteria.md)
`company_criteria` | [CompanySearchCriteria](CompanySearchCriteria.md)
`crm` | string
`limit` | number
`cursor` | string
`sort` | string

## Example

```typescript
import type { PeopleSearchRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "filters": null,
  "criteria": null,
  "company_criteria": null,
  "crm": null,
  "limit": null,
  "cursor": null,
  "sort": null,
} satisfies PeopleSearchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleSearchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


