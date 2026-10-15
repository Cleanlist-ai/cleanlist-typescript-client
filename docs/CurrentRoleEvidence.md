
# CurrentRoleEvidence


## Properties

Name | Type
------------ | -------------
`title` | string
`company` | string
`domain` | string
`company_linkedin_url` | string
`company_founded_year` | number
`company_industry` | string
`company_industries` | Array&lt;string&gt;
`company_industries_truncated` | boolean
`company_headcount` | number
`company_headcount_range` | string
`seniority` | string

## Example

```typescript
import type { CurrentRoleEvidence } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "company": null,
  "domain": null,
  "company_linkedin_url": null,
  "company_founded_year": null,
  "company_industry": null,
  "company_industries": null,
  "company_industries_truncated": null,
  "company_headcount": null,
  "company_headcount_range": null,
  "seniority": null,
} satisfies CurrentRoleEvidence

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CurrentRoleEvidence
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


