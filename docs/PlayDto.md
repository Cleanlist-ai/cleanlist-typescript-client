
# PlayDto


## Properties

Name | Type
------------ | -------------
`playbook_id` | string
`agent_id` | string
`name` | string
`inputs` | [Array&lt;PlayInput&gt;](PlayInput.md)

## Example

```typescript
import type { PlayDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "playbook_id": null,
  "agent_id": null,
  "name": null,
  "inputs": null,
} satisfies PlayDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlayDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


