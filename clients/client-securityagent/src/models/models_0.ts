// smithy-typescript generated code
import type {
  AccessType,
  ArtifactType,
  AuthenticationProviderType,
  CodeRemediationStrategy,
  CodeRemediationTaskStatus,
  ConfidenceLevel,
  ContextType,
  DNSRecordType,
  DomainVerificationMethod,
  ErrorCode,
  FindingStatus,
  JobStatus,
  LogType,
  MembershipType,
  MembershipTypeFilter,
  NetworkTrafficRuleEffect,
  NetworkTrafficRuleType,
  Provider,
  ProviderType,
  ResourceType,
  RiskLevel,
  RiskType,
  StepName,
  StepStatus,
  TargetDomainStatus,
  TaskExecutionStatus,
  UserRole,
} from "./enums";

/**
 * Authentication information used to access protected resources
 * @public
 */
export interface Authentication {
  /**
   * Provider type for the authentication credentials
   * @public
   */
  providerType?: AuthenticationProviderType | undefined;

  /**
   * Authentication credential value or reference
   * @public
   */
  value?: string | undefined;
}

/**
 * Represents an entity that interacts with the system during security testing
 * @public
 */
export interface Actor {
  /**
   * Unique identifier for the actor (case-insensitive)
   * @public
   */
  identifier?: string | undefined;

  /**
   * List of URIs accessible with the actor's credentials
   * @public
   */
  uris?: string[] | undefined;

  /**
   * Authentication information used by the actor to access resources
   * @public
   */
  authentication?: Authentication | undefined;

  /**
   * Additional description or details about the actor
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AddArtifactInput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Binary content of the artifact
   * @public
   */
  artifactContent: Uint8Array | undefined;

  /**
   * Type of the artifact file
   * @public
   */
  artifactType: ArtifactType | undefined;

  /**
   * Name of the artifact file
   * @public
   */
  fileName: string | undefined;
}

/**
 * @public
 */
export interface AddArtifactOutput {
  /**
   * Unique identifier of the created artifact
   * @public
   */
  artifactId: string | undefined;
}

/**
 * Describes one specific validation failure for an input member.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   * @public
   */
  message: string | undefined;
}

/**
 * Customer VPC configuration that the Security Agent accesses
 * @public
 */
export interface VpcConfig {
  /**
   * ARN or ID of the customer VPC
   * @public
   */
  vpcArn?: string | undefined;

  /**
   * List of security group ARNs or IDs in the customer VPC
   * @public
   */
  securityGroupArns?: string[] | undefined;

  /**
   * List of subnet ARNs or IDs in the customer VPC
   * @public
   */
  subnetArns?: string[] | undefined;
}

/**
 * AWS resource configurations associated with the agent space
 * @public
 */
export interface AWSResources {
  /**
   * VPC configurations that the Security Agent accesses in the customer environment
   * @public
   */
  vpcs?: VpcConfig[] | undefined;

  /**
   * CloudWatch log group ARNs or names used to store Security Agent logs
   * @public
   */
  logGroups?: string[] | undefined;

  /**
   * S3 bucket ARNs or names used to store Security Agent artifacts
   * @public
   */
  s3Buckets?: string[] | undefined;

  /**
   * SecretsManager secret ARNs or names used to store tester credentials for pentests
   * @public
   */
  secretArns?: string[] | undefined;

  /**
   * Lambda function ARNs or names used to retrieve tester credentials for pentests
   * @public
   */
  lambdaFunctionArns?: string[] | undefined;

  /**
   * IAM role ARNs that the Security Agent can assume to access customer resources
   * @public
   */
  iamRoles?: string[] | undefined;
}

/**
 * Details of code review settings
 * @public
 */
export interface CodeReviewSettings {
  /**
   * Whether Controls are utilized for code review analysis
   * @public
   */
  controlsScanning: boolean | undefined;

  /**
   * Whether general purpose analysis is performed for code review
   * @public
   */
  generalPurposeScanning: boolean | undefined;
}

/**
 * Agent space structure
 * @public
 */
export interface AgentSpace {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Name of the agent space
   * @public
   */
  name: string | undefined;

  /**
   * Description of the agent space
   * @public
   */
  description?: string | undefined;

  /**
   * AWS resource configurations
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * List of target domain IDs registered with the agent space
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * Configuration for code review analysis, including controls scanning and general purpose scanning settings
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * Identifier of the KMS key used to encrypt data. Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Timestamp when the agent space was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the agent space was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Input for batch retrieving agent spaces
 * @public
 */
export interface BatchGetAgentSpacesInput {
  /**
   * List of agent space IDs to retrieve
   * @public
   */
  agentSpaceIds: string[] | undefined;
}

/**
 * Output for the BatchGetAgentSpaces operation
 * @public
 */
export interface BatchGetAgentSpacesOutput {
  /**
   * List of agent spaces that were successfully retrieved
   * @public
   */
  agentSpaces?: AgentSpace[] | undefined;

  /**
   * List of agent space IDs that could not be found
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for creating a new agent space
 * @public
 */
export interface CreateAgentSpaceInput {
  /**
   * Name of the agent space
   * @public
   */
  name: string | undefined;

  /**
   * Description of the agent space
   * @public
   */
  description?: string | undefined;

  /**
   * AWS resource configurations associated with the agent space
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * Target domain IDs to associate with the agent space
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * Configuration for code review analysis, including controls scanning and general purpose scanning settings
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * Identifier of the KMS key used to encrypt data. Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Tags to associate with the agent space
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Output for the CreateAgentSpace operation
 * @public
 */
export interface CreateAgentSpaceOutput {
  /**
   * Unique identifier of the created agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Name of the created agent space
   * @public
   */
  name: string | undefined;

  /**
   * Description of the created agent space
   * @public
   */
  description?: string | undefined;

  /**
   * AWS resource configurations associated with the agent space
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * List of target domain IDs registered with the agent space
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * Configuration for code review analysis, including controls scanning and general purpose scanning settings
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * Identifier of the KMS key used to encrypt data. Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Timestamp when the agent space was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the agent space was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Input for deleting an agent space
 * @public
 */
export interface DeleteAgentSpaceInput {
  /**
   * Unique identifier of the agent space to delete
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Output for the DeleteAgentSpace operation
 * @public
 */
export interface DeleteAgentSpaceOutput {
  /**
   * Unique identifier of the deleted agent space
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for listing agent spaces
 * @public
 */
export interface ListAgentSpacesInput {
  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of agent spaces to return
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information for an agent space
 * @public
 */
export interface AgentSpaceSummary {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Name of the agent space
   * @public
   */
  name: string | undefined;

  /**
   * Timestamp when the agent space was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the agent space was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListAgentSpaces operation
 * @public
 */
export interface ListAgentSpacesOutput {
  /**
   * List of agent space summaries
   * @public
   */
  agentSpaceSummaries?: AgentSpaceSummary[] | undefined;

  /**
   * Token for next page of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for updating an agent space
 * @public
 */
export interface UpdateAgentSpaceInput {
  /**
   * ID of the agent space to update
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Name of the agent space
   * @public
   */
  name?: string | undefined;

  /**
   * Description of the agent space
   * @public
   */
  description?: string | undefined;

  /**
   * AWS resource configurations associated with the agent space
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * Target domain IDs to associate with the agent space
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * Configuration for code review analysis, including controls scanning and general purpose scanning settings
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;
}

/**
 * Output for the UpdateAgentSpace operation
 * @public
 */
export interface UpdateAgentSpaceOutput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Name of the agent space
   * @public
   */
  name: string | undefined;

  /**
   * Description of the agent space
   * @public
   */
  description?: string | undefined;

  /**
   * AWS resource configurations associated with the agent space
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * List of target domain IDs registered with the agent space
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * Configuration for code review analysis, including controls scanning and general purpose scanning settings
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * Timestamp when the agent space was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the agent space was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * ARN of the IAM Identity Center instance used for user authentication. Optional for non-IdC applications
   * @public
   */
  idcInstanceArn?: string | undefined;

  /**
   * ARN of the IAM role that the application uses to access AWS resources on your behalf
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Default KMS key identifier used to encrypt application data
   * @public
   */
  defaultKmsKeyId?: string | undefined;

  /**
   * Tags to associate with the application
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * Application ID
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * Application ID
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * Application ID
   * @public
   */
  applicationId: string | undefined;
}

/**
 * IdC configuration containing application and instance ARNs
 * @public
 */
export interface IdCConfiguration {
  /**
   * ARN of the IAM Identity Center application associated with this application
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * ARN of the IAM Identity Center instance used for user authentication
   * @public
   */
  idcInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * Application ID
   * @public
   */
  applicationId: string | undefined;

  /**
   * Domain where the application is available
   * @public
   */
  domain: string | undefined;

  /**
   * Name of the application, automatically assigned by the service
   * @public
   */
  applicationName?: string | undefined;

  /**
   * IAM Identity Center configuration for the application
   * @public
   */
  idcConfiguration?: IdCConfiguration | undefined;

  /**
   * ARN of the IAM role that the application uses to access AWS resources on your behalf
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Default KMS key identifier used to encrypt application data
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Application summary for list operations
 * @public
 */
export interface ApplicationSummary {
  /**
   * Unique identifier of the application
   * @public
   */
  applicationId: string | undefined;

  /**
   * Name of the application, automatically assigned by the service
   * @public
   */
  applicationName: string | undefined;

  /**
   * Domain where the application is available
   * @public
   */
  domain: string | undefined;

  /**
   * Default KMS key identifier used to encrypt application data
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * List of application summaries
   * @public
   */
  applicationSummaries: ApplicationSummary[] | undefined;

  /**
   * Token for next page of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * Application ID
   * @public
   */
  applicationId: string | undefined;

  /**
   * ARN of the IAM role that the application uses to access AWS resources on your behalf
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Default KMS key identifier. Use an empty string to remove the default KMS key.
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * Application ID
   * @public
   */
  applicationId: string | undefined;
}

/**
 * Files containing relevant data for review
 * @public
 */
export interface Artifact {
  /**
   * The content of the artifact
   * @public
   */
  contents: string | undefined;

  /**
   * The file type of the artifact
   * @public
   */
  type: ArtifactType | undefined;
}

/**
 * Metadata in relation to the artifact
 * @public
 */
export interface ArtifactMetadataItem {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Unique identifier of the artifact
   * @public
   */
  artifactId: string | undefined;

  /**
   * Name of the artifact file
   * @public
   */
  fileName: string | undefined;

  /**
   * Timestamp when the artifact was last updated
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Summary information about an artifact
 * @public
 */
export interface ArtifactSummary {
  /**
   * Unique identifier of the artifact
   * @public
   */
  artifactId: string | undefined;

  /**
   * Name of the artifact file
   * @public
   */
  fileName: string | undefined;

  /**
   * Type of the artifact file
   * @public
   */
  artifactType: ArtifactType | undefined;
}

/**
 * Information about a document relevant to security testing
 * @public
 */
export interface DocumentInfo {
  /**
   * S3 storage location of the document
   * @public
   */
  s3Location?: string | undefined;

  /**
   * Artifact ID of the document
   * @public
   */
  artifactId?: string | undefined;
}

/**
 * Represents a web application endpoint to be tested
 * @public
 */
export interface Endpoint {
  /**
   * URI of the endpoint to test
   * @public
   */
  uri?: string | undefined;
}

/**
 * Information about an integrated repository
 * @public
 */
export interface IntegratedRepository {
  /**
   * Integration identifier
   * @public
   */
  integrationId: string | undefined;

  /**
   * External provider resource identifier, e.g., Github repository identifier
   * @public
   */
  providerResourceId: string | undefined;
}

/**
 * Information about a source code repository for static analysis
 * @public
 */
export interface SourceCodeRepository {
  /**
   * S3 storage location of the repository
   * @public
   */
  s3Location?: string | undefined;
}

/**
 * Collection of assets to be tested or used during a pentest
 * @public
 */
export interface Assets {
  /**
   * List of web application endpoints to test
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * List of actors that interact with the system
   * @public
   */
  actors?: Actor[] | undefined;

  /**
   * List of documents providing context for testing
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * List of source code repositories for static analysis
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * List of integrated code repositories
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;
}

/**
 * Input for deleting multiple pentests
 * @public
 */
export interface BatchDeletePentestsInput {
  /**
   * List of pentest IDs to delete
   * @public
   */
  pentestIds: string[] | undefined;

  /**
   * ID of the agent space where the pentests exist
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Reference to logs stored in CloudWatch
 * @public
 */
export interface CloudWatchLog {
  /**
   * Name of the CloudWatch log group
   * @public
   */
  logGroup?: string | undefined;

  /**
   * Name of the CloudWatch log stream
   * @public
   */
  logStream?: string | undefined;
}

/**
 * Custom headers to be set for network requests
 * @public
 */
export interface CustomHeader {
  /**
   * Name of header to set value for
   * @public
   */
  name?: string | undefined;

  /**
   * Value to set for header
   * @public
   */
  value?: string | undefined;
}

/**
 * Network traffic filtering rule
 * @public
 */
export interface NetworkTrafficRule {
  /**
   * Action to take when the rule matches
   * @public
   */
  effect?: NetworkTrafficRuleEffect | undefined;

  /**
   * Pattern to match against
   * @public
   */
  pattern?: string | undefined;

  /**
   * Type of network traffic rule
   * @public
   */
  networkTrafficRuleType?: NetworkTrafficRuleType | undefined;
}

/**
 * Configuration for network traffic filtering
 * @public
 */
export interface NetworkTrafficConfig {
  /**
   * Traffic filtering rules
   * @public
   */
  rules?: NetworkTrafficRule[] | undefined;

  /**
   * Custom headers for requests
   * @public
   */
  customHeaders?: CustomHeader[] | undefined;
}

/**
 * Represents a pentest configuration and execution details
 * @public
 */
export interface Pentest {
  /**
   * Unique identifier for the pentest
   * @public
   */
  pentestId: string | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Title or name of the pentest
   * @public
   */
  title: string | undefined;

  /**
   * Collection of assets to be tested or used during the pentest
   * @public
   */
  assets: Assets | undefined;

  /**
   * A list of risk types excluded from the pentest execution
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * Service role ARN for accessing customer resources
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * CloudWatch log group and stream prefix where pentest execution logs are stored
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * VPC configuration that the Security Agent accesses
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Configuration for network traffic filtering
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * Strategy for code remediation on findings
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * Timestamp when the pentest was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the pentest was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Information about a failed pentest deletion attempt
 * @public
 */
export interface DeletePentestFailure {
  /**
   * Identifier of the pentest that failed to delete
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Reason for the deletion failure
   * @public
   */
  reason?: string | undefined;
}

/**
 * Output for the BatchDeletePentests operation
 * @public
 */
export interface BatchDeletePentestsOutput {
  /**
   * List of successfully deleted pentests
   * @public
   */
  deleted?: Pentest[] | undefined;

  /**
   * List of pentests that could not be deleted and the reasons for failure
   * @public
   */
  failed?: DeletePentestFailure[] | undefined;
}

/**
 * @public
 */
export interface BatchGetArtifactMetadataInput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * List of artifact identifiers
   * @public
   */
  artifactIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetArtifactMetadataOutput {
  /**
   * List of artifact metadata
   * @public
   */
  artifactMetadataList: ArtifactMetadataItem[] | undefined;
}

/**
 * Input for BatchGetFindings operation
 * @public
 */
export interface BatchGetFindingsInput {
  /**
   * List of finding IDs to retrieve
   * @public
   */
  findingIds: string[] | undefined;

  /**
   * ID of the agent space where the findings exist
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Code remediation details for a single repository
 * @public
 */
export interface CodeRemediationTaskDetails {
  /**
   * Name of the repository
   * @public
   */
  repoName?: string | undefined;

  /**
   * Link to the code diff for the remediation
   * @public
   */
  codeDiffLink?: string | undefined;

  /**
   * Link to the pull request for the remediation
   * @public
   */
  pullRequestLink?: string | undefined;
}

/**
 * Information about task for code remediation
 * @public
 */
export interface CodeRemediationTask {
  /**
   * Current status of the code remediation task
   * @public
   */
  status: CodeRemediationTaskStatus | undefined;

  /**
   * Reason for the current code remediation task status
   * @public
   */
  statusReason?: string | undefined;

  /**
   * Details of the code remediation for each repository
   * @public
   */
  taskDetails?: CodeRemediationTaskDetails[] | undefined;
}

/**
 * Represents a security vulnerability or issue discovered during testing
 * @public
 */
export interface Finding {
  /**
   * Unique identifier for the finding
   * @public
   */
  findingId: string | undefined;

  /**
   * Identifier of the agent space that created this finding
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Identifier of the parent pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Identifier of the pentest job
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * Identifier of the associated task
   * @public
   */
  taskId?: string | undefined;

  /**
   * Name or title of the finding
   * @public
   */
  name?: string | undefined;

  /**
   * Detailed description of the security vulnerability
   * @public
   */
  description?: string | undefined;

  /**
   * Current status of the finding
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * Type of security risk identified
   * @public
   */
  riskType?: string | undefined;

  /**
   * Severity level of the identified risk
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * Risk score associated with the finding
   * @public
   */
  riskScore?: string | undefined;

  /**
   * Justification for the assigned risk score
   * @public
   */
  reasoning?: string | undefined;

  /**
   * Confidence level of the finding
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * Proof-of-concept code demonstrating the vulnerability
   * @public
   */
  attackScript?: string | undefined;

  /**
   * Code remediation task associated with this finding
   * @public
   */
  codeRemediationTask?: CodeRemediationTask | undefined;

  /**
   * Identifier of the task or agent that last updated this finding
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * Timestamp when the finding was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the finding was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetFindings operation
 * @public
 */
export interface BatchGetFindingsOutput {
  /**
   * List of successfully retrieved findings
   * @public
   */
  findings?: Finding[] | undefined;

  /**
   * List of finding IDs that could not be found
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for BatchGetPentestJobs operation
 * @public
 */
export interface BatchGetPentestJobsInput {
  /**
   * List of pentest job IDs to retrieve
   * @public
   */
  pentestJobIds: string[] | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Error information regarding the pentest job
 * @public
 */
export interface ErrorInformation {
  /**
   * Pentest job failure error code
   * @public
   */
  code?: ErrorCode | undefined;

  /**
   * Pentest job failure error message
   * @public
   */
  message?: string | undefined;
}

/**
 * Additional context about a pentest or task execution
 * @public
 */
export interface ExecutionContext {
  /**
   * The category of context
   * @public
   */
  contextType?: ContextType | undefined;

  /**
   * Context associated with a pentest or task execution
   * @public
   */
  context?: string | undefined;

  /**
   * Timestamp associated with a pentest or task execution
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * Represents a single step in pentest job execution
 * @public
 */
export interface Step {
  /**
   * Name of the execution step
   * @public
   */
  name?: StepName | undefined;

  /**
   * Current status of the step
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * Timestamp when the step was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the step was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Represents a pentest job
 * @public
 */
export interface PentestJob {
  /**
   * Unique identifier of the pentest job
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * Identifier of the parent pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Title or name of the pentest
   * @public
   */
  title?: string | undefined;

  /**
   * Overview or description of the pentest job
   * @public
   */
  overview?: string | undefined;

  /**
   * Current status of the pentest job
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * List of web application endpoints to test
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * List of actors that interact with the system
   * @public
   */
  actors?: Actor[] | undefined;

  /**
   * List of documents providing context for testing
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * List of source code repositories for static analysis
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * List of URL paths to exclude from testing
   * @public
   */
  excludePaths?: Endpoint[] | undefined;

  /**
   * List of allowed domains for network access
   * @public
   */
  allowedDomains?: Endpoint[] | undefined;

  /**
   * A list of risk types excluded from the pentest job
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * List of execution steps for the pentest job
   * @public
   */
  steps?: Step[] | undefined;

  /**
   * A list of execution context messages associated with the pentest job
   * @public
   */
  executionContext?: ExecutionContext[] | undefined;

  /**
   * Service role ARN for accessing customer resources
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * CloudWatch log group and stream prefix where pentest job logs are stored
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * VPC configuration that the Security Agent accesses
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Configuration for network traffic filtering
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * Error information regarding the pentest job
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * List of integrated code repositories
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;

  /**
   * Strategy for code remediation on findings
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * Timestamp when the pentest job was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the pentest job was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetPentestJobs operation
 * @public
 */
export interface BatchGetPentestJobsOutput {
  /**
   * List of successfully retrieved pentest jobs
   * @public
   */
  pentestJobs?: PentestJob[] | undefined;

  /**
   * List of pentest job IDs that could not be found
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple tasks by their IDs for a pentest job
 * @public
 */
export interface BatchGetPentestJobTasksInput {
  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * List of task IDs to retrieve
   * @public
   */
  taskIds: string[] | undefined;
}

/**
 * Represents a category classification for tasks
 * @public
 */
export interface Category {
  /**
   * Name of the category
   * @public
   */
  name?: string | undefined;

  /**
   * Whether this is the primary category for the task
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * Location information for execution logs
 * @public
 */
export interface LogLocation {
  /**
   * Type of log storage
   * @public
   */
  logType?: LogType | undefined;

  /**
   * CloudWatch log information if logs are stored in CloudWatch
   * @public
   */
  cloudWatchLog?: CloudWatchLog | undefined;
}

/**
 * Represents a task within a pentest job
 * @public
 */
export interface Task {
  /**
   * Unique identifier for the task
   * @public
   */
  taskId: string | undefined;

  /**
   * Identifier of the parent pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Identifier of the pentest job this task belongs to
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * Identifier of the agent space this task belongs to
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * Title or name of the task
   * @public
   */
  title?: string | undefined;

  /**
   * Detailed description of the task's purpose and scope
   * @public
   */
  description?: string | undefined;

  /**
   * List of categories associated with this task
   * @public
   */
  categories?: Category[] | undefined;

  /**
   * Type of security risk this task is designed to test
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * Target endpoint for this security test
   * @public
   */
  targetEndpoint?: Endpoint | undefined;

  /**
   * Current status of the task execution
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * Location of execution logs for auditing and review
   * @public
   */
  logsLocation?: LogLocation | undefined;

  /**
   * Timestamp when the task was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the task was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetPentestJobTasks operation
 * @public
 */
export interface BatchGetPentestJobTasksOutput {
  /**
   * List of successfully retrieved tasks
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * List of task IDs that could not be found
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple pentests by their IDs
 * @public
 */
export interface BatchGetPentestsInput {
  /**
   * List of pentest IDs to retrieve
   * @public
   */
  pentestIds: string[] | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Output for the BatchGetPentests operation
 * @public
 */
export interface BatchGetPentestsOutput {
  /**
   * List of successfully retrieved pentests
   * @public
   */
  pentests?: Pentest[] | undefined;

  /**
   * List of pentest IDs that could not be found
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for batch retrieving target domains
 * @public
 */
export interface BatchGetTargetDomainsInput {
  /**
   * List of target domain IDs to retrieve
   * @public
   */
  targetDomainIds: string[] | undefined;
}

/**
 * Represents dns txt verification details
 * @public
 */
export interface DnsVerification {
  /**
   * Token used to verify domain ownership
   * @public
   */
  token?: string | undefined;

  /**
   * Record name to be added in DNS for target domain
   * @public
   */
  dnsRecordName?: string | undefined;

  /**
   * Type of record to be added in DNS for target domain
   * @public
   */
  dnsRecordType?: DNSRecordType | undefined;
}

/**
 * Represents http route verification details
 * @public
 */
export interface HttpVerification {
  /**
   * Token used to verify domain ownership
   * @public
   */
  token?: string | undefined;

  /**
   * Route path where verification token should be placed
   * @public
   */
  routePath?: string | undefined;
}

/**
 * Verification details to verify registered target domain
 * @public
 */
export interface VerificationDetails {
  /**
   * Type of domain ownership verification method
   * @public
   */
  method?: DomainVerificationMethod | undefined;

  /**
   * Represents dns txt verification details
   * @public
   */
  dnsTxt?: DnsVerification | undefined;

  /**
   * Represents http route verification details
   * @public
   */
  httpRoute?: HttpVerification | undefined;
}

/**
 * Represents a target domain
 * @public
 */
export interface TargetDomain {
  /**
   * Unique identifier of the target domain
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * Name of the registered target domain
   * @public
   */
  domainName: string | undefined;

  /**
   * Current verification status of the registered target domain
   * @public
   */
  verificationStatus?: TargetDomainStatus | undefined;

  /**
   * Verification details to verify registered target domain
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * Timestamp when the target domain was registered
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the target domain was last successfully verified
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * Output for the BatchGetTargetDomains operation
 * @public
 */
export interface BatchGetTargetDomainsOutput {
  /**
   * List of target domains that were successfully retrieved
   * @public
   */
  targetDomains?: TargetDomain[] | undefined;

  /**
   * List of target domain IDs that could not be found
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input parameters for GitHub integration
 * @public
 */
export interface GitHubIntegrationInput {
  /**
   * Authorization code from OAuth flow
   * @public
   */
  code: string | undefined;

  /**
   * CSRF state token for OAuth security
   * @public
   */
  state: string | undefined;

  /**
   * Name of the GitHub organization
   * @public
   */
  organizationName?: string | undefined;
}

/**
 * Provider-specific input parameters for integration
 * @public
 */
export type ProviderInput =
  | ProviderInput.GithubMember
  | ProviderInput.$UnknownMember;

/**
 * @public
 */
export namespace ProviderInput {
  /**
   * GitHub integration input
   * @public
   */
  export interface GithubMember {
    github: GitHubIntegrationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubIntegrationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateIntegrationInput {
  /**
   * Provider to integrate with
   * @public
   */
  provider: Provider | undefined;

  /**
   * Provider-specific input parameters
   * @public
   */
  input: ProviderInput | undefined;

  /**
   * Display name for the integration
   * @public
   */
  integrationDisplayName: string | undefined;

  /**
   * KMS key ID for encrypting integration details
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Tags to associate with the integration
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationOutput {
  /**
   * Unique identifier of the created integration
   * @public
   */
  integrationId: string | undefined;
}

/**
 * User membership configuration
 * @public
 */
export interface UserConfig {
  /**
   * Role of the user associated to the agent space
   * @public
   */
  role?: UserRole | undefined;
}

/**
 * Member-specific configuration
 * @public
 */
export type MembershipConfig =
  | MembershipConfig.UserMember
  | MembershipConfig.$UnknownMember;

/**
 * @public
 */
export namespace MembershipConfig {
  /**
   * Configuration for user members
   * @public
   */
  export interface UserMember {
    user: UserConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: UserConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Request structure for adding a single member to an agent space
 * @public
 */
export interface CreateMembershipRequest {
  /**
   * Application identifier
   * @public
   */
  applicationId: string | undefined;

  /**
   * Agent space identifier
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Member identifier (userId or agentSpaceId)
   * @public
   */
  membershipId: string | undefined;

  /**
   * Type of member (USER or AGENT_SPACE)
   * @public
   */
  memberType: MembershipType | undefined;

  /**
   * Membership details (user or agent specific)
   * @public
   */
  config?: MembershipConfig | undefined;
}

/**
 * Response structure for adding a single member to an agent space
 * @public
 */
export interface CreateMembershipResponse {}

/**
 * Input for creating a new pentest
 * @public
 */
export interface CreatePentestInput {
  /**
   * Title of the pentest
   * @public
   */
  title: string | undefined;

  /**
   * ID of the agent space where the pentest should be created
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Assets to be tested during the pentest
   * @public
   */
  assets?: Assets | undefined;

  /**
   * A list of risk types excluded from the pentest execution
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * Service role ARN for accessing customer resources
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * CloudWatch log group and stream prefix where pentest execution logs are stored
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * VPC configuration that the Security Agent accesses
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Configuration for network traffic filtering
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * Strategy for code remediation on findings
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * Output for the CreatePentest operation
 * @public
 */
export interface CreatePentestOutput {
  /**
   * Unique identifier of the created pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Title of the created pentest
   * @public
   */
  title?: string | undefined;

  /**
   * Timestamp when the pentest was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the pentest was last updated
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Assets to be tested in the created pentest
   * @public
   */
  assets?: Assets | undefined;

  /**
   * A list of risk types excluded from the pentest execution
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * Service role ARN for accessing customer resources
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * CloudWatch log group and stream prefix where pentest execution logs are stored
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * ID of the agent space where the pentest was created
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for creating a new target domain
 * @public
 */
export interface CreateTargetDomainInput {
  /**
   * Domain name of the target domain
   * @public
   */
  targetDomainName: string | undefined;

  /**
   * Verification method for the target domain
   * @public
   */
  verificationMethod: DomainVerificationMethod | undefined;

  /**
   * Tags to associate with the target domain
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Output for the CreateTargetDomain operation
 * @public
 */
export interface CreateTargetDomainOutput {
  /**
   * Unique identifier of the created target domain
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * Name of the created target domain
   * @public
   */
  domainName: string | undefined;

  /**
   * Current verification status of the registered target domain
   * @public
   */
  verificationStatus: TargetDomainStatus | undefined;

  /**
   * Verification details to verify registered target domain
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * Timestamp when the target domain was registered
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the target domain was last successfully verified
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactInput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Unique identifier of the artifact
   * @public
   */
  artifactId: string | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactOutput {}

/**
 * @public
 */
export interface DeleteIntegrationInput {
  /**
   * Unique identifier of the integration
   * @public
   */
  integrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationOutput {}

/**
 * Request structure for removing a single member from an agent space
 * @public
 */
export interface DeleteMembershipRequest {
  /**
   * Application identifier
   * @public
   */
  applicationId: string | undefined;

  /**
   * Agent space identifier
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Member identifier (userId or agentSpaceId)
   * @public
   */
  membershipId: string | undefined;

  /**
   * Type of member (USER or AGENT_SPACE)
   * @public
   */
  memberType?: MembershipType | undefined;
}

/**
 * Response structure for removing a single member from an agent space
 * @public
 */
export interface DeleteMembershipResponse {}

/**
 * Input for deleting a target domain
 * @public
 */
export interface DeleteTargetDomainInput {
  /**
   * Unique identifier of the target domain to delete
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * Output for the DeleteTargetDomain operation
 * @public
 */
export interface DeleteTargetDomainOutput {
  /**
   * Unique identifier of the deleted target domain
   * @public
   */
  targetDomainId?: string | undefined;
}

/**
 * Represents a discovered endpoint during pentest execution
 * @public
 */
export interface DiscoveredEndpoint {
  /**
   * The URI of the discovered endpoint
   * @public
   */
  uri: string | undefined;

  /**
   * Identifier of the pentest job that discovered this endpoint
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * Identifier of the task that discovered this endpoint
   * @public
   */
  taskId: string | undefined;

  /**
   * Identifier of the agent space where the endpoint was discovered
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Optional evidence or additional information about the endpoint
   * @public
   */
  evidence?: string | undefined;

  /**
   * Operation or action associated with the endpoint
   * @public
   */
  operation?: string | undefined;

  /**
   * Additional description of the endpoint
   * @public
   */
  description?: string | undefined;
}

/**
 * Summary information for a security finding
 * @public
 */
export interface FindingSummary {
  /**
   * Unique identifier for the finding
   * @public
   */
  findingId: string | undefined;

  /**
   * Identifier of the agent space that created this finding
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Identifier of the parent pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Identifier of the pentest job
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * Name or title of the finding
   * @public
   */
  name?: string | undefined;

  /**
   * Current status of the finding
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * Type of security risk identified
   * @public
   */
  riskType?: string | undefined;

  /**
   * Severity level of the identified risk
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * Confidence level of the finding
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * Timestamp when the finding was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the finding was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetArtifactInput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Unique identifier of the artifact
   * @public
   */
  artifactId: string | undefined;
}

/**
 * @public
 */
export interface GetArtifactOutput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Unique identifier of the artifact
   * @public
   */
  artifactId: string | undefined;

  /**
   * Artifact details
   * @public
   */
  artifact: Artifact | undefined;

  /**
   * Name of the artifact file
   * @public
   */
  fileName: string | undefined;

  /**
   * Timestamp when the artifact was last updated
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetIntegrationInput {
  /**
   * Unique identifier of the integration
   * @public
   */
  integrationId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationOutput {
  /**
   * Unique identifier of the integration
   * @public
   */
  integrationId: string | undefined;

  /**
   * Installation identifier from the provider
   * @public
   */
  installationId: string | undefined;

  /**
   * Provider type
   * @public
   */
  provider: Provider | undefined;

  /**
   * Type of provider integration
   * @public
   */
  providerType: ProviderType | undefined;

  /**
   * Display name for the integration
   * @public
   */
  displayName?: string | undefined;

  /**
   * KMS key ID for encrypting integration details
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Metadata specific to a GitHub repository integrated resource
 * @public
 */
export interface GitHubRepositoryMetadata {
  /**
   * Name of the resource e.g. repository name, etc
   * @public
   */
  name: string | undefined;

  /**
   * Unique resource identifier from the vendor
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * Owner of the repository
   * @public
   */
  owner: string | undefined;

  /**
   * Access / Visibility Type of the integrated resource
   * @public
   */
  accessType?: AccessType | undefined;
}

/**
 * GitHub repository resource details
 * @public
 */
export interface GitHubRepositoryResource {
  /**
   * Name of the resource e.g. repository name, etc
   * @public
   */
  name: string | undefined;

  /**
   * Owner of the repository
   * @public
   */
  owner: string | undefined;
}

/**
 * Capabilities for GitHub repositories
 * @public
 */
export interface GitHubResourceCapabilities {
  /**
   * Post code review comments on pull requests
   * @public
   */
  leaveComments?: boolean | undefined;

  /**
   * Create pull requests with automated fixes
   * @public
   */
  remediateCode?: boolean | undefined;
}

/**
 * @public
 */
export interface InitiateProviderRegistrationInput {
  /**
   * Provider to register with
   * @public
   */
  provider: Provider | undefined;
}

/**
 * @public
 */
export interface InitiateProviderRegistrationOutput {
  /**
   * OAuth redirect URL
   * @public
   */
  redirectTo: string | undefined;

  /**
   * CSRF state token for OAuth security
   * @public
   */
  csrfState: string | undefined;
}

/**
 * Integrated resource details from a provider
 * @public
 */
export type IntegratedResource =
  | IntegratedResource.GithubRepositoryMember
  | IntegratedResource.$UnknownMember;

/**
 * @public
 */
export namespace IntegratedResource {
  /**
   * GitHub repository resource
   * @public
   */
  export interface GithubRepositoryMember {
    githubRepository: GitHubRepositoryResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    githubRepository?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    githubRepository: (value: GitHubRepositoryResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Provider-specific capabilities for integrated resources
 * @public
 */
export type ProviderResourceCapabilities =
  | ProviderResourceCapabilities.GithubMember
  | ProviderResourceCapabilities.$UnknownMember;

/**
 * @public
 */
export namespace ProviderResourceCapabilities {
  /**
   * Capabilities for GitHub repositories
   * @public
   */
  export interface GithubMember {
    github: GitHubResourceCapabilities;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubResourceCapabilities) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input item for updating an integrated resource
 * @public
 */
export interface IntegratedResourceInputItem {
  /**
   * Configuration of the resource
   * @public
   */
  resource: IntegratedResource | undefined;

  /**
   * Provider-specific capabilities for the resource
   * @public
   */
  capabilities?: ProviderResourceCapabilities | undefined;
}

/**
 * Metadata about an integrated resource
 * @public
 */
export type IntegratedResourceMetadata =
  | IntegratedResourceMetadata.GithubRepositoryMember
  | IntegratedResourceMetadata.$UnknownMember;

/**
 * @public
 */
export namespace IntegratedResourceMetadata {
  /**
   * Metadata for a GitHub repository resource
   * @public
   */
  export interface GithubRepositoryMember {
    githubRepository: GitHubRepositoryMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    githubRepository?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    githubRepository: (value: GitHubRepositoryMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Summary information about an integrated resource
 * @public
 */
export interface IntegratedResourceSummary {
  /**
   * Unique identifier of the integration
   * @public
   */
  integrationId: string | undefined;

  /**
   * The integrated resource details
   * @public
   */
  resource: IntegratedResourceMetadata | undefined;

  /**
   * Capabilities of the integrated resource
   * @public
   */
  capabilities?: ProviderResourceCapabilities | undefined;
}

/**
 * Filter criteria for integrations
 * @public
 */
export type IntegrationFilter =
  | IntegrationFilter.ProviderMember
  | IntegrationFilter.ProviderTypeMember
  | IntegrationFilter.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationFilter {
  /**
   * Filter by provider
   * @public
   */
  export interface ProviderMember {
    provider: Provider;
    providerType?: never;
    $unknown?: never;
  }

  /**
   * Filter by provider type
   * @public
   */
  export interface ProviderTypeMember {
    provider?: never;
    providerType: ProviderType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    provider?: never;
    providerType?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    provider: (value: Provider) => T;
    providerType: (value: ProviderType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListIntegrationsInput {
  /**
   * Filter criteria for integrations
   * @public
   */
  filter?: IntegrationFilter | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about an integration
 * @public
 */
export interface IntegrationSummary {
  /**
   * Unique identifier of the integration
   * @public
   */
  integrationId: string | undefined;

  /**
   * Installation identifier from the provider
   * @public
   */
  installationId: string | undefined;

  /**
   * Provider type
   * @public
   */
  provider: Provider | undefined;

  /**
   * Type of provider integration
   * @public
   */
  providerType: ProviderType | undefined;

  /**
   * Display name for the integration
   * @public
   */
  displayName: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsOutput {
  /**
   * List of integration summaries
   * @public
   */
  integrationSummaries: IntegrationSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListArtifactsInput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListArtifactsOutput {
  /**
   * List of artifact summaries
   * @public
   */
  artifactSummaries: ArtifactSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListDiscoveredEndpoints operation
 * @public
 */
export interface ListDiscoveredEndpointsInput {
  /**
   * Maximum number of discovered endpoints to return in a single request (default: 50)
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Identifier of the pentest job for which to retrieve discovered endpoints
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * ID of the agent space where the pentest job exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Optional URI prefix filter to narrow down results
   * @public
   */
  prefix?: string | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Output for the ListDiscoveredEndpoints operation
 * @public
 */
export interface ListDiscoveredEndpointsOutput {
  /**
   * List of discovered endpoints for the pentest job
   * @public
   */
  discoveredEndpoints?: DiscoveredEndpoint[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListFindings operation with filtering support
 * @public
 */
export interface ListFindingsInput {
  /**
   * Maximum number of findings to return in a single request (default: 50)
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Identifier of the pentest job for which to retrieve associated findings
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * ID of the agent space where the pentest job exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter findings by risk type
   * @public
   */
  riskType?: string | undefined;

  /**
   * Filter findings by risk level
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * Filter findings by status
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * Filter findings by confidence level
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * Filter findings by name (case-insensitive substring search)
   * @public
   */
  name?: string | undefined;
}

/**
 * Output for the ListFindings operation
 * @public
 */
export interface ListFindingsOutput {
  /**
   * List of finding summaries matching the filter criteria
   * @public
   */
  findingsSummaries?: FindingSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegratedResourcesInput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Filter integrated resources by a specific integration
   * @public
   */
  integrationId?: string | undefined;

  /**
   * Filter integrated resources by resource type
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIntegratedResourcesOutput {
  /**
   * List of integrated resources
   * @public
   */
  integratedResourceSummaries: IntegratedResourceSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for listing agent space members
 * @public
 */
export interface ListMembershipsRequest {
  /**
   * Application identifier
   * @public
   */
  applicationId: string | undefined;

  /**
   * Agent space identifier
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Filter by member type
   * @public
   */
  memberType?: MembershipTypeFilter | undefined;

  /**
   * Maximum number of results to return
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * User-specific metadata
 * @public
 */
export interface UserMetadata {
  /**
   * User name/display name
   * @public
   */
  username: string | undefined;

  /**
   * User email address
   * @public
   */
  email: string | undefined;
}

/**
 * Metadata associated with the member
 * @public
 */
export type MemberMetadata =
  | MemberMetadata.UserMember
  | MemberMetadata.$UnknownMember;

/**
 * @public
 */
export namespace MemberMetadata {
  /**
   * User metadata for USER members
   * @public
   */
  export interface UserMember {
    user: UserMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: UserMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Membership summary for list operations
 * @public
 */
export interface MembershipSummary {
  /**
   * Member identifier (userId or agentSpaceId)
   * @public
   */
  membershipId: string | undefined;

  /**
   * Application identifier
   * @public
   */
  applicationId: string | undefined;

  /**
   * Agent space identifier
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Type of member
   * @public
   */
  memberType: MembershipType | undefined;

  /**
   * Configuration specific to the member type
   * @public
   */
  config?: MembershipConfig | undefined;

  /**
   * Member-specific metadata
   * @public
   */
  metadata?: MemberMetadata | undefined;

  /**
   * Timestamp when the membership was created (ISO 8601)
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp when the membership was last updated (ISO 8601)
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * User ID who created the membership
   * @public
   */
  createdBy: string | undefined;

  /**
   * User ID who last updated the membership
   * @public
   */
  updatedBy: string | undefined;
}

/**
 * Response structure for listing members associated to an agent space
 * @public
 */
export interface ListMembershipsResponse {
  /**
   * List of membership summaries
   * @public
   */
  membershipSummaries: MembershipSummary[] | undefined;

  /**
   * Token for next page of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListPentestJobsForPentest operation
 * @public
 */
export interface ListPentestJobsForPentestInput {
  /**
   * Maximum number of pentest jobs to return in a single request
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Identifier of the pentest for which to retrieve associated jobs
   * @public
   */
  pentestId: string | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information for a pentest job
 * @public
 */
export interface PentestJobSummary {
  /**
   * Unique identifier of the pentest job
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * Identifier of the parent pentest
   * @public
   */
  pentestId: string | undefined;

  /**
   * Title or name of the pentest
   * @public
   */
  title?: string | undefined;

  /**
   * Current status of the pentest job
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * Timestamp when the pentest job was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the pentest job was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListPentestJobsForPentest operation
 * @public
 */
export interface ListPentestJobsForPentestOutput {
  /**
   * List of pentest job summaries associated with the pentest
   * @public
   */
  pentestJobSummaries?: PentestJobSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing tasks associated with a specific pentest job
 * @public
 */
export interface ListPentestJobTasksInput {
  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Maximum number of tasks to return in a single request
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Identifier of the pentest job whose tasks to list
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * Filter tasks by step name
   * @public
   */
  stepName?: StepName | undefined;

  /**
   * Filter tasks by category name.
   * @public
   */
  categoryName?: string | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information for a task
 * @public
 */
export interface TaskSummary {
  /**
   * Unique identifier for the task
   * @public
   */
  taskId: string | undefined;

  /**
   * Identifier of the parent pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Identifier of the pentest job this task belongs to
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * Identifier of the agent space this task belongs to
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * Title or name of the task
   * @public
   */
  title?: string | undefined;

  /**
   * Type of security risk this task is designed to test
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * Current status of the task execution
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * Timestamp when the task was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the task was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListPentestJobTasks operation
 * @public
 */
export interface ListPentestJobTasksOutput {
  /**
   * List of task summaries associated with the specified pentest job
   * @public
   */
  taskSummaries?: TaskSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing pentests with optional filtering
 * @public
 */
export interface ListPentestsInput {
  /**
   * Maximum number of pentests to return in a single request
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Summary information for a pentest
 * @public
 */
export interface PentestSummary {
  /**
   * Unique identifier for the pentest
   * @public
   */
  pentestId: string | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Title or name of the pentest
   * @public
   */
  title: string | undefined;

  /**
   * Timestamp when the pentest was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the pentest was last updated
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListPentests operation
 * @public
 */
export interface ListPentestsOutput {
  /**
   * List of pentest summaries matching the filter criteria
   * @public
   */
  pentestSummaries?: PentestSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListTagsForResource operation
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * ARN of the resource to list tags for
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Output for ListTagsForResource operation
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * Tags associated with the resource
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for listing target domains
 * @public
 */
export interface ListTargetDomainsInput {
  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of target domains to return
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information for a target domain
 * @public
 */
export interface TargetDomainSummary {
  /**
   * Unique identifier of the target domain
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * Name of the registered target domain
   * @public
   */
  domainName: string | undefined;

  /**
   * Current verification status of the registered target domain
   * @public
   */
  verificationStatus?: TargetDomainStatus | undefined;
}

/**
 * Output for the ListTargetDomains operation
 * @public
 */
export interface ListTargetDomainsOutput {
  /**
   * List of target domain summaries
   * @public
   */
  targetDomainSummaries?: TargetDomainSummary[] | undefined;

  /**
   * Token for next page of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for the StartCodeRemediation operation
 * @public
 */
export interface StartCodeRemediationInput {
  /**
   * ID of the agent space where the pentest job exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Identifier of the pentest job to start code remediation for
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * Identifiers of the findings to start code remediation for
   * @public
   */
  findingIds: string[] | undefined;
}

/**
 * Output for the StartCodeRemediation operation
 * @public
 */
export interface StartCodeRemediationOutput {}

/**
 * Input for starting the execution of a pentest
 * @public
 */
export interface StartPentestJobInput {
  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Identifier of the pentest to execute
   * @public
   */
  pentestId: string | undefined;
}

/**
 * Output for the StartPentestJob operation
 * @public
 */
export interface StartPentestJobOutput {
  /**
   * Title of the pentest job
   * @public
   */
  title?: string | undefined;

  /**
   * Current status of the pentest job
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * Timestamp when the pentest job was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the pentest job was last updated
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Unique identifier of the pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Unique identifier of the pentest job
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for stopping the execution of a pentest
 * @public
 */
export interface StopPentestJobInput {
  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Identifier of the pentest job to stop
   * @public
   */
  pentestJobId: string | undefined;
}

/**
 * Output for the StopPentestJob operation
 * @public
 */
export interface StopPentestJobOutput {}

/**
 * Input for TagResource operation
 * @public
 */
export interface TagResourceInput {
  /**
   * ARN of the resource to tag
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tags to add to the resource
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Output for TagResource operation
 * @public
 */
export interface TagResourceOutput {}

/**
 * Input for updating a target domain
 * @public
 */
export interface UpdateTargetDomainInput {
  /**
   * Unique identifier of the target domain to update
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * Verification method for the target domain
   * @public
   */
  verificationMethod: DomainVerificationMethod | undefined;
}

/**
 * Output for the UpdateTargetDomain operation
 * @public
 */
export interface UpdateTargetDomainOutput {
  /**
   * Unique identifier of the target domain
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * Name of the target domain
   * @public
   */
  domainName: string | undefined;

  /**
   * Current verification status of the registered target domain
   * @public
   */
  verificationStatus: TargetDomainStatus | undefined;

  /**
   * Verification details to verify registered target domain
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * Timestamp when the target domain was registered
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the target domain was last successfully verified
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * Input for UntagResource operation
 * @public
 */
export interface UntagResourceInput {
  /**
   * ARN of the resource to untag
   * @public
   */
  resourceArn: string | undefined;

  /**
   * List of tag keys to remove from the resource
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * Output for UntagResource operation
 * @public
 */
export interface UntagResourceOutput {}

/**
 * Input for updating an existing security finding
 * @public
 */
export interface UpdateFindingInput {
  /**
   * Identifier of the finding to update
   * @public
   */
  findingId: string | undefined;

  /**
   * ID of the agent space where the finding exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Updated severity level of the identified risk
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * Updated status of the finding
   * @public
   */
  status?: FindingStatus | undefined;
}

/**
 * Output for the UpdateFinding operation
 * @public
 */
export interface UpdateFindingOutput {}

/**
 * @public
 */
export interface UpdateIntegratedResourcesInput {
  /**
   * Unique identifier of the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Unique identifier of the integration
   * @public
   */
  integrationId: string | undefined;

  /**
   * List of integrated resources to update
   * @public
   */
  items: IntegratedResourceInputItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateIntegratedResourcesOutput {}

/**
 * Input for updating an existing pentest
 * @public
 */
export interface UpdatePentestInput {
  /**
   * Identifier of the pentest to update
   * @public
   */
  pentestId: string | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * New title for the pentest
   * @public
   */
  title?: string | undefined;

  /**
   * Updated assets to be tested
   * @public
   */
  assets?: Assets | undefined;

  /**
   * A list of risk types excluded from the pentest execution
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * Updated service role ARN for accessing customer resources
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * CloudWatch log group and stream prefix where pentest execution logs are stored
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * VPC configuration that the Security Agent accesses
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Configuration for network traffic filtering
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * Strategy for code remediation on findings
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * Output for the UpdatePentest operation
 * @public
 */
export interface UpdatePentestOutput {
  /**
   * Unique identifier of the updated pentest
   * @public
   */
  pentestId?: string | undefined;

  /**
   * Title of the updated pentest
   * @public
   */
  title?: string | undefined;

  /**
   * Timestamp when the pentest was created
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the pentest was last updated
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Assets to be tested in the updated pentest
   * @public
   */
  assets?: Assets | undefined;

  /**
   * A list of risk types excluded from the pentest execution
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * Service role ARN for accessing customer resources
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * CloudWatch log group and stream prefix where pentest execution logs are stored
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * ID of the agent space where the pentest exists
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for verifying ownership for a registered target domain in an agent space
 * @public
 */
export interface VerifyTargetDomainInput {
  /**
   * Unique identifier of the target domain
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * Output for verifying ownership for a registered target domain in an agent space
 * @public
 */
export interface VerifyTargetDomainOutput {
  /**
   * Unique identifier of the target domain
   * @public
   */
  targetDomainId?: string | undefined;

  /**
   * Name of the registered target domain
   * @public
   */
  domainName?: string | undefined;

  /**
   * Timestamp when the target domain was registered
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp when the target domain was last updated
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Timestamp when the target domain was last successfully verified
   * @public
   */
  verifiedAt?: Date | undefined;

  /**
   * Current verification status of the registered target domain
   * @public
   */
  status?: TargetDomainStatus | undefined;
}
