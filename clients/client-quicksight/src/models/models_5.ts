// smithy-typescript generated code
import type { VisualRole, VPCConnectionAvailabilityStatus, VPCConnectionResourceStatus } from "./enums";
import type { TopicIR, TopicTemplate } from "./models_2";

/**
 * @public
 */
export interface UpdateUserCustomPermissionResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface UpdateVPCConnectionRequest {
  /**
   * <p>The Amazon Web Services account ID of the account that contains the VPC connection that
   * 			you want to update.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the VPC connection that
   * 			you're updating. This ID is a unique identifier for each Amazon Web Services Region in an
   * 				Amazon Web Services account.</p>
   * @public
   */
  VPCConnectionId: string | undefined;

  /**
   * <p>The display name for the VPC connection.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of subnet IDs for the VPC connection.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of security group IDs for the VPC connection.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>A list of IP addresses of DNS resolver endpoints for the VPC connection.</p>
   * @public
   */
  DnsResolvers?: string[] | undefined;

  /**
   * <p>An IAM role associated with the VPC connection.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateVPCConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the VPC connection that you are updating. This ID is a unique identifier for each Amazon Web Services Region in anAmazon Web Services account.</p>
   * @public
   */
  VPCConnectionId?: string | undefined;

  /**
   * <p>The update status of the VPC connection's last update.</p>
   * @public
   */
  UpdateStatus?: VPCConnectionResourceStatus | undefined;

  /**
   * <p>The availability status of the VPC connection.</p>
   * @public
   */
  AvailabilityStatus?: VPCConnectionAvailabilityStatus | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * <p>The definition for a <code>TopicVisual</code>.</p>
 * @public
 */
export interface TopicVisual {
  /**
   * <p>The visual ID for the <code>TopicVisual</code>.</p>
   * @public
   */
  VisualId?: string | undefined;

  /**
   * <p>The role for the <code>TopicVisual</code>.</p>
   * @public
   */
  Role?: VisualRole | undefined;

  /**
   * <p>The ir for the <code>TopicVisual</code>.</p>
   * @public
   */
  Ir?: TopicIR | undefined;

  /**
   * <p>The supporting visuals for the <code>TopicVisual</code>.</p>
   * @public
   */
  SupportingVisuals?: TopicVisual[] | undefined;
}

/**
 * <p>The definition for a <code>CreateTopicReviewedAnswer</code>.</p>
 * @public
 */
export interface CreateTopicReviewedAnswer {
  /**
   * <p>The answer ID for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  AnswerId: string | undefined;

  /**
   * <p>The Dataset arn for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The Question to be created.</p>
   * @public
   */
  Question: string | undefined;

  /**
   * <p>The Mir for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  Mir?: TopicIR | undefined;

  /**
   * <p>The <code>PrimaryVisual</code> for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  PrimaryVisual?: TopicVisual | undefined;

  /**
   * <p>The template for the <code>CreateTopicReviewedAnswer</code>.</p>
   * @public
   */
  Template?: TopicTemplate | undefined;
}

/**
 * <p>The deinition for a <code>TopicReviewedAnswer</code>.</p>
 * @public
 */
export interface TopicReviewedAnswer {
  /**
   * <p>The Amazon Resource Name (ARN) of the reviewed answer.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The answer ID of the reviewed answer.</p>
   * @public
   */
  AnswerId: string | undefined;

  /**
   * <p>The Dataset ARN for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The question for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  Question: string | undefined;

  /**
   * <p>The mir for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  Mir?: TopicIR | undefined;

  /**
   * <p>The primary visual for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  PrimaryVisual?: TopicVisual | undefined;

  /**
   * <p>The template for the <code>TopicReviewedAnswer</code>.</p>
   * @public
   */
  Template?: TopicTemplate | undefined;
}

/**
 * @public
 */
export interface BatchCreateTopicReviewedAnswerRequest {
  /**
   * <p>The ID of the Amazon Web Services account that you want to create a reviewed answer in.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the topic reviewed answer that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId: string | undefined;

  /**
   * <p>The definition of the Answers to be created.</p>
   * @public
   */
  Answers: CreateTopicReviewedAnswer[] | undefined;
}

/**
 * @public
 */
export interface ListTopicReviewedAnswersResponse {
  /**
   * <p>The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   * @public
   */
  TopicId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The definition of all Answers in the topic.</p>
   * @public
   */
  Answers?: TopicReviewedAnswer[] | undefined;

  /**
   * <p>The HTTP status of the request.</p>
   * @public
   */
  Status?: number | undefined;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   * @public
   */
  RequestId?: string | undefined;
}
