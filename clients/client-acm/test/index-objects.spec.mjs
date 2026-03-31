import {
  AccessDeniedException,
  AccessDeniedException$,
  ACM,
  AcmCertificateMetadata$,
  AcmCertificateMetadataFilter$,
  ACMClient,
  ACMServiceException,
  AddTagsToCertificate$,
  AddTagsToCertificateCommand,
  AddTagsToCertificateRequest$,
  CertificateDetail$,
  CertificateExport,
  CertificateFilter$,
  CertificateFilterStatement$,
  CertificateManagedBy,
  CertificateMetadata$,
  CertificateOptions$,
  CertificateSearchResult$,
  CertificateStatus,
  CertificateSummary$,
  CertificateTransparencyLoggingPreference,
  CertificateType,
  CommonNameFilter$,
  ComparisonOperator,
  ConflictException,
  ConflictException$,
  CustomAttribute$,
  DeleteCertificate$,
  DeleteCertificateCommand,
  DeleteCertificateRequest$,
  DescribeCertificate$,
  DescribeCertificateCommand,
  DescribeCertificateRequest$,
  DescribeCertificateResponse$,
  DistinguishedName$,
  DnsNameFilter$,
  DomainStatus,
  DomainValidation$,
  DomainValidationOption$,
  ExpiryEventsConfiguration$,
  ExportCertificate$,
  ExportCertificateCommand,
  ExportCertificateRequest$,
  ExportCertificateResponse$,
  ExtendedKeyUsage$,
  ExtendedKeyUsageName,
  FailureReason,
  Filters$,
  GeneralName$,
  GetAccountConfiguration$,
  GetAccountConfigurationCommand,
  GetAccountConfigurationResponse$,
  GetCertificate$,
  GetCertificateCommand,
  GetCertificateRequest$,
  GetCertificateResponse$,
  HttpRedirect$,
  ImportCertificate$,
  ImportCertificateCommand,
  ImportCertificateRequest$,
  ImportCertificateResponse$,
  InvalidArgsException,
  InvalidArgsException$,
  InvalidArnException,
  InvalidArnException$,
  InvalidDomainValidationOptionsException,
  InvalidDomainValidationOptionsException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidStateException,
  InvalidStateException$,
  InvalidTagException,
  InvalidTagException$,
  KeyAlgorithm,
  KeyUsage$,
  KeyUsageName,
  LimitExceededException,
  LimitExceededException$,
  ListCertificates$,
  ListCertificatesCommand,
  ListCertificatesRequest$,
  ListCertificatesResponse$,
  ListTagsForCertificate$,
  ListTagsForCertificateCommand,
  ListTagsForCertificateRequest$,
  ListTagsForCertificateResponse$,
  OtherName$,
  paginateListCertificates,
  paginateSearchCertificates,
  PutAccountConfiguration$,
  PutAccountConfigurationCommand,
  PutAccountConfigurationRequest$,
  RecordType,
  RemoveTagsFromCertificate$,
  RemoveTagsFromCertificateCommand,
  RemoveTagsFromCertificateRequest$,
  RenewalEligibility,
  RenewalStatus,
  RenewalSummary$,
  RenewCertificate$,
  RenewCertificateCommand,
  RenewCertificateRequest$,
  RequestCertificate$,
  RequestCertificateCommand,
  RequestCertificateRequest$,
  RequestCertificateResponse$,
  RequestInProgressException,
  RequestInProgressException$,
  ResendValidationEmail$,
  ResendValidationEmailCommand,
  ResendValidationEmailRequest$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceRecord$,
  RevocationReason,
  RevokeCertificate$,
  RevokeCertificateCommand,
  RevokeCertificateRequest$,
  RevokeCertificateResponse$,
  SearchCertificates$,
  SearchCertificatesCommand,
  SearchCertificatesRequest$,
  SearchCertificatesResponse$,
  SearchCertificatesSortBy,
  SearchCertificatesSortOrder,
  SortBy,
  SortOrder,
  SubjectAlternativeNameFilter$,
  SubjectFilter$,
  Tag$,
  TagPolicyException,
  TagPolicyException$,
  ThrottlingException,
  ThrottlingException$,
  ThrottlingReason$,
  TimestampRange$,
  TooManyTagsException,
  TooManyTagsException$,
  UpdateCertificateOptions$,
  UpdateCertificateOptionsCommand,
  UpdateCertificateOptionsRequest$,
  ValidationException,
  ValidationException$,
  ValidationMethod,
  waitForCertificateValidated,
  waitUntilCertificateValidated,
  X509AttributeFilter$,
  X509Attributes$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ACMClient === "function");
assert(typeof ACM === "function");
// commands
assert(typeof AddTagsToCertificateCommand === "function");
assert(typeof AddTagsToCertificate$ === "object");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteCertificate$ === "object");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof DescribeCertificate$ === "object");
assert(typeof ExportCertificateCommand === "function");
assert(typeof ExportCertificate$ === "object");
assert(typeof GetAccountConfigurationCommand === "function");
assert(typeof GetAccountConfiguration$ === "object");
assert(typeof GetCertificateCommand === "function");
assert(typeof GetCertificate$ === "object");
assert(typeof ImportCertificateCommand === "function");
assert(typeof ImportCertificate$ === "object");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListCertificates$ === "object");
assert(typeof ListTagsForCertificateCommand === "function");
assert(typeof ListTagsForCertificate$ === "object");
assert(typeof PutAccountConfigurationCommand === "function");
assert(typeof PutAccountConfiguration$ === "object");
assert(typeof RemoveTagsFromCertificateCommand === "function");
assert(typeof RemoveTagsFromCertificate$ === "object");
assert(typeof RenewCertificateCommand === "function");
assert(typeof RenewCertificate$ === "object");
assert(typeof RequestCertificateCommand === "function");
assert(typeof RequestCertificate$ === "object");
assert(typeof ResendValidationEmailCommand === "function");
assert(typeof ResendValidationEmail$ === "object");
assert(typeof RevokeCertificateCommand === "function");
assert(typeof RevokeCertificate$ === "object");
assert(typeof SearchCertificatesCommand === "function");
assert(typeof SearchCertificates$ === "object");
assert(typeof UpdateCertificateOptionsCommand === "function");
assert(typeof UpdateCertificateOptions$ === "object");
// structural schemas
assert(typeof AcmCertificateMetadata$ === "object");
assert(typeof AcmCertificateMetadataFilter$ === "object");
assert(typeof AddTagsToCertificateRequest$ === "object");
assert(typeof CertificateDetail$ === "object");
assert(typeof CertificateFilter$ === "object");
assert(typeof CertificateFilterStatement$ === "object");
assert(typeof CertificateMetadata$ === "object");
assert(typeof CertificateOptions$ === "object");
assert(typeof CertificateSearchResult$ === "object");
assert(typeof CertificateSummary$ === "object");
assert(typeof CommonNameFilter$ === "object");
assert(typeof CustomAttribute$ === "object");
assert(typeof DeleteCertificateRequest$ === "object");
assert(typeof DescribeCertificateRequest$ === "object");
assert(typeof DescribeCertificateResponse$ === "object");
assert(typeof DistinguishedName$ === "object");
assert(typeof DnsNameFilter$ === "object");
assert(typeof DomainValidation$ === "object");
assert(typeof DomainValidationOption$ === "object");
assert(typeof ExpiryEventsConfiguration$ === "object");
assert(typeof ExportCertificateRequest$ === "object");
assert(typeof ExportCertificateResponse$ === "object");
assert(typeof ExtendedKeyUsage$ === "object");
assert(typeof Filters$ === "object");
assert(typeof GeneralName$ === "object");
assert(typeof GetAccountConfigurationResponse$ === "object");
assert(typeof GetCertificateRequest$ === "object");
assert(typeof GetCertificateResponse$ === "object");
assert(typeof HttpRedirect$ === "object");
assert(typeof ImportCertificateRequest$ === "object");
assert(typeof ImportCertificateResponse$ === "object");
assert(typeof KeyUsage$ === "object");
assert(typeof ListCertificatesRequest$ === "object");
assert(typeof ListCertificatesResponse$ === "object");
assert(typeof ListTagsForCertificateRequest$ === "object");
assert(typeof ListTagsForCertificateResponse$ === "object");
assert(typeof OtherName$ === "object");
assert(typeof PutAccountConfigurationRequest$ === "object");
assert(typeof RemoveTagsFromCertificateRequest$ === "object");
assert(typeof RenewalSummary$ === "object");
assert(typeof RenewCertificateRequest$ === "object");
assert(typeof RequestCertificateRequest$ === "object");
assert(typeof RequestCertificateResponse$ === "object");
assert(typeof ResendValidationEmailRequest$ === "object");
assert(typeof ResourceRecord$ === "object");
assert(typeof RevokeCertificateRequest$ === "object");
assert(typeof RevokeCertificateResponse$ === "object");
assert(typeof SearchCertificatesRequest$ === "object");
assert(typeof SearchCertificatesResponse$ === "object");
assert(typeof SubjectAlternativeNameFilter$ === "object");
assert(typeof SubjectFilter$ === "object");
assert(typeof Tag$ === "object");
assert(typeof ThrottlingReason$ === "object");
assert(typeof TimestampRange$ === "object");
assert(typeof UpdateCertificateOptionsRequest$ === "object");
assert(typeof X509AttributeFilter$ === "object");
assert(typeof X509Attributes$ === "object");
// enums
assert(typeof CertificateExport === "object");
assert(typeof CertificateManagedBy === "object");
assert(typeof CertificateStatus === "object");
assert(typeof CertificateTransparencyLoggingPreference === "object");
assert(typeof CertificateType === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof DomainStatus === "object");
assert(typeof ExtendedKeyUsageName === "object");
assert(typeof FailureReason === "object");
assert(typeof KeyAlgorithm === "object");
assert(typeof KeyUsageName === "object");
assert(typeof RecordType === "object");
assert(typeof RenewalEligibility === "object");
assert(typeof RenewalStatus === "object");
assert(typeof RevocationReason === "object");
assert(typeof SearchCertificatesSortBy === "object");
assert(typeof SearchCertificatesSortOrder === "object");
assert(typeof SortBy === "object");
assert(typeof SortOrder === "object");
assert(typeof ValidationMethod === "object");
// errors
assert(AccessDeniedException.prototype instanceof ACMServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ACMServiceException);
assert(typeof ConflictException$ === "object");
assert(InvalidArgsException.prototype instanceof ACMServiceException);
assert(typeof InvalidArgsException$ === "object");
assert(InvalidArnException.prototype instanceof ACMServiceException);
assert(typeof InvalidArnException$ === "object");
assert(InvalidDomainValidationOptionsException.prototype instanceof ACMServiceException);
assert(typeof InvalidDomainValidationOptionsException$ === "object");
assert(InvalidParameterException.prototype instanceof ACMServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidStateException.prototype instanceof ACMServiceException);
assert(typeof InvalidStateException$ === "object");
assert(InvalidTagException.prototype instanceof ACMServiceException);
assert(typeof InvalidTagException$ === "object");
assert(LimitExceededException.prototype instanceof ACMServiceException);
assert(typeof LimitExceededException$ === "object");
assert(RequestInProgressException.prototype instanceof ACMServiceException);
assert(typeof RequestInProgressException$ === "object");
assert(ResourceInUseException.prototype instanceof ACMServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ACMServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TagPolicyException.prototype instanceof ACMServiceException);
assert(typeof TagPolicyException$ === "object");
assert(ThrottlingException.prototype instanceof ACMServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof ACMServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof ACMServiceException);
assert(typeof ValidationException$ === "object");
assert(ACMServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCertificateValidated === "function");
assert(typeof waitUntilCertificateValidated === "function");
// paginators
assert(typeof paginateListCertificates === "function");
assert(typeof paginateSearchCertificates === "function");
console.log(`ACM index test passed.`);
