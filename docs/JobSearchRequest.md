
# JobSearchRequest


## Properties

Name | Type
------------ | -------------
`titles` | Array&lt;string&gt;
`keywords` | Array&lt;string&gt;
`company_domains` | Array&lt;string&gt;
`company_criteria` | object
`locations` | Array&lt;string&gt;
`posted_within_days` | number
`limit` | number
`quote_id` | string

## Example

```typescript
import type { JobSearchRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "titles": null,
  "keywords": null,
  "company_domains": null,
  "company_criteria": null,
  "locations": null,
  "posted_within_days": null,
  "limit": null,
  "quote_id": null,
} satisfies JobSearchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobSearchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


