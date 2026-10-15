
# CreditsCharged

Actual credits billed after settle. Null while running or for non-prepaid legacy runs; 0 for a sweep-refunded run.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { CreditsCharged } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies CreditsCharged

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreditsCharged
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


