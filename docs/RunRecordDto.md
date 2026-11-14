
# RunRecordDto


## Properties

Name | Type
------------ | -------------
`id` | string
`entityType` | string
`leadId` | string
`companyId` | string
`entity` | object
`currentNodeId` | string
`status` | string
`sourceNodeId` | string
`parentRecordId` | string
`children` | Array&lt;object | null&gt;
`error` | object
`updatedAt` | string
`deliveries` | Array&lt;object | null&gt;
`fields` | object
`approvalReason` | { [key: string]: string; }
`path` | Array&lt;object | null&gt;
`outputs` | object
`crmLinks` | { [key: string]: { [key: string]: string; }; }

## Example

```typescript
import type { RunRecordDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "entityType": null,
  "leadId": null,
  "companyId": null,
  "entity": null,
  "currentNodeId": null,
  "status": null,
  "sourceNodeId": null,
  "parentRecordId": null,
  "children": null,
  "error": null,
  "updatedAt": null,
  "deliveries": null,
  "fields": null,
  "approvalReason": null,
  "path": null,
  "outputs": null,
  "crmLinks": null,
} satisfies RunRecordDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunRecordDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


