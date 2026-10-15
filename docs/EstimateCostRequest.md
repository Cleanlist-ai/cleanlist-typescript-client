
# EstimateCostRequest


## Properties

Name | Type
------------ | -------------
`tool` | string
`list_id` | string
`filters` | object
`row_count` | number
`scope` | string
`agent_type` | string
`column_name` | string
`prompt` | string
`template_id` | string
`lead_scope` | string
`max_rows` | number
`overwrite` | boolean
`include_phone` | boolean
`provider` | string
`sub_action` | string
`campaign_id` | string
`field_mapping` | { [key: string]: string; }
`enrichment_type` | string
`task_id` | string
`data_points` | Array&lt;string&gt;
`entity_ids` | Array&lt;string&gt;
`extra` | object

## Example

```typescript
import type { EstimateCostRequest } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tool": null,
  "list_id": null,
  "filters": null,
  "row_count": null,
  "scope": null,
  "agent_type": null,
  "column_name": null,
  "prompt": null,
  "template_id": null,
  "lead_scope": null,
  "max_rows": null,
  "overwrite": null,
  "include_phone": null,
  "provider": null,
  "sub_action": null,
  "campaign_id": null,
  "field_mapping": null,
  "enrichment_type": null,
  "task_id": null,
  "data_points": null,
  "entity_ids": null,
  "extra": null,
} satisfies EstimateCostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EstimateCostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


