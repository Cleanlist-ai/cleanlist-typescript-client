
# PeopleMatchEvidence


## Properties

Name | Type
------------ | -------------
`status` | string
`scope` | string
`title_match_mode` | string
`company_scope_match` | boolean
`warnings` | Array&lt;string&gt;

## Example

```typescript
import type { PeopleMatchEvidence } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "scope": null,
  "title_match_mode": null,
  "company_scope_match": null,
  "warnings": null,
} satisfies PeopleMatchEvidence

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleMatchEvidence
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


