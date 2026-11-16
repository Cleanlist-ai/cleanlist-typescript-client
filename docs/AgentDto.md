
# AgentDto


## Properties

Name | Type
------------ | -------------
`id` | string
`organizationId` | string
`ownerUserId` | string
`name` | string
`markColor` | string
`description` | string
`goal` | string
`instructions` | string
`selfEditInstructions` | boolean
`skillRefs` | [Array&lt;SkillRefDto&gt;](SkillRefDto.md)
`knowledge` | [KnowledgeDto](KnowledgeDto.md)
`connections` | [Array&lt;ConnectionDto&gt;](ConnectionDto.md)
`tools` | { [key: string]: boolean; }
`triggers` | [Array&lt;TriggerDto&gt;](TriggerDto.md)
`playIds` | Array&lt;string&gt;
`limits` | [LimitsDto](LimitsDto.md)
`capWindow` | string
`delivery` | [DeliveryDto](DeliveryDto.md)
`status` | string
`aiManagedTriggers` | boolean
`isFavorite` | boolean
`archivedAt` | string
`version` | number
`createdAt` | string
`modifiedAt` | string
`nextRunAt` | string
`lastRunAt` | string
`pendingProposalId` | string
`greetedAt` | string
`setupCompletedAt` | string
`reopenedMerges` | number
`blocked` | [Array&lt;SettingsIssueDto&gt;](SettingsIssueDto.md)
`asksFirst` | [Array&lt;SettingsIssueDto&gt;](SettingsIssueDto.md)
`abilitiesInUse` | Array&lt;string&gt;
`playConnectionTypes` | Array&lt;string&gt;
`appBlocks` | { [key: string]: { [key: string]: string; }; }
`gaps` | [Array&lt;PlayGapDto&gt;](PlayGapDto.md)
`quickReplies` | Array&lt;string&gt;
`builtFrom` | [BuiltFromDto](BuiltFromDto.md)

## Example

```typescript
import type { AgentDto } from '@cleanlist-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "organizationId": null,
  "ownerUserId": null,
  "name": null,
  "markColor": null,
  "description": null,
  "goal": null,
  "instructions": null,
  "selfEditInstructions": null,
  "skillRefs": null,
  "knowledge": null,
  "connections": null,
  "tools": null,
  "triggers": null,
  "playIds": null,
  "limits": null,
  "capWindow": null,
  "delivery": null,
  "status": null,
  "aiManagedTriggers": null,
  "isFavorite": null,
  "archivedAt": null,
  "version": null,
  "createdAt": null,
  "modifiedAt": null,
  "nextRunAt": null,
  "lastRunAt": null,
  "pendingProposalId": null,
  "greetedAt": null,
  "setupCompletedAt": null,
  "reopenedMerges": null,
  "blocked": null,
  "asksFirst": null,
  "abilitiesInUse": null,
  "playConnectionTypes": null,
  "appBlocks": null,
  "gaps": null,
  "quickReplies": null,
  "builtFrom": null,
} satisfies AgentDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


