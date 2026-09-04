
# EnrichPersonRequest


## Properties

Name | Type
------------ | -------------
`lead_list_id` | string
`email` | string
`linkedin_url` | string
`phone` | string
`first_name` | string
`last_name` | string
`company_name` | string
`domain` | string
`person_id` | string
`enrichment_type` | string
`include_phone` | boolean
`quote_id` | string

## Example

```typescript
import type { EnrichPersonRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_list_id": null,
  "email": null,
  "linkedin_url": null,
  "phone": null,
  "first_name": null,
  "last_name": null,
  "company_name": null,
  "domain": null,
  "person_id": null,
  "enrichment_type": null,
  "include_phone": null,
  "quote_id": null,
} satisfies EnrichPersonRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnrichPersonRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


