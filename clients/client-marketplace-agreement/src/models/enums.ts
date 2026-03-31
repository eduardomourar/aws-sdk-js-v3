// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const PaymentRequestApprovalStrategy = {
  AUTO_APPROVE_ON_EXPIRATION: "AUTO_APPROVE_ON_EXPIRATION",
  WAIT_FOR_APPROVAL: "WAIT_FOR_APPROVAL",
} as const;
/**
 * @public
 */
export type PaymentRequestApprovalStrategy =
  (typeof PaymentRequestApprovalStrategy)[keyof typeof PaymentRequestApprovalStrategy];

/**
 * @public
 * @enum
 */
export const AgreementCancellationRequestReasonCode = {
  ALTERNATIVE_PROCUREMENT_CHANNEL: "ALTERNATIVE_PROCUREMENT_CHANNEL",
  BUYER_DISSATISFACTION: "BUYER_DISSATISFACTION",
  INCORRECT_TERMS_ACCEPTED: "INCORRECT_TERMS_ACCEPTED",
  OTHER: "OTHER",
  PRODUCT_DISCONTINUED: "PRODUCT_DISCONTINUED",
  REPLACING_AGREEMENT: "REPLACING_AGREEMENT",
  TEST_AGREEMENT: "TEST_AGREEMENT",
  UNINTENDED_RENEWAL: "UNINTENDED_RENEWAL",
} as const;
/**
 * @public
 */
export type AgreementCancellationRequestReasonCode =
  (typeof AgreementCancellationRequestReasonCode)[keyof typeof AgreementCancellationRequestReasonCode];

/**
 * @public
 * @enum
 */
export const AgreementCancellationRequestStatus = {
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  REJECTED: "REJECTED",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type AgreementCancellationRequestStatus =
  (typeof AgreementCancellationRequestStatus)[keyof typeof AgreementCancellationRequestStatus];

/**
 * @public
 * @enum
 */
export const InvoiceType = {
  CREDIT_MEMO: "CREDIT_MEMO",
  INVOICE: "INVOICE",
} as const;
/**
 * @public
 */
export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType];

/**
 * @public
 * @enum
 */
export const AgreementStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  CANCELLED: "CANCELLED",
  EXPIRED: "EXPIRED",
  RENEWED: "RENEWED",
  REPLACED: "REPLACED",
  ROLLED_BACK: "ROLLED_BACK",
  SUPERSEDED: "SUPERSEDED",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type AgreementStatus = (typeof AgreementStatus)[keyof typeof AgreementStatus];

/**
 * @public
 * @enum
 */
export const BillingAdjustmentReasonCode = {
  ALTERNATIVE_PROCUREMENT_CHANNEL: "ALTERNATIVE_PROCUREMENT_CHANNEL",
  BUYER_DISSATISFACTION: "BUYER_DISSATISFACTION",
  INCORRECT_METERING: "INCORRECT_METERING",
  INCORRECT_TERMS_ACCEPTED: "INCORRECT_TERMS_ACCEPTED",
  OTHER: "OTHER",
  TEST_ENVIRONMENT_CHARGES: "TEST_ENVIRONMENT_CHARGES",
  UNINTENDED_RENEWAL: "UNINTENDED_RENEWAL",
} as const;
/**
 * @public
 */
export type BillingAdjustmentReasonCode =
  (typeof BillingAdjustmentReasonCode)[keyof typeof BillingAdjustmentReasonCode];

/**
 * @public
 * @enum
 */
export const BillingAdjustmentErrorCode = {
  CONFLICT_EXCEPTION: "CONFLICT_EXCEPTION",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;
/**
 * @public
 */
export type BillingAdjustmentErrorCode = (typeof BillingAdjustmentErrorCode)[keyof typeof BillingAdjustmentErrorCode];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AGREEMENT: "Agreement",
  CHARGE: "Charge",
  PAYMENT_REQUEST: "PaymentRequest",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  INVALID_AGREEMENT_ID: "INVALID_AGREEMENT_ID",
  INVALID_CATALOG: "INVALID_CATALOG",
  INVALID_CHARGE_AMOUNT: "INVALID_CHARGE_AMOUNT",
  INVALID_DESCRIPTION: "INVALID_DESCRIPTION",
  INVALID_FILTER_NAME: "INVALID_FILTER_NAME",
  INVALID_FILTER_VALUES: "INVALID_FILTER_VALUES",
  INVALID_MAX_RESULTS: "INVALID_MAX_RESULTS",
  INVALID_NAME: "INVALID_NAME",
  INVALID_NEXT_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_PARTY_TYPE: "INVALID_PARTY_TYPE",
  INVALID_PAYMENT_REQUEST_ID: "INVALID_PAYMENT_REQUEST_ID",
  INVALID_PAYMENT_REQUEST_STATUS: "INVALID_PAYMENT_REQUEST_STATUS",
  INVALID_REJECTION_REASON: "INVALID_REJECTION_REASON",
  INVALID_SORT_BY: "INVALID_SORT_BY",
  INVALID_SORT_ORDER: "INVALID_SORT_ORDER",
  INVALID_TERM_ID: "INVALID_TERM_ID",
  MISSING_AGREEMENT_ID: "MISSING_AGREEMENT_ID",
  MISSING_CHARGE_AMOUNT: "MISSING_CHARGE_AMOUNT",
  MISSING_NAME: "MISSING_NAME",
  MISSING_PARTY_TYPE: "MISSING_PARTY_TYPE",
  MISSING_PAYMENT_REQUEST_ID: "MISSING_PAYMENT_REQUEST_ID",
  MISSING_TERM_ID: "MISSING_TERM_ID",
  OTHER: "OTHER",
  UNSUPPORTED_FILTERS: "UNSUPPORTED_FILTERS",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const PaymentRequestStatus = {
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  REJECTED: "REJECTED",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type PaymentRequestStatus = (typeof PaymentRequestStatus)[keyof typeof PaymentRequestStatus];

/**
 * @public
 * @enum
 */
export const BillingAdjustmentStatus = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type BillingAdjustmentStatus = (typeof BillingAdjustmentStatus)[keyof typeof BillingAdjustmentStatus];

/**
 * @public
 * @enum
 */
export const LineItemGroupBy = {
  INVOICE_ID: "INVOICE_ID",
} as const;
/**
 * @public
 */
export type LineItemGroupBy = (typeof LineItemGroupBy)[keyof typeof LineItemGroupBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
