
# PostEngagersBody


## Properties

Name | Type
------------ | -------------
`people` | object
`author_urls` | Array&lt;string&gt;
`text_phrases` | Array&lt;string&gt;
`posted_within_days` | number
`limit` | number
`quote_id` | string

## Example

```typescript
import type { PostEngagersBody } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "people": null,
  "author_urls": null,
  "text_phrases": null,
  "posted_within_days": null,
  "limit": null,
  "quote_id": null,
} satisfies PostEngagersBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostEngagersBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


