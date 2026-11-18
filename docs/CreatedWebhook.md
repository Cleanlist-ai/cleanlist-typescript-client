
# CreatedWebhook


## Properties

Name | Type
------------ | -------------
`webhook_id` | string
`url` | string
`events` | Array&lt;string&gt;
`created_at` | Date
`secret` | string

## Example

```typescript
import type { CreatedWebhook } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "webhook_id": null,
  "url": null,
  "events": null,
  "created_at": null,
  "secret": null,
} satisfies CreatedWebhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatedWebhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


