
# CompanySearchCriteria

The company-side filter blob, one field per ``CompanySearchFilters`` key.

## Properties

Name | Type
------------ | -------------
`companyName` | string
`companyNameMatchType` | string
`domain` | string
`industriesInclude` | Array&lt;string&gt;
`headcountRanges` | Array&lt;string&gt;
`revenueMin` | string
`revenueMax` | string
`yearFoundedMin` | string
`yearFoundedMax` | string
`companyType` | Array&lt;string&gt;
`fundingRoundTypes` | Array&lt;string&gt;
`fundingAmountMin` | string
`growthMin` | string
`growthMax` | string
`industriesExclude` | Array&lt;string&gt;
`headcountRangesExclude` | Array&lt;string&gt;
`companyTypeExclude` | Array&lt;string&gt;
`hqCountriesIso3` | Array&lt;string&gt;
`hqCountriesIso3Exclude` | Array&lt;string&gt;
`largestHeadcountCountriesIso3` | Array&lt;string&gt;
`hqStates` | Array&lt;string&gt;
`hqStatesExclude` | Array&lt;string&gt;
`hqCities` | Array&lt;string&gt;
`hqCitiesExclude` | Array&lt;string&gt;
`linkedinCategoriesInclude` | Array&lt;string&gt;
`crunchbaseCategoriesInclude` | Array&lt;string&gt;
`crunchbaseCategoriesExclude` | Array&lt;string&gt;
`stockListings` | Array&lt;string&gt;
`headcountLatestMin` | string
`headcountLatestMax` | string
`growth1mMin` | string
`growth3mMin` | string
`growth12mMin` | string
`followersMin` | string
`followersGrowth6mMin` | string
`followersGrowth12mMin` | string
`lastFundingDateAfter` | string
`ipoDateAfter` | string
`lastFundingRoundAmountMin` | string
`lastFundingRoundAmountMax` | string
`valuationMin` | string
`valuationMax` | string
`bootstrappedOnly` | boolean
`acquiredOnly` | boolean
`fundingRoundTypesExclude` | Array&lt;string&gt;
`investorsInclude` | Array&lt;string&gt;
`investorsExclude` | Array&lt;string&gt;
`stockSymbols` | Array&lt;string&gt;
`domainsList` | Array&lt;string&gt;
`companyNamesList` | Array&lt;string&gt;
`twitterHandle` | string
`descriptionKeyword` | string
`updatedAfter` | string
`compositeMode` | boolean
`workforceRules` | [Array&lt;WorkforceRule&gt;](WorkforceRule.md)
`excludeCompanyDomains` | Array&lt;string&gt;
`excludeInCleanlist` | string
`excludeInCleanlistListIds` | Array&lt;string&gt;
`crmFilterSections` | [CrmFilterSections](CrmFilterSections.md)

## Example

```typescript
import type { CompanySearchCriteria } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "companyName": null,
  "companyNameMatchType": null,
  "domain": null,
  "industriesInclude": null,
  "headcountRanges": null,
  "revenueMin": null,
  "revenueMax": null,
  "yearFoundedMin": null,
  "yearFoundedMax": null,
  "companyType": null,
  "fundingRoundTypes": null,
  "fundingAmountMin": null,
  "growthMin": null,
  "growthMax": null,
  "industriesExclude": null,
  "headcountRangesExclude": null,
  "companyTypeExclude": null,
  "hqCountriesIso3": null,
  "hqCountriesIso3Exclude": null,
  "largestHeadcountCountriesIso3": null,
  "hqStates": null,
  "hqStatesExclude": null,
  "hqCities": null,
  "hqCitiesExclude": null,
  "linkedinCategoriesInclude": null,
  "crunchbaseCategoriesInclude": null,
  "crunchbaseCategoriesExclude": null,
  "stockListings": null,
  "headcountLatestMin": null,
  "headcountLatestMax": null,
  "growth1mMin": null,
  "growth3mMin": null,
  "growth12mMin": null,
  "followersMin": null,
  "followersGrowth6mMin": null,
  "followersGrowth12mMin": null,
  "lastFundingDateAfter": null,
  "ipoDateAfter": null,
  "lastFundingRoundAmountMin": null,
  "lastFundingRoundAmountMax": null,
  "valuationMin": null,
  "valuationMax": null,
  "bootstrappedOnly": null,
  "acquiredOnly": null,
  "fundingRoundTypesExclude": null,
  "investorsInclude": null,
  "investorsExclude": null,
  "stockSymbols": null,
  "domainsList": null,
  "companyNamesList": null,
  "twitterHandle": null,
  "descriptionKeyword": null,
  "updatedAfter": null,
  "compositeMode": null,
  "workforceRules": null,
  "excludeCompanyDomains": null,
  "excludeInCleanlist": null,
  "excludeInCleanlistListIds": null,
  "crmFilterSections": null,
} satisfies CompanySearchCriteria

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompanySearchCriteria
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


