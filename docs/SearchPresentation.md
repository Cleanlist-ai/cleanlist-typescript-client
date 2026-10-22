
# SearchPresentation


## Properties

Name | Type
------------ | -------------
`entity_kind` | string
`columns` | Array&lt;string&gt;
`rows` | [Array&lt;PersonPresentationRow&gt;](PersonPresentationRow.md)
`shown` | number
`returned` | number
`provider_total` | number
`evidence_checked` | number
`headcount_discrepancy_rows` | Array&lt;number&gt;
`industry_truncated_rows` | Array&lt;number&gt;

## Example

```typescript
import type { SearchPresentation } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "entity_kind": null,
  "columns": null,
  "rows": null,
  "shown": null,
  "returned": null,
  "provider_total": null,
  "evidence_checked": null,
  "headcount_discrepancy_rows": null,
  "industry_truncated_rows": null,
} satisfies SearchPresentation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchPresentation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


