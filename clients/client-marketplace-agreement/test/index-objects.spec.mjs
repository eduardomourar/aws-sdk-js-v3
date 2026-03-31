import {
  AcceptedTerm$,
  Acceptor$,
  AccessDeniedException,
  AccessDeniedException$,
  AgreementCancellationRequestReasonCode,
  AgreementCancellationRequestStatus,
  AgreementCancellationRequestSummary$,
  AgreementInvoiceLineItemGroupSummary$,
  AgreementStatus,
  AgreementViewSummary$,
  BatchCreateBillingAdjustmentError$,
  BatchCreateBillingAdjustmentItem$,
  BatchCreateBillingAdjustmentRequest$,
  BatchCreateBillingAdjustmentRequestCommand,
  BatchCreateBillingAdjustmentRequestEntry$,
  BatchCreateBillingAdjustmentRequestInput$,
  BatchCreateBillingAdjustmentRequestOutput$,
  BillingAdjustmentErrorCode,
  BillingAdjustmentReasonCode,
  BillingAdjustmentStatus,
  BillingAdjustmentSummary$,
  ByolPricingTerm$,
  CancelAgreementCancellationRequest$,
  CancelAgreementCancellationRequestCommand,
  CancelAgreementCancellationRequestInput$,
  CancelAgreementCancellationRequestOutput$,
  CancelAgreementPaymentRequest$,
  CancelAgreementPaymentRequestCommand,
  CancelAgreementPaymentRequestInput$,
  CancelAgreementPaymentRequestOutput$,
  ConfigurableUpfrontPricingTerm$,
  ConfigurableUpfrontPricingTermConfiguration$,
  ConfigurableUpfrontRateCardItem$,
  ConflictException,
  ConflictException$,
  Constraints$,
  DescribeAgreement$,
  DescribeAgreementCommand,
  DescribeAgreementInput$,
  DescribeAgreementOutput$,
  Dimension$,
  DocumentItem$,
  EstimatedCharges$,
  Filter$,
  FixedUpfrontPricingTerm$,
  FreeTrialPricingTerm$,
  GetAgreementCancellationRequest$,
  GetAgreementCancellationRequestCommand,
  GetAgreementCancellationRequestInput$,
  GetAgreementCancellationRequestOutput$,
  GetAgreementPaymentRequest$,
  GetAgreementPaymentRequestCommand,
  GetAgreementPaymentRequestInput$,
  GetAgreementPaymentRequestOutput$,
  GetAgreementTerms$,
  GetAgreementTermsCommand,
  GetAgreementTermsInput$,
  GetAgreementTermsOutput$,
  GetBillingAdjustmentRequest$,
  GetBillingAdjustmentRequestCommand,
  GetBillingAdjustmentRequestInput$,
  GetBillingAdjustmentRequestOutput$,
  GrantItem$,
  InternalServerException,
  InternalServerException$,
  InvoiceBillingPeriod$,
  InvoiceType,
  InvoicingEntity$,
  LegalTerm$,
  LineItemGroupBy,
  ListAgreementCancellationRequests$,
  ListAgreementCancellationRequestsCommand,
  ListAgreementCancellationRequestsInput$,
  ListAgreementCancellationRequestsOutput$,
  ListAgreementInvoiceLineItems$,
  ListAgreementInvoiceLineItemsCommand,
  ListAgreementInvoiceLineItemsInput$,
  ListAgreementInvoiceLineItemsOutput$,
  ListAgreementPaymentRequests$,
  ListAgreementPaymentRequestsCommand,
  ListAgreementPaymentRequestsInput$,
  ListAgreementPaymentRequestsOutput$,
  ListBillingAdjustmentRequests$,
  ListBillingAdjustmentRequestsCommand,
  ListBillingAdjustmentRequestsInput$,
  ListBillingAdjustmentRequestsOutput$,
  MarketplaceAgreement,
  MarketplaceAgreementClient,
  MarketplaceAgreementServiceException,
  paginateGetAgreementTerms,
  paginateListAgreementCancellationRequests,
  paginateListAgreementInvoiceLineItems,
  paginateListAgreementPaymentRequests,
  paginateListBillingAdjustmentRequests,
  paginateSearchAgreements,
  PaymentRequestApprovalStrategy,
  PaymentRequestStatus,
  PaymentRequestSummary$,
  PaymentScheduleTerm$,
  PricingCurrencyAmount$,
  ProposalSummary$,
  Proposer$,
  RateCardItem$,
  RecurringPaymentTerm$,
  RenewalTerm$,
  RenewalTermConfiguration$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ScheduleItem$,
  SearchAgreements$,
  SearchAgreementsCommand,
  SearchAgreementsInput$,
  SearchAgreementsOutput$,
  Selector$,
  SendAgreementCancellationRequest$,
  SendAgreementCancellationRequestCommand,
  SendAgreementCancellationRequestInput$,
  SendAgreementCancellationRequestOutput$,
  SendAgreementPaymentRequest$,
  SendAgreementPaymentRequestCommand,
  SendAgreementPaymentRequestInput$,
  SendAgreementPaymentRequestOutput$,
  Sort$,
  SortOrder,
  SupportTerm$,
  ThrottlingException,
  ThrottlingException$,
  UsageBasedPricingTerm$,
  UsageBasedRateCardItem$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  ValidityTerm$,
  VariablePaymentTerm$,
  VariablePaymentTermConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceAgreementClient === "function");
assert(typeof MarketplaceAgreement === "function");
// commands
assert(typeof BatchCreateBillingAdjustmentRequestCommand === "function");
assert(typeof BatchCreateBillingAdjustmentRequest$ === "object");
assert(typeof CancelAgreementCancellationRequestCommand === "function");
assert(typeof CancelAgreementCancellationRequest$ === "object");
assert(typeof CancelAgreementPaymentRequestCommand === "function");
assert(typeof CancelAgreementPaymentRequest$ === "object");
assert(typeof DescribeAgreementCommand === "function");
assert(typeof DescribeAgreement$ === "object");
assert(typeof GetAgreementCancellationRequestCommand === "function");
assert(typeof GetAgreementCancellationRequest$ === "object");
assert(typeof GetAgreementPaymentRequestCommand === "function");
assert(typeof GetAgreementPaymentRequest$ === "object");
assert(typeof GetAgreementTermsCommand === "function");
assert(typeof GetAgreementTerms$ === "object");
assert(typeof GetBillingAdjustmentRequestCommand === "function");
assert(typeof GetBillingAdjustmentRequest$ === "object");
assert(typeof ListAgreementCancellationRequestsCommand === "function");
assert(typeof ListAgreementCancellationRequests$ === "object");
assert(typeof ListAgreementInvoiceLineItemsCommand === "function");
assert(typeof ListAgreementInvoiceLineItems$ === "object");
assert(typeof ListAgreementPaymentRequestsCommand === "function");
assert(typeof ListAgreementPaymentRequests$ === "object");
assert(typeof ListBillingAdjustmentRequestsCommand === "function");
assert(typeof ListBillingAdjustmentRequests$ === "object");
assert(typeof SearchAgreementsCommand === "function");
assert(typeof SearchAgreements$ === "object");
assert(typeof SendAgreementCancellationRequestCommand === "function");
assert(typeof SendAgreementCancellationRequest$ === "object");
assert(typeof SendAgreementPaymentRequestCommand === "function");
assert(typeof SendAgreementPaymentRequest$ === "object");
// structural schemas
assert(typeof AcceptedTerm$ === "object");
assert(typeof Acceptor$ === "object");
assert(typeof AgreementCancellationRequestSummary$ === "object");
assert(typeof AgreementInvoiceLineItemGroupSummary$ === "object");
assert(typeof AgreementViewSummary$ === "object");
assert(typeof BatchCreateBillingAdjustmentError$ === "object");
assert(typeof BatchCreateBillingAdjustmentItem$ === "object");
assert(typeof BatchCreateBillingAdjustmentRequestEntry$ === "object");
assert(typeof BatchCreateBillingAdjustmentRequestInput$ === "object");
assert(typeof BatchCreateBillingAdjustmentRequestOutput$ === "object");
assert(typeof BillingAdjustmentSummary$ === "object");
assert(typeof ByolPricingTerm$ === "object");
assert(typeof CancelAgreementCancellationRequestInput$ === "object");
assert(typeof CancelAgreementCancellationRequestOutput$ === "object");
assert(typeof CancelAgreementPaymentRequestInput$ === "object");
assert(typeof CancelAgreementPaymentRequestOutput$ === "object");
assert(typeof ConfigurableUpfrontPricingTerm$ === "object");
assert(typeof ConfigurableUpfrontPricingTermConfiguration$ === "object");
assert(typeof ConfigurableUpfrontRateCardItem$ === "object");
assert(typeof Constraints$ === "object");
assert(typeof DescribeAgreementInput$ === "object");
assert(typeof DescribeAgreementOutput$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DocumentItem$ === "object");
assert(typeof EstimatedCharges$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FixedUpfrontPricingTerm$ === "object");
assert(typeof FreeTrialPricingTerm$ === "object");
assert(typeof GetAgreementCancellationRequestInput$ === "object");
assert(typeof GetAgreementCancellationRequestOutput$ === "object");
assert(typeof GetAgreementPaymentRequestInput$ === "object");
assert(typeof GetAgreementPaymentRequestOutput$ === "object");
assert(typeof GetAgreementTermsInput$ === "object");
assert(typeof GetAgreementTermsOutput$ === "object");
assert(typeof GetBillingAdjustmentRequestInput$ === "object");
assert(typeof GetBillingAdjustmentRequestOutput$ === "object");
assert(typeof GrantItem$ === "object");
assert(typeof InvoiceBillingPeriod$ === "object");
assert(typeof InvoicingEntity$ === "object");
assert(typeof LegalTerm$ === "object");
assert(typeof ListAgreementCancellationRequestsInput$ === "object");
assert(typeof ListAgreementCancellationRequestsOutput$ === "object");
assert(typeof ListAgreementInvoiceLineItemsInput$ === "object");
assert(typeof ListAgreementInvoiceLineItemsOutput$ === "object");
assert(typeof ListAgreementPaymentRequestsInput$ === "object");
assert(typeof ListAgreementPaymentRequestsOutput$ === "object");
assert(typeof ListBillingAdjustmentRequestsInput$ === "object");
assert(typeof ListBillingAdjustmentRequestsOutput$ === "object");
assert(typeof PaymentRequestSummary$ === "object");
assert(typeof PaymentScheduleTerm$ === "object");
assert(typeof PricingCurrencyAmount$ === "object");
assert(typeof ProposalSummary$ === "object");
assert(typeof Proposer$ === "object");
assert(typeof RateCardItem$ === "object");
assert(typeof RecurringPaymentTerm$ === "object");
assert(typeof RenewalTerm$ === "object");
assert(typeof RenewalTermConfiguration$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ScheduleItem$ === "object");
assert(typeof SearchAgreementsInput$ === "object");
assert(typeof SearchAgreementsOutput$ === "object");
assert(typeof Selector$ === "object");
assert(typeof SendAgreementCancellationRequestInput$ === "object");
assert(typeof SendAgreementCancellationRequestOutput$ === "object");
assert(typeof SendAgreementPaymentRequestInput$ === "object");
assert(typeof SendAgreementPaymentRequestOutput$ === "object");
assert(typeof Sort$ === "object");
assert(typeof SupportTerm$ === "object");
assert(typeof UsageBasedPricingTerm$ === "object");
assert(typeof UsageBasedRateCardItem$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof ValidityTerm$ === "object");
assert(typeof VariablePaymentTerm$ === "object");
assert(typeof VariablePaymentTermConfiguration$ === "object");
// enums
assert(typeof AgreementCancellationRequestReasonCode === "object");
assert(typeof AgreementCancellationRequestStatus === "object");
assert(typeof AgreementStatus === "object");
assert(typeof BillingAdjustmentErrorCode === "object");
assert(typeof BillingAdjustmentReasonCode === "object");
assert(typeof BillingAdjustmentStatus === "object");
assert(typeof InvoiceType === "object");
assert(typeof LineItemGroupBy === "object");
assert(typeof PaymentRequestApprovalStrategy === "object");
assert(typeof PaymentRequestStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof SortOrder === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ValidationException$ === "object");
assert(MarketplaceAgreementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAgreementTerms === "function");
assert(typeof paginateListAgreementCancellationRequests === "function");
assert(typeof paginateListAgreementInvoiceLineItems === "function");
assert(typeof paginateListAgreementPaymentRequests === "function");
assert(typeof paginateListBillingAdjustmentRequests === "function");
assert(typeof paginateSearchAgreements === "function");
console.log(`MarketplaceAgreement index test passed.`);
