
# DeliveryDataDto


## Properties

Name | Type
------------ | -------------
`leadListId` | string
`configuredLeadListId` | string
`crmSync` | boolean

## Example

```typescript
import type { DeliveryDataDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "leadListId": null,
  "configuredLeadListId": null,
  "crmSync": null,
} satisfies DeliveryDataDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeliveryDataDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


