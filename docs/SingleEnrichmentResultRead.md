
# SingleEnrichmentResultRead

Inline enriched-lead payload for single-workflow polls.  Populated by `enrich_status` only when the workflow is a single- lead `enrich_person` run AND has reached a terminal state. Read from the workflow\'s returned `EnrichmentResult` via Temporal\'s history — no extra DB round-trip, no race with backend visibility. Bulk-list runs leave `result=None` on the parent response (the aggregate counters carry the cohort\'s progress instead).  `status` here is the EnrichmentResult-level outcome (\"completed\" / \"failed\"), NOT the outer workflow status. Use it to distinguish a real enrichment (Lead persisted, lead_id set) from a workflow that returned cleanly with no usable Lead (e.g. provider cascade exhausted — `lead_id` will be empty).

## Properties

Name | Type
------------ | -------------
`lead_id` | string
`status` | string
`full_name` | string
`first_name` | string
`last_name` | string
`email` | string
`email_status` | string
`phone` | string
`linkedin_url` | string
`title` | string
`company` | string
`enrichment_type` | string
`provider` | string

## Example

```typescript
import type { SingleEnrichmentResultRead } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "lead_id": null,
  "status": null,
  "full_name": null,
  "first_name": null,
  "last_name": null,
  "email": null,
  "email_status": null,
  "phone": null,
  "linkedin_url": null,
  "title": null,
  "company": null,
  "enrichment_type": null,
  "provider": null,
} satisfies SingleEnrichmentResultRead

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SingleEnrichmentResultRead
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


