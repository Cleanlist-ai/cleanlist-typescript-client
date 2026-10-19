
# PersonPresentationRow


## Properties

Name | Type
------------ | -------------
`position` | number
`entity_id` | string
`name` | [PresentationLink](PresentationLink.md)
`title` | string
`company` | [PresentationLink](PresentationLink.md)
`location` | string
`headcount` | string
`headcount_discrepancy` | boolean
`industry` | string
`industry_truncated` | boolean
`evidence_status` | string
`email` | string
`phone` | string
`extra` | { [key: string]: string; }

## Example

```typescript
import type { PersonPresentationRow } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "position": null,
  "entity_id": null,
  "name": null,
  "title": null,
  "company": null,
  "location": null,
  "headcount": null,
  "headcount_discrepancy": null,
  "industry": null,
  "industry_truncated": null,
  "evidence_status": null,
  "email": null,
  "phone": null,
  "extra": null,
} satisfies PersonPresentationRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonPresentationRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


