
# PendingImportRow


## Properties

Name | Type
------------ | -------------
`raw_person_id` | string
`status` | [RawPersonStatus](RawPersonStatus.md)
`source_row_index` | number
`first_name` | string
`last_name` | string
`full_name` | string
`email` | string
`phone` | string
`title` | string
`company` | string
`company_domain` | string
`linkedin_url` | string

## Example

```typescript
import type { PendingImportRow } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "raw_person_id": null,
  "status": null,
  "source_row_index": null,
  "first_name": null,
  "last_name": null,
  "full_name": null,
  "email": null,
  "phone": null,
  "title": null,
  "company": null,
  "company_domain": null,
  "linkedin_url": null,
} satisfies PendingImportRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingImportRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


