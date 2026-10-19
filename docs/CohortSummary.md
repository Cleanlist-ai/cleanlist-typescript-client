
# CohortSummary


## Properties

Name | Type
------------ | -------------
`identity_namespace` | string
`population_scope` | string
`provider_total` | number
`returned_count` | number
`retained_count` | number
`evidence_checked_count` | number
`provider_has_more` | boolean
`retention_truncated` | boolean
`expires_at` | string

## Example

```typescript
import type { CohortSummary } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "identity_namespace": null,
  "population_scope": null,
  "provider_total": null,
  "returned_count": null,
  "retained_count": null,
  "evidence_checked_count": null,
  "provider_has_more": null,
  "retention_truncated": null,
  "expires_at": null,
} satisfies CohortSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CohortSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


