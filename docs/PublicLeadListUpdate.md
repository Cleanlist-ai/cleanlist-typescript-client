
# PublicLeadListUpdate

PATCH body for renaming / re-describing / re-filing a list.  All fields optional but at least one must be supplied. PATCH semantics: only the fields PRESENT in the request change. A field set to ``null`` clears it (``description``) or unfiles the list (``folder_id``); a field omitted entirely is left untouched. The omitted-vs-explicit-null distinction is read from ``model_fields_set`` in the handler — which is exactly why ``extra=\"forbid\"`` matters here: an unknown key would otherwise land in that set and be mistaken for a real field change.

## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`folder_id` | string

## Example

```typescript
import type { PublicLeadListUpdate } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "folder_id": null,
} satisfies PublicLeadListUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicLeadListUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


