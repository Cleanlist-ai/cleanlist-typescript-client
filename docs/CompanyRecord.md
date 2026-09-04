
# CompanyRecord

Synchronous company enrichment result. Shape follows what CompanyDB returns, but with stable field names independent of Crustdata\'s response shape drift.

## Properties

Name | Type
------------ | -------------
`company_id` | string
`name` | string
`domain` | string
`industry` | string
`industries` | Array&lt;string&gt;
`employee_count` | number
`employee_count_range` | string
`revenue_range` | string
`hq_location` | string
`funding_stage` | string
`total_funding_usd` | number
`tech_stack` | Array&lt;string&gt;
`linkedin_url` | string

## Example

```typescript
import type { CompanyRecord } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "company_id": null,
  "name": null,
  "domain": null,
  "industry": null,
  "industries": null,
  "employee_count": null,
  "employee_count_range": null,
  "revenue_range": null,
  "hq_location": null,
  "funding_stage": null,
  "total_funding_usd": null,
  "tech_stack": null,
  "linkedin_url": null,
} satisfies CompanyRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompanyRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


