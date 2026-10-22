
# LeadRow


## Properties

Name | Type
------------ | -------------
`lead_id` | string
`first_name` | string
`last_name` | string
`full_name` | string
`email` | string
`phone` | string
`title` | string
`company` | string
`company_id` | string
`domain` | string
`location` | string
`linkedin_url` | string
`provider` | string

## Example

```typescript
import type { LeadRow } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_id": null,
  "first_name": null,
  "last_name": null,
  "full_name": null,
  "email": null,
  "phone": null,
  "title": null,
  "company": null,
  "company_id": null,
  "domain": null,
  "location": null,
  "linkedin_url": null,
  "provider": null,
} satisfies LeadRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LeadRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


