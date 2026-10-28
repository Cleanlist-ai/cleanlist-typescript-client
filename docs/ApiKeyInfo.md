
# ApiKeyInfo


## Properties

Name | Type
------------ | -------------
`key_id` | string
`key_prefix` | string
`key_last4` | string
`name` | string
`scopes` | Array&lt;string | null&gt;
`created_at` | string
`last_used_at` | string
`expires_at` | string
`is_active` | boolean

## Example

```typescript
import type { ApiKeyInfo } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "key_id": null,
  "key_prefix": null,
  "key_last4": null,
  "name": null,
  "scopes": null,
  "created_at": null,
  "last_used_at": null,
  "expires_at": null,
  "is_active": null,
} satisfies ApiKeyInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKeyInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


