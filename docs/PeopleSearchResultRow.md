
# PeopleSearchResultRow


## Properties

Name | Type
------------ | -------------
`lead_id` | string
`first_name` | string
`last_name` | string
`full_name` | string
`title` | string
`company` | string
`domain` | string
`location` | string
`linkedin_url` | string
`seniority` | string
`profile_image_url` | string
`confidence_score` | number
`company_linkedin_url` | string
`company_founded_year` | number
`company_industry` | string
`company_industries` | Array&lt;string&gt;
`company_industries_truncated` | boolean
`company_headcount` | number
`company_headcount_range` | string
`current_roles` | [Array&lt;CurrentRoleEvidence&gt;](CurrentRoleEvidence.md)
`match_evidence` | [PeopleMatchEvidence](PeopleMatchEvidence.md)

## Example

```typescript
import type { PeopleSearchResultRow } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_id": null,
  "first_name": null,
  "last_name": null,
  "full_name": null,
  "title": null,
  "company": null,
  "domain": null,
  "location": null,
  "linkedin_url": null,
  "seniority": null,
  "profile_image_url": null,
  "confidence_score": null,
  "company_linkedin_url": null,
  "company_founded_year": null,
  "company_industry": null,
  "company_industries": null,
  "company_industries_truncated": null,
  "company_headcount": null,
  "company_headcount_range": null,
  "current_roles": null,
  "match_evidence": null,
} satisfies PeopleSearchResultRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleSearchResultRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


