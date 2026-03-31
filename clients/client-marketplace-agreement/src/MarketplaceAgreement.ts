// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchCreateBillingAdjustmentRequestCommandInput,
  type BatchCreateBillingAdjustmentRequestCommandOutput,
  BatchCreateBillingAdjustmentRequestCommand,
} from "./commands/BatchCreateBillingAdjustmentRequestCommand";
import {
  type CancelAgreementCancellationRequestCommandInput,
  type CancelAgreementCancellationRequestCommandOutput,
  CancelAgreementCancellationRequestCommand,
} from "./commands/CancelAgreementCancellationRequestCommand";
import {
  type CancelAgreementPaymentRequestCommandInput,
  type CancelAgreementPaymentRequestCommandOutput,
  CancelAgreementPaymentRequestCommand,
} from "./commands/CancelAgreementPaymentRequestCommand";
import {
  type DescribeAgreementCommandInput,
  type DescribeAgreementCommandOutput,
  DescribeAgreementCommand,
} from "./commands/DescribeAgreementCommand";
import {
  type GetAgreementCancellationRequestCommandInput,
  type GetAgreementCancellationRequestCommandOutput,
  GetAgreementCancellationRequestCommand,
} from "./commands/GetAgreementCancellationRequestCommand";
import {
  type GetAgreementPaymentRequestCommandInput,
  type GetAgreementPaymentRequestCommandOutput,
  GetAgreementPaymentRequestCommand,
} from "./commands/GetAgreementPaymentRequestCommand";
import {
  type GetAgreementTermsCommandInput,
  type GetAgreementTermsCommandOutput,
  GetAgreementTermsCommand,
} from "./commands/GetAgreementTermsCommand";
import {
  type GetBillingAdjustmentRequestCommandInput,
  type GetBillingAdjustmentRequestCommandOutput,
  GetBillingAdjustmentRequestCommand,
} from "./commands/GetBillingAdjustmentRequestCommand";
import {
  type ListAgreementCancellationRequestsCommandInput,
  type ListAgreementCancellationRequestsCommandOutput,
  ListAgreementCancellationRequestsCommand,
} from "./commands/ListAgreementCancellationRequestsCommand";
import {
  type ListAgreementInvoiceLineItemsCommandInput,
  type ListAgreementInvoiceLineItemsCommandOutput,
  ListAgreementInvoiceLineItemsCommand,
} from "./commands/ListAgreementInvoiceLineItemsCommand";
import {
  type ListAgreementPaymentRequestsCommandInput,
  type ListAgreementPaymentRequestsCommandOutput,
  ListAgreementPaymentRequestsCommand,
} from "./commands/ListAgreementPaymentRequestsCommand";
import {
  type ListBillingAdjustmentRequestsCommandInput,
  type ListBillingAdjustmentRequestsCommandOutput,
  ListBillingAdjustmentRequestsCommand,
} from "./commands/ListBillingAdjustmentRequestsCommand";
import {
  type SearchAgreementsCommandInput,
  type SearchAgreementsCommandOutput,
  SearchAgreementsCommand,
} from "./commands/SearchAgreementsCommand";
import {
  type SendAgreementCancellationRequestCommandInput,
  type SendAgreementCancellationRequestCommandOutput,
  SendAgreementCancellationRequestCommand,
} from "./commands/SendAgreementCancellationRequestCommand";
import {
  type SendAgreementPaymentRequestCommandInput,
  type SendAgreementPaymentRequestCommandOutput,
  SendAgreementPaymentRequestCommand,
} from "./commands/SendAgreementPaymentRequestCommand";
import { MarketplaceAgreementClient } from "./MarketplaceAgreementClient";
import { paginateGetAgreementTerms } from "./pagination/GetAgreementTermsPaginator";
import { paginateListAgreementCancellationRequests } from "./pagination/ListAgreementCancellationRequestsPaginator";
import { paginateListAgreementInvoiceLineItems } from "./pagination/ListAgreementInvoiceLineItemsPaginator";
import { paginateListAgreementPaymentRequests } from "./pagination/ListAgreementPaymentRequestsPaginator";
import { paginateListBillingAdjustmentRequests } from "./pagination/ListBillingAdjustmentRequestsPaginator";
import { paginateSearchAgreements } from "./pagination/SearchAgreementsPaginator";

const commands = {
  BatchCreateBillingAdjustmentRequestCommand,
  CancelAgreementCancellationRequestCommand,
  CancelAgreementPaymentRequestCommand,
  DescribeAgreementCommand,
  GetAgreementCancellationRequestCommand,
  GetAgreementPaymentRequestCommand,
  GetAgreementTermsCommand,
  GetBillingAdjustmentRequestCommand,
  ListAgreementCancellationRequestsCommand,
  ListAgreementInvoiceLineItemsCommand,
  ListAgreementPaymentRequestsCommand,
  ListBillingAdjustmentRequestsCommand,
  SearchAgreementsCommand,
  SendAgreementCancellationRequestCommand,
  SendAgreementPaymentRequestCommand,
};
const paginators = {
  paginateGetAgreementTerms,
  paginateListAgreementCancellationRequests,
  paginateListAgreementInvoiceLineItems,
  paginateListAgreementPaymentRequests,
  paginateListBillingAdjustmentRequests,
  paginateSearchAgreements,
};

export interface MarketplaceAgreement {
  /**
   * @see {@link BatchCreateBillingAdjustmentRequestCommand}
   */
  batchCreateBillingAdjustmentRequest(
    args: BatchCreateBillingAdjustmentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateBillingAdjustmentRequestCommandOutput>;
  batchCreateBillingAdjustmentRequest(
    args: BatchCreateBillingAdjustmentRequestCommandInput,
    cb: (err: any, data?: BatchCreateBillingAdjustmentRequestCommandOutput) => void
  ): void;
  batchCreateBillingAdjustmentRequest(
    args: BatchCreateBillingAdjustmentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateBillingAdjustmentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAgreementCancellationRequestCommand}
   */
  cancelAgreementCancellationRequest(
    args: CancelAgreementCancellationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAgreementCancellationRequestCommandOutput>;
  cancelAgreementCancellationRequest(
    args: CancelAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: CancelAgreementCancellationRequestCommandOutput) => void
  ): void;
  cancelAgreementCancellationRequest(
    args: CancelAgreementCancellationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAgreementPaymentRequestCommand}
   */
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAgreementPaymentRequestCommandOutput>;
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: CancelAgreementPaymentRequestCommandOutput) => void
  ): void;
  cancelAgreementPaymentRequest(
    args: CancelAgreementPaymentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgreementCommand}
   */
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgreementCommandOutput>;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;
  describeAgreement(
    args: DescribeAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementCancellationRequestCommand}
   */
  getAgreementCancellationRequest(
    args: GetAgreementCancellationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgreementCancellationRequestCommandOutput>;
  getAgreementCancellationRequest(
    args: GetAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: GetAgreementCancellationRequestCommandOutput) => void
  ): void;
  getAgreementCancellationRequest(
    args: GetAgreementCancellationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementPaymentRequestCommand}
   */
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgreementPaymentRequestCommandOutput>;
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: GetAgreementPaymentRequestCommandOutput) => void
  ): void;
  getAgreementPaymentRequest(
    args: GetAgreementPaymentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementTermsCommand}
   */
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgreementTermsCommandOutput>;
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    cb: (err: any, data?: GetAgreementTermsCommandOutput) => void
  ): void;
  getAgreementTerms(
    args: GetAgreementTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgreementTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillingAdjustmentRequestCommand}
   */
  getBillingAdjustmentRequest(
    args: GetBillingAdjustmentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillingAdjustmentRequestCommandOutput>;
  getBillingAdjustmentRequest(
    args: GetBillingAdjustmentRequestCommandInput,
    cb: (err: any, data?: GetBillingAdjustmentRequestCommandOutput) => void
  ): void;
  getBillingAdjustmentRequest(
    args: GetBillingAdjustmentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillingAdjustmentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementCancellationRequestsCommand}
   */
  listAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgreementCancellationRequestsCommandOutput>;
  listAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    cb: (err: any, data?: ListAgreementCancellationRequestsCommandOutput) => void
  ): void;
  listAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgreementCancellationRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementInvoiceLineItemsCommand}
   */
  listAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgreementInvoiceLineItemsCommandOutput>;
  listAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    cb: (err: any, data?: ListAgreementInvoiceLineItemsCommandOutput) => void
  ): void;
  listAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgreementInvoiceLineItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgreementPaymentRequestsCommand}
   */
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgreementPaymentRequestsCommandOutput>;
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    cb: (err: any, data?: ListAgreementPaymentRequestsCommandOutput) => void
  ): void;
  listAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgreementPaymentRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingAdjustmentRequestsCommand}
   */
  listBillingAdjustmentRequests(): Promise<ListBillingAdjustmentRequestsCommandOutput>;
  listBillingAdjustmentRequests(
    args: ListBillingAdjustmentRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingAdjustmentRequestsCommandOutput>;
  listBillingAdjustmentRequests(
    args: ListBillingAdjustmentRequestsCommandInput,
    cb: (err: any, data?: ListBillingAdjustmentRequestsCommandOutput) => void
  ): void;
  listBillingAdjustmentRequests(
    args: ListBillingAdjustmentRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingAdjustmentRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAgreementsCommand}
   */
  searchAgreements(): Promise<SearchAgreementsCommandOutput>;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAgreementsCommandOutput>;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    cb: (err: any, data?: SearchAgreementsCommandOutput) => void
  ): void;
  searchAgreements(
    args: SearchAgreementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAgreementsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAgreementCancellationRequestCommand}
   */
  sendAgreementCancellationRequest(
    args: SendAgreementCancellationRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAgreementCancellationRequestCommandOutput>;
  sendAgreementCancellationRequest(
    args: SendAgreementCancellationRequestCommandInput,
    cb: (err: any, data?: SendAgreementCancellationRequestCommandOutput) => void
  ): void;
  sendAgreementCancellationRequest(
    args: SendAgreementCancellationRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAgreementCancellationRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAgreementPaymentRequestCommand}
   */
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAgreementPaymentRequestCommandOutput>;
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    cb: (err: any, data?: SendAgreementPaymentRequestCommandOutput) => void
  ): void;
  sendAgreementPaymentRequest(
    args: SendAgreementPaymentRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAgreementPaymentRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgreementTermsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAgreementTermsCommandOutput}.
   */
  paginateGetAgreementTerms(
    args: GetAgreementTermsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAgreementTermsCommandOutput>;

  /**
   * @see {@link ListAgreementCancellationRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementCancellationRequestsCommandOutput}.
   */
  paginateListAgreementCancellationRequests(
    args: ListAgreementCancellationRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementCancellationRequestsCommandOutput>;

  /**
   * @see {@link ListAgreementInvoiceLineItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementInvoiceLineItemsCommandOutput}.
   */
  paginateListAgreementInvoiceLineItems(
    args: ListAgreementInvoiceLineItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementInvoiceLineItemsCommandOutput>;

  /**
   * @see {@link ListAgreementPaymentRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgreementPaymentRequestsCommandOutput}.
   */
  paginateListAgreementPaymentRequests(
    args: ListAgreementPaymentRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgreementPaymentRequestsCommandOutput>;

  /**
   * @see {@link ListBillingAdjustmentRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillingAdjustmentRequestsCommandOutput}.
   */
  paginateListBillingAdjustmentRequests(
    args?: ListBillingAdjustmentRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillingAdjustmentRequestsCommandOutput>;

  /**
   * @see {@link SearchAgreementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAgreementsCommandOutput}.
   */
  paginateSearchAgreements(
    args?: SearchAgreementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAgreementsCommandOutput>;
}

/**
 * <p>AWS Marketplace is a curated digital catalog that customers can use to find, buy, deploy, and manage third-party software, data, and services to build solutions and run their businesses. The AWS Marketplace Agreement Service provides an API interface that helps AWS Marketplace sellers manage their product-related agreements, including listing, searching, and filtering agreements.</p> <p>To manage agreements in AWS Marketplace, you must ensure that your AWS Identity and Access Management (IAM) policies and roles are set up. The user must have the required policies/permissions that allow them to carry out the actions in AWS:</p> <ul> <li> <p> <code>DescribeAgreement</code> – Grants permission to users to obtain detailed meta data about any of their agreements.</p> </li> <li> <p> <code>GetAgreementTerms</code> – Grants permission to users to obtain details about the terms of an agreement.</p> </li> <li> <p> <code>SearchAgreements</code> – Grants permission to users to search through all their agreements.</p> </li> </ul>
 * @public
 */
export class MarketplaceAgreement extends MarketplaceAgreementClient implements MarketplaceAgreement {}
createAggregatedClient(commands, MarketplaceAgreement, { paginators });
