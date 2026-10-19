
# PeopleSearchResponse


## Properties

Name | Type
------------ | -------------
`task_id` | string
`timestamp_ms` | number
`agent_instructions` | string
`usage` | string
`message` | string
`entity_kind` | string
`search_handoff` | [SearchHandoff](SearchHandoff.md)
`cohort` | [CohortSummary](CohortSummary.md)
`presentation` | [SearchPresentation](SearchPresentation.md)
`criteria_applied` | object
`company_criteria_applied` | object
`route` | object
`warnings` | Array&lt;string&gt;
`exclusions_applied` | { [key: string]: number; }
`results` | [Array&lt;PeopleSearchResultRow&gt;](PeopleSearchResultRow.md)
`total` | number
`cursor` | string
`credits_charged` | number
`truncation_warning` | string

## Example

```typescript
import type { PeopleSearchResponse } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "task_id": null,
  "timestamp_ms": null,
  "agent_instructions": null,
  "usage": null,
  "message": null,
  "entity_kind": null,
  "search_handoff": null,
  "cohort": null,
  "presentation": null,
  "criteria_applied": null,
  "company_criteria_applied": null,
  "route": null,
  "warnings": null,
  "exclusions_applied": null,
  "results": null,
  "total": null,
  "cursor": null,
  "credits_charged": null,
  "truncation_warning": null,
} satisfies PeopleSearchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleSearchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


