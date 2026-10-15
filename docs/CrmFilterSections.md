
# CrmFilterSections

``CrmFilterSections``: clauses grouped by the CRM they resolve against.

## Properties

Name | Type
------------ | -------------
`salesforce` | [Array&lt;CrmFilterClause&gt;](CrmFilterClause.md)
`hubspot` | [Array&lt;CrmFilterClause&gt;](CrmFilterClause.md)

## Example

```typescript
import type { CrmFilterSections } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "salesforce": null,
  "hubspot": null,
} satisfies CrmFilterSections

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrmFilterSections
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


