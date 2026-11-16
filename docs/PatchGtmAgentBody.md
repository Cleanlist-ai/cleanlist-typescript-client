
# PatchGtmAgentBody


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`settings` | object
`schedule` | object
`playbook_id` | string

## Example

```typescript
import type { PatchGtmAgentBody } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "settings": null,
  "schedule": null,
  "playbook_id": null,
} satisfies PatchGtmAgentBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PatchGtmAgentBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


