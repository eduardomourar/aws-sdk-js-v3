// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDistributionWithStagingConfigRequest,
  UpdateDistributionWithStagingConfigResult,
  UpdateDistributionWithStagingConfigResultFilterSensitiveLog,
} from "../models/models_2";
import {
  de_UpdateDistributionWithStagingConfigCommand,
  se_UpdateDistributionWithStagingConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDistributionWithStagingConfigCommand}.
 */
export interface UpdateDistributionWithStagingConfigCommandInput extends UpdateDistributionWithStagingConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDistributionWithStagingConfigCommand}.
 */
export interface UpdateDistributionWithStagingConfigCommandOutput
  extends UpdateDistributionWithStagingConfigResult,
    __MetadataBearer {}

/**
 * <p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p> <p>This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDistributionWithStagingConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDistributionWithStagingConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateDistributionWithStagingConfigRequest
 *   Id: "STRING_VALUE", // required
 *   StagingDistributionId: "STRING_VALUE",
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateDistributionWithStagingConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDistributionWithStagingConfigResult
 * //   Distribution: { // Distribution
 * //     Id: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     InProgressInvalidationBatches: Number("int"), // required
 * //     DomainName: "STRING_VALUE", // required
 * //     ActiveTrustedSigners: { // ActiveTrustedSigners
 * //       Enabled: true || false, // required
 * //       Quantity: Number("int"), // required
 * //       Items: [ // SignerList
 * //         { // Signer
 * //           AwsAccountNumber: "STRING_VALUE",
 * //           KeyPairIds: { // KeyPairIds
 * //             Quantity: Number("int"), // required
 * //             Items: [ // KeyPairIdList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     ActiveTrustedKeyGroups: { // ActiveTrustedKeyGroups
 * //       Enabled: true || false, // required
 * //       Quantity: Number("int"), // required
 * //       Items: [ // KGKeyPairIdsList
 * //         { // KGKeyPairIds
 * //           KeyGroupId: "STRING_VALUE",
 * //           KeyPairIds: {
 * //             Quantity: Number("int"), // required
 * //             Items: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     DistributionConfig: { // DistributionConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Aliases: { // Aliases
 * //         Quantity: Number("int"), // required
 * //         Items: [ // AliasList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DefaultRootObject: "STRING_VALUE",
 * //       Origins: { // Origins
 * //         Quantity: Number("int"), // required
 * //         Items: [ // OriginList // required
 * //           { // Origin
 * //             Id: "STRING_VALUE", // required
 * //             DomainName: "STRING_VALUE", // required
 * //             OriginPath: "STRING_VALUE",
 * //             CustomHeaders: { // CustomHeaders
 * //               Quantity: Number("int"), // required
 * //               Items: [ // OriginCustomHeadersList
 * //                 { // OriginCustomHeader
 * //                   HeaderName: "STRING_VALUE", // required
 * //                   HeaderValue: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             S3OriginConfig: { // S3OriginConfig
 * //               OriginAccessIdentity: "STRING_VALUE", // required
 * //               OriginReadTimeout: Number("int"),
 * //             },
 * //             CustomOriginConfig: { // CustomOriginConfig
 * //               HTTPPort: Number("int"), // required
 * //               HTTPSPort: Number("int"), // required
 * //               OriginProtocolPolicy: "http-only" || "match-viewer" || "https-only", // required
 * //               OriginSslProtocols: { // OriginSslProtocols
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // SslProtocolsList // required
 * //                   "SSLv3" || "TLSv1" || "TLSv1.1" || "TLSv1.2",
 * //                 ],
 * //               },
 * //               OriginReadTimeout: Number("int"),
 * //               OriginKeepaliveTimeout: Number("int"),
 * //             },
 * //             VpcOriginConfig: { // VpcOriginConfig
 * //               VpcOriginId: "STRING_VALUE", // required
 * //               OriginReadTimeout: Number("int"),
 * //               OriginKeepaliveTimeout: Number("int"),
 * //             },
 * //             ConnectionAttempts: Number("int"),
 * //             ConnectionTimeout: Number("int"),
 * //             ResponseCompletionTimeout: Number("int"),
 * //             OriginShield: { // OriginShield
 * //               Enabled: true || false, // required
 * //               OriginShieldRegion: "STRING_VALUE",
 * //             },
 * //             OriginAccessControlId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       OriginGroups: { // OriginGroups
 * //         Quantity: Number("int"), // required
 * //         Items: [ // OriginGroupList
 * //           { // OriginGroup
 * //             Id: "STRING_VALUE", // required
 * //             FailoverCriteria: { // OriginGroupFailoverCriteria
 * //               StatusCodes: { // StatusCodes
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // StatusCodeList // required
 * //                   Number("int"),
 * //                 ],
 * //               },
 * //             },
 * //             Members: { // OriginGroupMembers
 * //               Quantity: Number("int"), // required
 * //               Items: [ // OriginGroupMemberList // required
 * //                 { // OriginGroupMember
 * //                   OriginId: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             SelectionCriteria: "default" || "media-quality-based",
 * //           },
 * //         ],
 * //       },
 * //       DefaultCacheBehavior: { // DefaultCacheBehavior
 * //         TargetOriginId: "STRING_VALUE", // required
 * //         TrustedSigners: { // TrustedSigners
 * //           Enabled: true || false, // required
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AwsAccountNumberList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         TrustedKeyGroups: { // TrustedKeyGroups
 * //           Enabled: true || false, // required
 * //           Quantity: Number("int"), // required
 * //           Items: [ // TrustedKeyGroupIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 * //         AllowedMethods: { // AllowedMethods
 * //           Quantity: Number("int"), // required
 * //           Items: [ // MethodsList // required
 * //             "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 * //           ],
 * //           CachedMethods: { // CachedMethods
 * //             Quantity: Number("int"), // required
 * //             Items: [ // required
 * //               "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "OPTIONS" || "DELETE",
 * //             ],
 * //           },
 * //         },
 * //         SmoothStreaming: true || false,
 * //         Compress: true || false,
 * //         LambdaFunctionAssociations: { // LambdaFunctionAssociations
 * //           Quantity: Number("int"), // required
 * //           Items: [ // LambdaFunctionAssociationList
 * //             { // LambdaFunctionAssociation
 * //               LambdaFunctionARN: "STRING_VALUE", // required
 * //               EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //               IncludeBody: true || false,
 * //             },
 * //           ],
 * //         },
 * //         FunctionAssociations: { // FunctionAssociations
 * //           Quantity: Number("int"), // required
 * //           Items: [ // FunctionAssociationList
 * //             { // FunctionAssociation
 * //               FunctionARN: "STRING_VALUE", // required
 * //               EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //             },
 * //           ],
 * //         },
 * //         FieldLevelEncryptionId: "STRING_VALUE",
 * //         RealtimeLogConfigArn: "STRING_VALUE",
 * //         CachePolicyId: "STRING_VALUE",
 * //         OriginRequestPolicyId: "STRING_VALUE",
 * //         ResponseHeadersPolicyId: "STRING_VALUE",
 * //         GrpcConfig: { // GrpcConfig
 * //           Enabled: true || false, // required
 * //         },
 * //         ForwardedValues: { // ForwardedValues
 * //           QueryString: true || false, // required
 * //           Cookies: { // CookiePreference
 * //             Forward: "none" || "whitelist" || "all", // required
 * //             WhitelistedNames: { // CookieNames
 * //               Quantity: Number("int"), // required
 * //               Items: [ // CookieNameList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           Headers: { // Headers
 * //             Quantity: Number("int"), // required
 * //             Items: [ // HeaderList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           QueryStringCacheKeys: { // QueryStringCacheKeys
 * //             Quantity: Number("int"), // required
 * //             Items: [ // QueryStringCacheKeysList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         MinTTL: Number("long"),
 * //         DefaultTTL: Number("long"),
 * //         MaxTTL: Number("long"),
 * //       },
 * //       CacheBehaviors: { // CacheBehaviors
 * //         Quantity: Number("int"), // required
 * //         Items: [ // CacheBehaviorList
 * //           { // CacheBehavior
 * //             PathPattern: "STRING_VALUE", // required
 * //             TargetOriginId: "STRING_VALUE", // required
 * //             TrustedSigners: {
 * //               Enabled: true || false, // required
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             TrustedKeyGroups: {
 * //               Enabled: true || false, // required
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             ViewerProtocolPolicy: "allow-all" || "https-only" || "redirect-to-https", // required
 * //             AllowedMethods: {
 * //               Quantity: Number("int"), // required
 * //               Items: "<MethodsList>", // required
 * //               CachedMethods: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: "<MethodsList>", // required
 * //               },
 * //             },
 * //             SmoothStreaming: true || false,
 * //             Compress: true || false,
 * //             LambdaFunctionAssociations: {
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 {
 * //                   LambdaFunctionARN: "STRING_VALUE", // required
 * //                   EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //                   IncludeBody: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             FunctionAssociations: {
 * //               Quantity: Number("int"), // required
 * //               Items: [
 * //                 {
 * //                   FunctionARN: "STRING_VALUE", // required
 * //                   EventType: "viewer-request" || "viewer-response" || "origin-request" || "origin-response", // required
 * //                 },
 * //               ],
 * //             },
 * //             FieldLevelEncryptionId: "STRING_VALUE",
 * //             RealtimeLogConfigArn: "STRING_VALUE",
 * //             CachePolicyId: "STRING_VALUE",
 * //             OriginRequestPolicyId: "STRING_VALUE",
 * //             ResponseHeadersPolicyId: "STRING_VALUE",
 * //             GrpcConfig: {
 * //               Enabled: true || false, // required
 * //             },
 * //             ForwardedValues: {
 * //               QueryString: true || false, // required
 * //               Cookies: {
 * //                 Forward: "none" || "whitelist" || "all", // required
 * //                 WhitelistedNames: {
 * //                   Quantity: Number("int"), // required
 * //                   Items: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               Headers: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               QueryStringCacheKeys: {
 * //                 Quantity: Number("int"), // required
 * //                 Items: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             MinTTL: Number("long"),
 * //             DefaultTTL: Number("long"),
 * //             MaxTTL: Number("long"),
 * //           },
 * //         ],
 * //       },
 * //       CustomErrorResponses: { // CustomErrorResponses
 * //         Quantity: Number("int"), // required
 * //         Items: [ // CustomErrorResponseList
 * //           { // CustomErrorResponse
 * //             ErrorCode: Number("int"), // required
 * //             ResponsePagePath: "STRING_VALUE",
 * //             ResponseCode: "STRING_VALUE",
 * //             ErrorCachingMinTTL: Number("long"),
 * //           },
 * //         ],
 * //       },
 * //       Comment: "STRING_VALUE", // required
 * //       Logging: { // LoggingConfig
 * //         Enabled: true || false,
 * //         IncludeCookies: true || false,
 * //         Bucket: "STRING_VALUE",
 * //         Prefix: "STRING_VALUE",
 * //       },
 * //       PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All" || "None",
 * //       Enabled: true || false, // required
 * //       ViewerCertificate: { // ViewerCertificate
 * //         CloudFrontDefaultCertificate: true || false,
 * //         IAMCertificateId: "STRING_VALUE",
 * //         ACMCertificateArn: "STRING_VALUE",
 * //         SSLSupportMethod: "sni-only" || "vip" || "static-ip",
 * //         MinimumProtocolVersion: "SSLv3" || "TLSv1" || "TLSv1_2016" || "TLSv1.1_2016" || "TLSv1.2_2018" || "TLSv1.2_2019" || "TLSv1.2_2021",
 * //         Certificate: "STRING_VALUE",
 * //         CertificateSource: "cloudfront" || "iam" || "acm",
 * //       },
 * //       Restrictions: { // Restrictions
 * //         GeoRestriction: { // GeoRestriction
 * //           RestrictionType: "blacklist" || "whitelist" || "none", // required
 * //           Quantity: Number("int"), // required
 * //           Items: [ // LocationList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       WebACLId: "STRING_VALUE",
 * //       HttpVersion: "http1.1" || "http2" || "http3" || "http2and3",
 * //       IsIPV6Enabled: true || false,
 * //       ContinuousDeploymentPolicyId: "STRING_VALUE",
 * //       Staging: true || false,
 * //       AnycastIpListId: "STRING_VALUE",
 * //       TenantConfig: { // TenantConfig
 * //         ParameterDefinitions: [ // ParameterDefinitions
 * //           { // ParameterDefinition
 * //             Name: "STRING_VALUE", // required
 * //             Definition: { // ParameterDefinitionSchema
 * //               StringSchema: { // StringSchemaConfig
 * //                 Comment: "STRING_VALUE",
 * //                 DefaultValue: "STRING_VALUE",
 * //                 Required: true || false, // required
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ConnectionMode: "direct" || "tenant-only",
 * //     },
 * //     AliasICPRecordals: [ // AliasICPRecordals
 * //       { // AliasICPRecordal
 * //         CNAME: "STRING_VALUE",
 * //         ICPRecordalStatus: "APPROVED" || "SUSPENDED" || "PENDING",
 * //       },
 * //     ],
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDistributionWithStagingConfigCommandInput - {@link UpdateDistributionWithStagingConfigCommandInput}
 * @returns {@link UpdateDistributionWithStagingConfigCommandOutput}
 * @see {@link UpdateDistributionWithStagingConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionWithStagingConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CNAMEAlreadyExists} (client fault)
 *  <p>The CNAME specified is already defined for CloudFront.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior} (client fault)
 *  <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidDefaultRootObject} (client fault)
 *  <p>The default root object file name is too big or contains an invalid character.</p>
 *
 * @throws {@link InvalidErrorCode} (client fault)
 *  <p>An invalid error code was specified.</p>
 *
 * @throws {@link InvalidForwardCookies} (client fault)
 *  <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
 *
 * @throws {@link InvalidFunctionAssociation} (client fault)
 *  <p>A CloudFront function association is invalid.</p>
 *
 * @throws {@link InvalidGeoRestrictionParameter} (client fault)
 *  <p>The specified geo restriction parameter is not valid.</p>
 *
 * @throws {@link InvalidHeadersForS3Origin} (client fault)
 *  <p>The headers specified are not valid for an Amazon S3 origin.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link InvalidLambdaFunctionAssociation} (client fault)
 *  <p>The specified Lambda@Edge function association is invalid.</p>
 *
 * @throws {@link InvalidLocationCode} (client fault)
 *  <p>The location code specified is not valid.</p>
 *
 * @throws {@link InvalidMinimumProtocolVersion} (client fault)
 *  <p>The minimum protocol version specified is not valid.</p>
 *
 * @throws {@link InvalidOriginAccessControl} (client fault)
 *  <p>The origin access control is not valid.</p>
 *
 * @throws {@link InvalidOriginAccessIdentity} (client fault)
 *  <p>The origin access identity is not valid or doesn't exist.</p>
 *
 * @throws {@link InvalidOriginKeepaliveTimeout} (client fault)
 *  <p>The keep alive timeout specified for the origin is not valid.</p>
 *
 * @throws {@link InvalidOriginReadTimeout} (client fault)
 *  <p>The read timeout specified for the origin is not valid.</p>
 *
 * @throws {@link InvalidQueryStringParameters} (client fault)
 *  <p>The query string parameters specified are not valid.</p>
 *
 * @throws {@link InvalidRelativePath} (client fault)
 *  <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
 *
 * @throws {@link InvalidRequiredProtocol} (client fault)
 *  <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.</p>
 *
 * @throws {@link InvalidResponseCode} (client fault)
 *  <p>A response code is not valid.</p>
 *
 * @throws {@link InvalidTTLOrder} (client fault)
 *  <p>The TTL order specified is not valid.</p>
 *
 * @throws {@link InvalidViewerCertificate} (client fault)
 *  <p>A viewer certificate specified is not valid.</p>
 *
 * @throws {@link InvalidWebACLId} (client fault)
 *  <p>A web ACL ID specified is not valid. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *  <p>The specified configuration for field-level encryption doesn't exist.</p>
 *
 * @throws {@link NoSuchOrigin} (client fault)
 *  <p>No origin exists with the specified <code>Origin Id</code>.</p>
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *  <p>The origin request policy does not exist.</p>
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *  <p>The real-time log configuration does not exist.</p>
 *
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link RealtimeLogConfigOwnerMismatch} (client fault)
 *  <p>The specified real-time log configuration belongs to a different Amazon Web Services account.</p>
 *
 * @throws {@link TooManyCacheBehaviors} (client fault)
 *  <p>You cannot create more cache behaviors for the distribution.</p>
 *
 * @throws {@link TooManyCertificates} (client fault)
 *  <p>You cannot create anymore custom SSL/TLS certificates.</p>
 *
 * @throws {@link TooManyCookieNamesInWhiteList} (client fault)
 *  <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
 *
 * @throws {@link TooManyDistributionCNAMEs} (client fault)
 *  <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToCachePolicy} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToFieldLevelEncryptionConfig} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToKeyGroup} (client fault)
 *  <p>The number of distributions that reference this key group is more than the maximum allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToOriginAccessControl} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified origin access control.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToOriginRequestPolicy} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsAssociatedToResponseHeadersPolicy} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsWithFunctionAssociations} (client fault)
 *  <p>You have reached the maximum number of distributions that are associated with a CloudFront function. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyDistributionsWithLambdaAssociations} (client fault)
 *  <p>Processing your request would cause the maximum number of distributions with Lambda@Edge function associations per owner to be exceeded.</p>
 *
 * @throws {@link TooManyDistributionsWithSingleFunctionARN} (client fault)
 *  <p>The maximum number of distributions have been associated with the specified Lambda@Edge function.</p>
 *
 * @throws {@link TooManyFunctionAssociations} (client fault)
 *  <p>You have reached the maximum number of CloudFront function associations for this distribution. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyHeadersInForwardedValues} (client fault)
 *  <p>Your request contains too many headers in forwarded values.</p>
 *
 * @throws {@link TooManyKeyGroupsAssociatedToDistribution} (client fault)
 *  <p>The number of key groups referenced by this distribution is more than the maximum allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyLambdaFunctionAssociations} (client fault)
 *  <p>Your request contains more Lambda@Edge function associations than are allowed per distribution.</p>
 *
 * @throws {@link TooManyOriginCustomHeaders} (client fault)
 *  <p>Your request contains too many origin custom headers.</p>
 *
 * @throws {@link TooManyOriginGroupsPerDistribution} (client fault)
 *  <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
 *
 * @throws {@link TooManyOrigins} (client fault)
 *  <p>You cannot create more origins for the distribution.</p>
 *
 * @throws {@link TooManyQueryStringParameters} (client fault)
 *  <p>Your request contains too many query string parameters.</p>
 *
 * @throws {@link TooManyTrustedSigners} (client fault)
 *  <p>Your request contains more trusted signers than are allowed per distribution.</p>
 *
 * @throws {@link TrustedKeyGroupDoesNotExist} (client fault)
 *  <p>The specified key group does not exist.</p>
 *
 * @throws {@link TrustedSignerDoesNotExist} (client fault)
 *  <p>One or more of your trusted signers don't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class UpdateDistributionWithStagingConfigCommand extends $Command
  .classBuilder<
    UpdateDistributionWithStagingConfigCommandInput,
    UpdateDistributionWithStagingConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "UpdateDistributionWithStagingConfig", {})
  .n("CloudFrontClient", "UpdateDistributionWithStagingConfigCommand")
  .f(void 0, UpdateDistributionWithStagingConfigResultFilterSensitiveLog)
  .ser(se_UpdateDistributionWithStagingConfigCommand)
  .de(de_UpdateDistributionWithStagingConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDistributionWithStagingConfigRequest;
      output: UpdateDistributionWithStagingConfigResult;
    };
    sdk: {
      input: UpdateDistributionWithStagingConfigCommandInput;
      output: UpdateDistributionWithStagingConfigCommandOutput;
    };
  };
}
