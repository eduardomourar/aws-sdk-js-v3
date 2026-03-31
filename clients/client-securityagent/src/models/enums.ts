// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessType = {
  /**
   * Resource is private and has restricted access
   */
  PRIVATE: "PRIVATE",
  /**
   * Resource is public and openly accessible
   */
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const AuthenticationProviderType = {
  /**
   * Authentication using an AWS IAM role
   */
  AWS_IAM_ROLE: "AWS_IAM_ROLE",
  /**
   * Internal AWS authentication
   */
  AWS_INTERNAL: "AWS_INTERNAL",
  /**
   * Credentials retrieved via AWS Lambda function
   */
  AWS_LAMBDA: "AWS_LAMBDA",
  /**
   * Credentials stored in AWS Secrets Manager
   */
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type AuthenticationProviderType = (typeof AuthenticationProviderType)[keyof typeof AuthenticationProviderType];

/**
 * @public
 * @enum
 */
export const ArtifactType = {
  DOC: "DOC",
  DOCX: "DOCX",
  JPEG: "JPEG",
  JSON: "JSON",
  MD: "MD",
  PDF: "PDF",
  PNG: "PNG",
  TXT: "TXT",
  YAML: "YAML",
} as const;
/**
 * @public
 */
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];

/**
 * @public
 * @enum
 */
export const CodeRemediationStrategy = {
  /**
   * Automatically generate code remediation for findings
   */
  AUTOMATIC: "AUTOMATIC",
  /**
   * Code remediation is disabled
   */
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type CodeRemediationStrategy = (typeof CodeRemediationStrategy)[keyof typeof CodeRemediationStrategy];

/**
 * @public
 * @enum
 */
export const RiskType = {
  /**
   * Arbitrary file upload vulnerability
   */
  ARBITRARY_FILE_UPLOAD: "ARBITRARY_FILE_UPLOAD",
  /**
   * Business logic vulnerability
   */
  BUSINESS_LOGIC_VULNERABILITIES: "BUSINESS_LOGIC_VULNERABILITIES",
  /**
   * Code injection vulnerability
   */
  CODE_INJECTION: "CODE_INJECTION",
  /**
   * Command injection vulnerability
   */
  COMMAND_INJECTION: "COMMAND_INJECTION",
  /**
   * Cross-site scripting vulnerability
   */
  CROSS_SITE_SCRIPTING: "CROSS_SITE_SCRIPTING",
  /**
   * Cryptographic vulnerability
   */
  CRYPTOGRAPHIC_VULNERABILITIES: "CRYPTOGRAPHIC_VULNERABILITIES",
  /**
   * Unauthorized database access
   */
  DATABASE_ACCESS: "DATABASE_ACCESS",
  /**
   * Unauthorized database modification
   */
  DATABASE_MODIFICATION: "DATABASE_MODIFICATION",
  /**
   * Default or weak credentials detected
   */
  DEFAULT_CREDENTIALS: "DEFAULT_CREDENTIALS",
  /**
   * Denial of service vulnerability
   */
  DENIAL_OF_SERVICE: "DENIAL_OF_SERVICE",
  /**
   * Unauthorized file access vulnerability
   */
  FILE_ACCESS: "FILE_ACCESS",
  /**
   * Unauthorized file creation vulnerability
   */
  FILE_CREATION: "FILE_CREATION",
  /**
   * File deletion vulnerability
   */
  FILE_DELETION: "FILE_DELETION",
  /**
   * GraphQL-specific vulnerability
   */
  GRAPHQL_VULNERABILITIES: "GRAPHQL_VULNERABILITIES",
  /**
   * Information disclosure vulnerability
   */
  INFORMATION_DISCLOSURE: "INFORMATION_DISCLOSURE",
  /**
   * Insecure deserialization vulnerability
   */
  INSECURE_DESERIALIZATION: "INSECURE_DESERIALIZATION",
  /**
   * Insecure direct object reference vulnerability
   */
  INSECURE_DIRECT_OBJECT_REFERENCE: "INSECURE_DIRECT_OBJECT_REFERENCE",
  /**
   * JSON Web Token vulnerability
   */
  JSON_WEB_TOKEN_VULNERABILITIES: "JSON_WEB_TOKEN_VULNERABILITIES",
  /**
   * Local file inclusion vulnerability
   */
  LOCAL_FILE_INCLUSION: "LOCAL_FILE_INCLUSION",
  /**
   * Other risk type not covered by specific categories
   */
  OTHER: "OTHER",
  /**
   * Outbound service request vulnerability
   */
  OUTBOUND_SERVICE_REQUEST: "OUTBOUND_SERVICE_REQUEST",
  /**
   * Path traversal vulnerability
   */
  PATH_TRAVERSAL: "PATH_TRAVERSAL",
  /**
   * Privilege escalation vulnerability
   */
  PRIVILEGE_ESCALATION: "PRIVILEGE_ESCALATION",
  /**
   * Server-side request forgery vulnerability
   */
  SERVER_SIDE_REQUEST_FORGERY: "SERVER_SIDE_REQUEST_FORGERY",
  /**
   * Server-side template injection vulnerability
   */
  SERVER_SIDE_TEMPLATE_INJECTION: "SERVER_SIDE_TEMPLATE_INJECTION",
  /**
   * SQL injection vulnerability
   */
  SQL_INJECTION: "SQL_INJECTION",
  /**
   * Unknown risk type
   */
  UNKNOWN: "UNKNOWN",
  /**
   * XML external entity vulnerability
   */
  XML_EXTERNAL_ENTITY: "XML_EXTERNAL_ENTITY",
} as const;
/**
 * @public
 */
export type RiskType = (typeof RiskType)[keyof typeof RiskType];

/**
 * @public
 * @enum
 */
export const NetworkTrafficRuleEffect = {
  /**
   * Allow matching traffic
   */
  ALLOW: "ALLOW",
  /**
   * Deny matching traffic
   */
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type NetworkTrafficRuleEffect = (typeof NetworkTrafficRuleEffect)[keyof typeof NetworkTrafficRuleEffect];

/**
 * @public
 * @enum
 */
export const NetworkTrafficRuleType = {
  /**
   * URL-based traffic rule
   */
  URL: "URL",
} as const;
/**
 * @public
 */
export type NetworkTrafficRuleType = (typeof NetworkTrafficRuleType)[keyof typeof NetworkTrafficRuleType];

/**
 * @public
 * @enum
 */
export const CodeRemediationTaskStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CodeRemediationTaskStatus = (typeof CodeRemediationTaskStatus)[keyof typeof CodeRemediationTaskStatus];

/**
 * @public
 * @enum
 */
export const ConfidenceLevel = {
  FALSE_POSITIVE: "FALSE_POSITIVE",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNCONFIRMED: "UNCONFIRMED",
} as const;
/**
 * @public
 */
export type ConfidenceLevel = (typeof ConfidenceLevel)[keyof typeof ConfidenceLevel];

/**
 * @public
 * @enum
 */
export const RiskLevel = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];

/**
 * @public
 * @enum
 */
export const FindingStatus = {
  ACCEPTED: "ACCEPTED",
  ACTIVE: "ACTIVE",
  FALSE_POSITIVE: "FALSE_POSITIVE",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  /**
   * Failure caused by a client-side error
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * Failure caused by an internal error
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * Pentest job was stopped by the user
   */
  STOPPED_BY_USER: "STOPPED_BY_USER",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const ContextType = {
  /**
   * Client-side error encountered during execution
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * Error encountered during execution
   */
  ERROR: "ERROR",
  /**
   * Informational message during execution
   */
  INFO: "INFO",
  /**
   * Warning encountered during execution
   */
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type ContextType = (typeof ContextType)[keyof typeof ContextType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  /**
   * Pentest job completed successfully
   */
  COMPLETED: "COMPLETED",
  /**
   * Pentest job failed during execution
   */
  FAILED: "FAILED",
  /**
   * Pentest job is currently running
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * Pentest job was stopped by the user
   */
  STOPPED: "STOPPED",
  /**
   * Pentest job is being stopped
   */
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const StepName = {
  /**
   * Cleanup of infrastructure and resources created by the agent
   */
  FINALIZING: "FINALIZING",
  /**
   * Active pentest step
   */
  PENTEST: "PENTEST",
  /**
   * Pre-flight validation and setup step
   */
  PREFLIGHT: "PREFLIGHT",
  /**
   * Static code and network scan analysis step
   */
  STATIC_ANALYSIS: "STATIC_ANALYSIS",
} as const;
/**
 * @public
 */
export type StepName = (typeof StepName)[keyof typeof StepName];

/**
 * @public
 * @enum
 */
export const StepStatus = {
  /**
   * Step completed successfully
   */
  COMPLETED: "COMPLETED",
  /**
   * Step failed during execution
   */
  FAILED: "FAILED",
  /**
   * Step is currently running
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * Step has not started yet
   */
  NOT_STARTED: "NOT_STARTED",
  /**
   * Step was stopped by the user
   */
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * @public
 * @enum
 */
export const TaskExecutionStatus = {
  /**
   * Task was aborted
   */
  ABORTED: "ABORTED",
  /**
   * Task completed successfully
   */
  COMPLETED: "COMPLETED",
  /**
   * Task failed during execution
   */
  FAILED: "FAILED",
  /**
   * Task failed due to an internal error
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * Task is currently running
   */
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TaskExecutionStatus = (typeof TaskExecutionStatus)[keyof typeof TaskExecutionStatus];

/**
 * @public
 * @enum
 */
export const LogType = {
  /**
   * Logs stored in CloudWatch
   */
  CLOUDWATCH: "CLOUDWATCH",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const DNSRecordType = {
  /**
   * DNS TXT record
   */
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type DNSRecordType = (typeof DNSRecordType)[keyof typeof DNSRecordType];

/**
 * @public
 * @enum
 */
export const DomainVerificationMethod = {
  /**
   * Verify ownership via DNS TXT record
   */
  DNS_TXT: "DNS_TXT",
  /**
   * Verify ownership via HTTP route
   */
  HTTP_ROUTE: "HTTP_ROUTE",
} as const;
/**
 * @public
 */
export type DomainVerificationMethod = (typeof DomainVerificationMethod)[keyof typeof DomainVerificationMethod];

/**
 * @public
 * @enum
 */
export const TargetDomainStatus = {
  /**
   * Domain verification failed
   */
  FAILED: "FAILED",
  /**
   * Domain verification is pending
   */
  PENDING: "PENDING",
  /**
   * Domain is unreachable for verification
   */
  UNREACHABLE: "UNREACHABLE",
  /**
   * Domain ownership has been verified
   */
  VERIFIED: "VERIFIED",
} as const;
/**
 * @public
 */
export type TargetDomainStatus = (typeof TargetDomainStatus)[keyof typeof TargetDomainStatus];

/**
 * @public
 * @enum
 */
export const Provider = {
  GITHUB: "GITHUB",
} as const;
/**
 * @public
 */
export type Provider = (typeof Provider)[keyof typeof Provider];

/**
 * @public
 * @enum
 */
export const UserRole = {
  /**
   * Default member role with standard permissions
   */
  MEMBER: "MEMBER",
} as const;
/**
 * @public
 */
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/**
 * @public
 * @enum
 */
export const MembershipType = {
  /**
   * Human user member
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType];

/**
 * @public
 * @enum
 */
export const ProviderType = {
  DOCUMENTATION: "DOCUMENTATION",
  SOURCE_CODE: "SOURCE_CODE",
} as const;
/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const MembershipTypeFilter = {
  /**
   * Show all member types
   */
  ALL: "ALL",
  /**
   * Show only user members
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type MembershipTypeFilter = (typeof MembershipTypeFilter)[keyof typeof MembershipTypeFilter];
