
# PeopleSearchCriteria

``SearchFilters``: the People Finder\'s filter blob, one field per control.

## Properties

Name | Type
------------ | -------------
`industriesInclude` | Array&lt;string&gt;
`industriesExclude` | Array&lt;string&gt;
`companySizes` | Array&lt;string&gt;
`seniority` | Array&lt;string&gt;
`jobTitlesInclude` | Array&lt;string&gt;
`jobTitlesExclude` | Array&lt;string&gt;
`jobTitleMatchType` | string
`yearsOfExperience` | string
`contactCountries` | Array&lt;string&gt;
`contactCountriesExclude` | Array&lt;string&gt;
`contactRegions` | Array&lt;string&gt;
`contactRegionsExclude` | Array&lt;string&gt;
`contactCities` | Array&lt;string&gt;
`contactCitiesExclude` | Array&lt;string&gt;
`companyCountries` | Array&lt;string&gt;
`companyCountriesExclude` | Array&lt;string&gt;
`companyRegions` | Array&lt;string&gt;
`companyRegionsExclude` | Array&lt;string&gt;
`companyCities` | Array&lt;string&gt;
`companyCitiesExclude` | Array&lt;string&gt;
`skills` | Array&lt;string&gt;
`connectionsMin` | string
`connectionsMax` | string
`degreeTypes` | Array&lt;string&gt;
`schoolNames` | Array&lt;string&gt;
`fieldsOfStudy` | Array&lt;string&gt;
`certificationKeywords` | Array&lt;string&gt;
`companyNameFilter` | string
`companyNameMatchType` | string
`firstName` | string
`lastName` | string
`linkedinUrls` | Array&lt;string&gt;
`pastCompanies` | Array&lt;string&gt;
`pastTitles` | Array&lt;string&gt;
`yearsAtCompany` | string
`recentlyChangedJobs` | boolean
`currentCompanyLinkedInUrls` | Array&lt;string&gt;
`currentCompanyDomains` | Array&lt;string&gt;
`currentCompanyNames` | Array&lt;string&gt;
`pastCompanyLinkedInUrls` | Array&lt;string&gt;
`functionCategoriesInclude` | Array&lt;string&gt;
`pastFunctionCategoriesInclude` | Array&lt;string&gt;
`pastSeniority` | Array&lt;string&gt;
`pastCompaniesRequireAll` | boolean
`neverWorkedAtCompanies` | Array&lt;string&gt;
`neverHeldTitles` | Array&lt;string&gt;
`followersMin` | string
`followersMax` | string
`languages` | Array&lt;string&gt;
`openToCards` | Array&lt;string&gt;
`profileUpdatedAfter` | string
`headlineContains` | string
`summaryContains` | string
`twitterHandle` | string
`titleBooleanQuery` | string
`keywordsBooleanQuery` | string
`joinedCurrentAfter` | string
`pastLeftCompanyAfter` | string
`excludeProfileUrls` | Array&lt;string&gt;
`excludeCompanyDomains` | Array&lt;string&gt;
`excludeCrmCustomers` | boolean
`excludeCrmActiveOpportunities` | boolean
`excludeCrmOwnedByMe` | boolean
`excludeCrmOwnedByOthers` | boolean
`excludeCrmOwner` | string
`excludeCrmAccountStatus` | string
`crmFilterSections` | [CrmFilterSections](CrmFilterSections.md)
`excludeInCleanlist` | string
`excludeInCleanlistListIds` | Array&lt;string&gt;
`companyFilterCompositeMode` | boolean
`geoRadius` | [GeoRadius](GeoRadius.md)
`maxResults` | number
`limitPerCompany` | string

## Example

```typescript
import type { PeopleSearchCriteria } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "industriesInclude": null,
  "industriesExclude": null,
  "companySizes": null,
  "seniority": null,
  "jobTitlesInclude": null,
  "jobTitlesExclude": null,
  "jobTitleMatchType": null,
  "yearsOfExperience": null,
  "contactCountries": null,
  "contactCountriesExclude": null,
  "contactRegions": null,
  "contactRegionsExclude": null,
  "contactCities": null,
  "contactCitiesExclude": null,
  "companyCountries": null,
  "companyCountriesExclude": null,
  "companyRegions": null,
  "companyRegionsExclude": null,
  "companyCities": null,
  "companyCitiesExclude": null,
  "skills": null,
  "connectionsMin": null,
  "connectionsMax": null,
  "degreeTypes": null,
  "schoolNames": null,
  "fieldsOfStudy": null,
  "certificationKeywords": null,
  "companyNameFilter": null,
  "companyNameMatchType": null,
  "firstName": null,
  "lastName": null,
  "linkedinUrls": null,
  "pastCompanies": null,
  "pastTitles": null,
  "yearsAtCompany": null,
  "recentlyChangedJobs": null,
  "currentCompanyLinkedInUrls": null,
  "currentCompanyDomains": null,
  "currentCompanyNames": null,
  "pastCompanyLinkedInUrls": null,
  "functionCategoriesInclude": null,
  "pastFunctionCategoriesInclude": null,
  "pastSeniority": null,
  "pastCompaniesRequireAll": null,
  "neverWorkedAtCompanies": null,
  "neverHeldTitles": null,
  "followersMin": null,
  "followersMax": null,
  "languages": null,
  "openToCards": null,
  "profileUpdatedAfter": null,
  "headlineContains": null,
  "summaryContains": null,
  "twitterHandle": null,
  "titleBooleanQuery": null,
  "keywordsBooleanQuery": null,
  "joinedCurrentAfter": null,
  "pastLeftCompanyAfter": null,
  "excludeProfileUrls": null,
  "excludeCompanyDomains": null,
  "excludeCrmCustomers": null,
  "excludeCrmActiveOpportunities": null,
  "excludeCrmOwnedByMe": null,
  "excludeCrmOwnedByOthers": null,
  "excludeCrmOwner": null,
  "excludeCrmAccountStatus": null,
  "crmFilterSections": null,
  "excludeInCleanlist": null,
  "excludeInCleanlistListIds": null,
  "companyFilterCompositeMode": null,
  "geoRadius": null,
  "maxResults": null,
  "limitPerCompany": null,
} satisfies PeopleSearchCriteria

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleSearchCriteria
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


