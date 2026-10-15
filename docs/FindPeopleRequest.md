
# FindPeopleRequest


## Properties

Name | Type
------------ | -------------
`company_ids` | Array&lt;string&gt;
`job_titles` | Array&lt;string&gt;
`seniority_levels` | Array&lt;string&gt;
`limit_per_company` | number
`location_state` | string
`location_country` | string

## Example

```typescript
import type { FindPeopleRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "company_ids": null,
  "job_titles": null,
  "seniority_levels": null,
  "limit_per_company": null,
  "location_state": null,
  "location_country": null,
} satisfies FindPeopleRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FindPeopleRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


