
# PeopleByCompaniesRequest


## Properties

Name | Type
------------ | -------------
`company_filter` | object
`company_linkedin_urls` | Array&lt;string&gt;
`person_filter` | object
`limit` | number
`cursor` | string
`sorts` | Array&lt;object | null&gt;
`post_processing` | object

## Example

```typescript
import type { PeopleByCompaniesRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "company_filter": null,
  "company_linkedin_urls": null,
  "person_filter": null,
  "limit": null,
  "cursor": null,
  "sorts": null,
  "post_processing": null,
} satisfies PeopleByCompaniesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleByCompaniesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


