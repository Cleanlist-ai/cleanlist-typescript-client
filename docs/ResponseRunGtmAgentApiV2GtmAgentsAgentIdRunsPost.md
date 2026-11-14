
# ResponseRunGtmAgentApiV2GtmAgentsAgentIdRunsPost


## Properties

Name | Type
------------ | -------------
`committed` | boolean
`action` | string
`description` | string
`credits_max` | number
`records_max` | number
`effects` | Array&lt;string&gt;
`required_scopes` | Array&lt;string&gt;
`missing_scopes` | Array&lt;string&gt;
`estimate` | object

## Example

```typescript
import type { ResponseRunGtmAgentApiV2GtmAgentsAgentIdRunsPost } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "committed": null,
  "action": null,
  "description": null,
  "credits_max": null,
  "records_max": null,
  "effects": null,
  "required_scopes": null,
  "missing_scopes": null,
  "estimate": null,
} satisfies ResponseRunGtmAgentApiV2GtmAgentsAgentIdRunsPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseRunGtmAgentApiV2GtmAgentsAgentIdRunsPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


