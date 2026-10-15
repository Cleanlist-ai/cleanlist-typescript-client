
# GeoRadius

``SearchFilters.geoRadius``: a free-text center plus a distance.

## Properties

Name | Type
------------ | -------------
`center` | string
`radius` | number
`unit` | string

## Example

```typescript
import type { GeoRadius } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "center": null,
  "radius": null,
  "unit": null,
} satisfies GeoRadius

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeoRadius
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


