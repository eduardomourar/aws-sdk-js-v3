import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessType,
  Actor$,
  AddArtifact$,
  AddArtifactCommand,
  AddArtifactInput$,
  AddArtifactOutput$,
  AgentSpace$,
  AgentSpaceSummary$,
  ApplicationSummary$,
  Artifact$,
  ArtifactMetadataItem$,
  ArtifactSummary$,
  ArtifactType,
  Assets$,
  Authentication$,
  AuthenticationProviderType,
  AWSResources$,
  BatchDeletePentests$,
  BatchDeletePentestsCommand,
  BatchDeletePentestsInput$,
  BatchDeletePentestsOutput$,
  BatchGetAgentSpaces$,
  BatchGetAgentSpacesCommand,
  BatchGetAgentSpacesInput$,
  BatchGetAgentSpacesOutput$,
  BatchGetArtifactMetadata$,
  BatchGetArtifactMetadataCommand,
  BatchGetArtifactMetadataInput$,
  BatchGetArtifactMetadataOutput$,
  BatchGetFindings$,
  BatchGetFindingsCommand,
  BatchGetFindingsInput$,
  BatchGetFindingsOutput$,
  BatchGetPentestJobs$,
  BatchGetPentestJobsCommand,
  BatchGetPentestJobsInput$,
  BatchGetPentestJobsOutput$,
  BatchGetPentestJobTasks$,
  BatchGetPentestJobTasksCommand,
  BatchGetPentestJobTasksInput$,
  BatchGetPentestJobTasksOutput$,
  BatchGetPentests$,
  BatchGetPentestsCommand,
  BatchGetPentestsInput$,
  BatchGetPentestsOutput$,
  BatchGetTargetDomains$,
  BatchGetTargetDomainsCommand,
  BatchGetTargetDomainsInput$,
  BatchGetTargetDomainsOutput$,
  Category$,
  CloudWatchLog$,
  CodeRemediationStrategy,
  CodeRemediationTask$,
  CodeRemediationTaskDetails$,
  CodeRemediationTaskStatus,
  CodeReviewSettings$,
  ConfidenceLevel,
  ConflictException,
  ConflictException$,
  ContextType,
  CreateAgentSpace$,
  CreateAgentSpaceCommand,
  CreateAgentSpaceInput$,
  CreateAgentSpaceOutput$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationInput$,
  CreateIntegrationOutput$,
  CreateMembership$,
  CreateMembershipCommand,
  CreateMembershipRequest$,
  CreateMembershipResponse$,
  CreatePentest$,
  CreatePentestCommand,
  CreatePentestInput$,
  CreatePentestOutput$,
  CreateTargetDomain$,
  CreateTargetDomainCommand,
  CreateTargetDomainInput$,
  CreateTargetDomainOutput$,
  CustomHeader$,
  DeleteAgentSpace$,
  DeleteAgentSpaceCommand,
  DeleteAgentSpaceInput$,
  DeleteAgentSpaceOutput$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteArtifact$,
  DeleteArtifactCommand,
  DeleteArtifactInput$,
  DeleteArtifactOutput$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationInput$,
  DeleteIntegrationOutput$,
  DeleteMembership$,
  DeleteMembershipCommand,
  DeleteMembershipRequest$,
  DeleteMembershipResponse$,
  DeletePentestFailure$,
  DeleteTargetDomain$,
  DeleteTargetDomainCommand,
  DeleteTargetDomainInput$,
  DeleteTargetDomainOutput$,
  DiscoveredEndpoint$,
  DNSRecordType,
  DnsVerification$,
  DocumentInfo$,
  DomainVerificationMethod,
  Endpoint$,
  ErrorCode,
  ErrorInformation$,
  ExecutionContext$,
  Finding$,
  FindingStatus,
  FindingSummary$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetArtifact$,
  GetArtifactCommand,
  GetArtifactInput$,
  GetArtifactOutput$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationInput$,
  GetIntegrationOutput$,
  GitHubIntegrationInput$,
  GitHubRepositoryMetadata$,
  GitHubRepositoryResource$,
  GitHubResourceCapabilities$,
  HttpVerification$,
  IdCConfiguration$,
  InitiateProviderRegistration$,
  InitiateProviderRegistrationCommand,
  InitiateProviderRegistrationInput$,
  InitiateProviderRegistrationOutput$,
  IntegratedRepository$,
  IntegratedResource$,
  IntegratedResourceInputItem$,
  IntegratedResourceMetadata$,
  IntegratedResourceSummary$,
  IntegrationFilter$,
  IntegrationSummary$,
  InternalServerException,
  InternalServerException$,
  JobStatus,
  ListAgentSpaces$,
  ListAgentSpacesCommand,
  ListAgentSpacesInput$,
  ListAgentSpacesOutput$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListArtifacts$,
  ListArtifactsCommand,
  ListArtifactsInput$,
  ListArtifactsOutput$,
  ListDiscoveredEndpoints$,
  ListDiscoveredEndpointsCommand,
  ListDiscoveredEndpointsInput$,
  ListDiscoveredEndpointsOutput$,
  ListFindings$,
  ListFindingsCommand,
  ListFindingsInput$,
  ListFindingsOutput$,
  ListIntegratedResources$,
  ListIntegratedResourcesCommand,
  ListIntegratedResourcesInput$,
  ListIntegratedResourcesOutput$,
  ListIntegrations$,
  ListIntegrationsCommand,
  ListIntegrationsInput$,
  ListIntegrationsOutput$,
  ListMemberships$,
  ListMembershipsCommand,
  ListMembershipsRequest$,
  ListMembershipsResponse$,
  ListPentestJobsForPentest$,
  ListPentestJobsForPentestCommand,
  ListPentestJobsForPentestInput$,
  ListPentestJobsForPentestOutput$,
  ListPentestJobTasks$,
  ListPentestJobTasksCommand,
  ListPentestJobTasksInput$,
  ListPentestJobTasksOutput$,
  ListPentests$,
  ListPentestsCommand,
  ListPentestsInput$,
  ListPentestsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTargetDomains$,
  ListTargetDomainsCommand,
  ListTargetDomainsInput$,
  ListTargetDomainsOutput$,
  LogLocation$,
  LogType,
  MemberMetadata$,
  MembershipConfig$,
  MembershipSummary$,
  MembershipType,
  MembershipTypeFilter,
  NetworkTrafficConfig$,
  NetworkTrafficRule$,
  NetworkTrafficRuleEffect,
  NetworkTrafficRuleType,
  paginateListAgentSpaces,
  paginateListApplications,
  paginateListArtifacts,
  paginateListDiscoveredEndpoints,
  paginateListFindings,
  paginateListIntegratedResources,
  paginateListIntegrations,
  paginateListMemberships,
  paginateListPentestJobsForPentest,
  paginateListPentestJobTasks,
  paginateListPentests,
  paginateListTargetDomains,
  Pentest$,
  PentestJob$,
  PentestJobSummary$,
  PentestSummary$,
  Provider,
  ProviderInput$,
  ProviderResourceCapabilities$,
  ProviderType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RiskLevel,
  RiskType,
  SecurityAgent,
  SecurityAgentClient,
  SecurityAgentServiceException,
  SourceCodeRepository$,
  StartCodeRemediation$,
  StartCodeRemediationCommand,
  StartCodeRemediationInput$,
  StartCodeRemediationOutput$,
  StartPentestJob$,
  StartPentestJobCommand,
  StartPentestJobInput$,
  StartPentestJobOutput$,
  Step$,
  StepName,
  StepStatus,
  StopPentestJob$,
  StopPentestJobCommand,
  StopPentestJobInput$,
  StopPentestJobOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TargetDomain$,
  TargetDomainStatus,
  TargetDomainSummary$,
  Task$,
  TaskExecutionStatus,
  TaskSummary$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateAgentSpace$,
  UpdateAgentSpaceCommand,
  UpdateAgentSpaceInput$,
  UpdateAgentSpaceOutput$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateFinding$,
  UpdateFindingCommand,
  UpdateFindingInput$,
  UpdateFindingOutput$,
  UpdateIntegratedResources$,
  UpdateIntegratedResourcesCommand,
  UpdateIntegratedResourcesInput$,
  UpdateIntegratedResourcesOutput$,
  UpdatePentest$,
  UpdatePentestCommand,
  UpdatePentestInput$,
  UpdatePentestOutput$,
  UpdateTargetDomain$,
  UpdateTargetDomainCommand,
  UpdateTargetDomainInput$,
  UpdateTargetDomainOutput$,
  UserConfig$,
  UserMetadata$,
  UserRole,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  VerificationDetails$,
  VerifyTargetDomain$,
  VerifyTargetDomainCommand,
  VerifyTargetDomainInput$,
  VerifyTargetDomainOutput$,
  VpcConfig$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityAgentClient === "function");
assert(typeof SecurityAgent === "function");
// commands
assert(typeof AddArtifactCommand === "function");
assert(typeof AddArtifact$ === "object");
assert(typeof BatchDeletePentestsCommand === "function");
assert(typeof BatchDeletePentests$ === "object");
assert(typeof BatchGetAgentSpacesCommand === "function");
assert(typeof BatchGetAgentSpaces$ === "object");
assert(typeof BatchGetArtifactMetadataCommand === "function");
assert(typeof BatchGetArtifactMetadata$ === "object");
assert(typeof BatchGetFindingsCommand === "function");
assert(typeof BatchGetFindings$ === "object");
assert(typeof BatchGetPentestJobsCommand === "function");
assert(typeof BatchGetPentestJobs$ === "object");
assert(typeof BatchGetPentestJobTasksCommand === "function");
assert(typeof BatchGetPentestJobTasks$ === "object");
assert(typeof BatchGetPentestsCommand === "function");
assert(typeof BatchGetPentests$ === "object");
assert(typeof BatchGetTargetDomainsCommand === "function");
assert(typeof BatchGetTargetDomains$ === "object");
assert(typeof CreateAgentSpaceCommand === "function");
assert(typeof CreateAgentSpace$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof CreateMembershipCommand === "function");
assert(typeof CreateMembership$ === "object");
assert(typeof CreatePentestCommand === "function");
assert(typeof CreatePentest$ === "object");
assert(typeof CreateTargetDomainCommand === "function");
assert(typeof CreateTargetDomain$ === "object");
assert(typeof DeleteAgentSpaceCommand === "function");
assert(typeof DeleteAgentSpace$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteArtifactCommand === "function");
assert(typeof DeleteArtifact$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteMembershipCommand === "function");
assert(typeof DeleteMembership$ === "object");
assert(typeof DeleteTargetDomainCommand === "function");
assert(typeof DeleteTargetDomain$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetArtifactCommand === "function");
assert(typeof GetArtifact$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof InitiateProviderRegistrationCommand === "function");
assert(typeof InitiateProviderRegistration$ === "object");
assert(typeof ListAgentSpacesCommand === "function");
assert(typeof ListAgentSpaces$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListArtifactsCommand === "function");
assert(typeof ListArtifacts$ === "object");
assert(typeof ListDiscoveredEndpointsCommand === "function");
assert(typeof ListDiscoveredEndpoints$ === "object");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindings$ === "object");
assert(typeof ListIntegratedResourcesCommand === "function");
assert(typeof ListIntegratedResources$ === "object");
assert(typeof ListIntegrationsCommand === "function");
assert(typeof ListIntegrations$ === "object");
assert(typeof ListMembershipsCommand === "function");
assert(typeof ListMemberships$ === "object");
assert(typeof ListPentestJobsForPentestCommand === "function");
assert(typeof ListPentestJobsForPentest$ === "object");
assert(typeof ListPentestJobTasksCommand === "function");
assert(typeof ListPentestJobTasks$ === "object");
assert(typeof ListPentestsCommand === "function");
assert(typeof ListPentests$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetDomainsCommand === "function");
assert(typeof ListTargetDomains$ === "object");
assert(typeof StartCodeRemediationCommand === "function");
assert(typeof StartCodeRemediation$ === "object");
assert(typeof StartPentestJobCommand === "function");
assert(typeof StartPentestJob$ === "object");
assert(typeof StopPentestJobCommand === "function");
assert(typeof StopPentestJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentSpaceCommand === "function");
assert(typeof UpdateAgentSpace$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateFindingCommand === "function");
assert(typeof UpdateFinding$ === "object");
assert(typeof UpdateIntegratedResourcesCommand === "function");
assert(typeof UpdateIntegratedResources$ === "object");
assert(typeof UpdatePentestCommand === "function");
assert(typeof UpdatePentest$ === "object");
assert(typeof UpdateTargetDomainCommand === "function");
assert(typeof UpdateTargetDomain$ === "object");
assert(typeof VerifyTargetDomainCommand === "function");
assert(typeof VerifyTargetDomain$ === "object");
// structural schemas
assert(typeof Actor$ === "object");
assert(typeof AddArtifactInput$ === "object");
assert(typeof AddArtifactOutput$ === "object");
assert(typeof AgentSpace$ === "object");
assert(typeof AgentSpaceSummary$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof Artifact$ === "object");
assert(typeof ArtifactMetadataItem$ === "object");
assert(typeof ArtifactSummary$ === "object");
assert(typeof Assets$ === "object");
assert(typeof Authentication$ === "object");
assert(typeof AWSResources$ === "object");
assert(typeof BatchDeletePentestsInput$ === "object");
assert(typeof BatchDeletePentestsOutput$ === "object");
assert(typeof BatchGetAgentSpacesInput$ === "object");
assert(typeof BatchGetAgentSpacesOutput$ === "object");
assert(typeof BatchGetArtifactMetadataInput$ === "object");
assert(typeof BatchGetArtifactMetadataOutput$ === "object");
assert(typeof BatchGetFindingsInput$ === "object");
assert(typeof BatchGetFindingsOutput$ === "object");
assert(typeof BatchGetPentestJobsInput$ === "object");
assert(typeof BatchGetPentestJobsOutput$ === "object");
assert(typeof BatchGetPentestJobTasksInput$ === "object");
assert(typeof BatchGetPentestJobTasksOutput$ === "object");
assert(typeof BatchGetPentestsInput$ === "object");
assert(typeof BatchGetPentestsOutput$ === "object");
assert(typeof BatchGetTargetDomainsInput$ === "object");
assert(typeof BatchGetTargetDomainsOutput$ === "object");
assert(typeof Category$ === "object");
assert(typeof CloudWatchLog$ === "object");
assert(typeof CodeRemediationTask$ === "object");
assert(typeof CodeRemediationTaskDetails$ === "object");
assert(typeof CodeReviewSettings$ === "object");
assert(typeof CreateAgentSpaceInput$ === "object");
assert(typeof CreateAgentSpaceOutput$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateIntegrationInput$ === "object");
assert(typeof CreateIntegrationOutput$ === "object");
assert(typeof CreateMembershipRequest$ === "object");
assert(typeof CreateMembershipResponse$ === "object");
assert(typeof CreatePentestInput$ === "object");
assert(typeof CreatePentestOutput$ === "object");
assert(typeof CreateTargetDomainInput$ === "object");
assert(typeof CreateTargetDomainOutput$ === "object");
assert(typeof CustomHeader$ === "object");
assert(typeof DeleteAgentSpaceInput$ === "object");
assert(typeof DeleteAgentSpaceOutput$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteArtifactInput$ === "object");
assert(typeof DeleteArtifactOutput$ === "object");
assert(typeof DeleteIntegrationInput$ === "object");
assert(typeof DeleteIntegrationOutput$ === "object");
assert(typeof DeleteMembershipRequest$ === "object");
assert(typeof DeleteMembershipResponse$ === "object");
assert(typeof DeletePentestFailure$ === "object");
assert(typeof DeleteTargetDomainInput$ === "object");
assert(typeof DeleteTargetDomainOutput$ === "object");
assert(typeof DiscoveredEndpoint$ === "object");
assert(typeof DnsVerification$ === "object");
assert(typeof DocumentInfo$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof ErrorInformation$ === "object");
assert(typeof ExecutionContext$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingSummary$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetArtifactInput$ === "object");
assert(typeof GetArtifactOutput$ === "object");
assert(typeof GetIntegrationInput$ === "object");
assert(typeof GetIntegrationOutput$ === "object");
assert(typeof GitHubIntegrationInput$ === "object");
assert(typeof GitHubRepositoryMetadata$ === "object");
assert(typeof GitHubRepositoryResource$ === "object");
assert(typeof GitHubResourceCapabilities$ === "object");
assert(typeof HttpVerification$ === "object");
assert(typeof IdCConfiguration$ === "object");
assert(typeof InitiateProviderRegistrationInput$ === "object");
assert(typeof InitiateProviderRegistrationOutput$ === "object");
assert(typeof IntegratedRepository$ === "object");
assert(typeof IntegratedResource$ === "object");
assert(typeof IntegratedResourceInputItem$ === "object");
assert(typeof IntegratedResourceMetadata$ === "object");
assert(typeof IntegratedResourceSummary$ === "object");
assert(typeof IntegrationFilter$ === "object");
assert(typeof IntegrationSummary$ === "object");
assert(typeof ListAgentSpacesInput$ === "object");
assert(typeof ListAgentSpacesOutput$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListArtifactsInput$ === "object");
assert(typeof ListArtifactsOutput$ === "object");
assert(typeof ListDiscoveredEndpointsInput$ === "object");
assert(typeof ListDiscoveredEndpointsOutput$ === "object");
assert(typeof ListFindingsInput$ === "object");
assert(typeof ListFindingsOutput$ === "object");
assert(typeof ListIntegratedResourcesInput$ === "object");
assert(typeof ListIntegratedResourcesOutput$ === "object");
assert(typeof ListIntegrationsInput$ === "object");
assert(typeof ListIntegrationsOutput$ === "object");
assert(typeof ListMembershipsRequest$ === "object");
assert(typeof ListMembershipsResponse$ === "object");
assert(typeof ListPentestJobsForPentestInput$ === "object");
assert(typeof ListPentestJobsForPentestOutput$ === "object");
assert(typeof ListPentestJobTasksInput$ === "object");
assert(typeof ListPentestJobTasksOutput$ === "object");
assert(typeof ListPentestsInput$ === "object");
assert(typeof ListPentestsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTargetDomainsInput$ === "object");
assert(typeof ListTargetDomainsOutput$ === "object");
assert(typeof LogLocation$ === "object");
assert(typeof MemberMetadata$ === "object");
assert(typeof MembershipConfig$ === "object");
assert(typeof MembershipSummary$ === "object");
assert(typeof NetworkTrafficConfig$ === "object");
assert(typeof NetworkTrafficRule$ === "object");
assert(typeof Pentest$ === "object");
assert(typeof PentestJob$ === "object");
assert(typeof PentestJobSummary$ === "object");
assert(typeof PentestSummary$ === "object");
assert(typeof ProviderInput$ === "object");
assert(typeof ProviderResourceCapabilities$ === "object");
assert(typeof SourceCodeRepository$ === "object");
assert(typeof StartCodeRemediationInput$ === "object");
assert(typeof StartCodeRemediationOutput$ === "object");
assert(typeof StartPentestJobInput$ === "object");
assert(typeof StartPentestJobOutput$ === "object");
assert(typeof Step$ === "object");
assert(typeof StopPentestJobInput$ === "object");
assert(typeof StopPentestJobOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TargetDomain$ === "object");
assert(typeof TargetDomainSummary$ === "object");
assert(typeof Task$ === "object");
assert(typeof TaskSummary$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateAgentSpaceInput$ === "object");
assert(typeof UpdateAgentSpaceOutput$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateFindingInput$ === "object");
assert(typeof UpdateFindingOutput$ === "object");
assert(typeof UpdateIntegratedResourcesInput$ === "object");
assert(typeof UpdateIntegratedResourcesOutput$ === "object");
assert(typeof UpdatePentestInput$ === "object");
assert(typeof UpdatePentestOutput$ === "object");
assert(typeof UpdateTargetDomainInput$ === "object");
assert(typeof UpdateTargetDomainOutput$ === "object");
assert(typeof UserConfig$ === "object");
assert(typeof UserMetadata$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VerificationDetails$ === "object");
assert(typeof VerifyTargetDomainInput$ === "object");
assert(typeof VerifyTargetDomainOutput$ === "object");
assert(typeof VpcConfig$ === "object");
// enums
assert(typeof AccessType === "object");
assert(typeof ArtifactType === "object");
assert(typeof AuthenticationProviderType === "object");
assert(typeof CodeRemediationStrategy === "object");
assert(typeof CodeRemediationTaskStatus === "object");
assert(typeof ConfidenceLevel === "object");
assert(typeof ContextType === "object");
assert(typeof DNSRecordType === "object");
assert(typeof DomainVerificationMethod === "object");
assert(typeof ErrorCode === "object");
assert(typeof FindingStatus === "object");
assert(typeof JobStatus === "object");
assert(typeof LogType === "object");
assert(typeof MembershipType === "object");
assert(typeof MembershipTypeFilter === "object");
assert(typeof NetworkTrafficRuleEffect === "object");
assert(typeof NetworkTrafficRuleType === "object");
assert(typeof Provider === "object");
assert(typeof ProviderType === "object");
assert(typeof ResourceType === "object");
assert(typeof RiskLevel === "object");
assert(typeof RiskType === "object");
assert(typeof StepName === "object");
assert(typeof StepStatus === "object");
assert(typeof TargetDomainStatus === "object");
assert(typeof TaskExecutionStatus === "object");
assert(typeof UserRole === "object");
// errors
assert(AccessDeniedException.prototype instanceof SecurityAgentServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SecurityAgentServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SecurityAgentServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SecurityAgentServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof SecurityAgentServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SecurityAgentServiceException);
assert(typeof ValidationException$ === "object");
assert(SecurityAgentServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAgentSpaces === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListArtifacts === "function");
assert(typeof paginateListDiscoveredEndpoints === "function");
assert(typeof paginateListFindings === "function");
assert(typeof paginateListIntegratedResources === "function");
assert(typeof paginateListIntegrations === "function");
assert(typeof paginateListMemberships === "function");
assert(typeof paginateListPentestJobTasks === "function");
assert(typeof paginateListPentestJobsForPentest === "function");
assert(typeof paginateListPentests === "function");
assert(typeof paginateListTargetDomains === "function");
console.log(`SecurityAgent index test passed.`);
