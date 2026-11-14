
# Card


## Properties

Name | Type
------------ | -------------
`card_id` | string
`title` | string
`summary` | string
`credits_required` | number
`expires_at` | string

## Example

```typescript
import type { Card } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "card_id": null,
  "title": null,
  "summary": null,
  "credits_required": null,
  "expires_at": null,
} satisfies Card

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Card
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


