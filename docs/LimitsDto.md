
# LimitsDto


## Properties

Name | Type
------------ | -------------
`creditsPerRun` | number
`recordsPerRun` | number
`modelCreditsPerRun` | number

## Example

```typescript
import type { LimitsDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "creditsPerRun": null,
  "recordsPerRun": null,
  "modelCreditsPerRun": null,
} satisfies LimitsDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LimitsDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


