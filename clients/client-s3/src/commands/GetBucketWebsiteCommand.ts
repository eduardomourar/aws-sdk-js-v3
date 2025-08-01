// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBucketWebsiteOutput, GetBucketWebsiteRequest } from "../models/models_0";
import { de_GetBucketWebsiteCommand, se_GetBucketWebsiteCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketWebsiteCommand}.
 */
export interface GetBucketWebsiteCommandInput extends GetBucketWebsiteRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketWebsiteCommand}.
 */
export interface GetBucketWebsiteCommandOutput extends GetBucketWebsiteOutput, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket
 *       as website by adding a website configuration. For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p>
 *          <p>This GET action requires the <code>S3:GetBucketWebsite</code> permission. By default, only the
 *       bucket owner can read the bucket website configuration. However, bucket owners can allow other users to
 *       read the website configuration by writing a bucket policy granting them the
 *         <code>S3:GetBucketWebsite</code> permission.</p>
 *          <p>The following operations are related to <code>GetBucketWebsite</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html">DeleteBucketWebsite</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html">PutBucketWebsite</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketWebsiteRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketWebsiteOutput
 * //   RedirectAllRequestsTo: { // RedirectAllRequestsTo
 * //     HostName: "STRING_VALUE", // required
 * //     Protocol: "http" || "https",
 * //   },
 * //   IndexDocument: { // IndexDocument
 * //     Suffix: "STRING_VALUE", // required
 * //   },
 * //   ErrorDocument: { // ErrorDocument
 * //     Key: "STRING_VALUE", // required
 * //   },
 * //   RoutingRules: [ // RoutingRules
 * //     { // RoutingRule
 * //       Condition: { // Condition
 * //         HttpErrorCodeReturnedEquals: "STRING_VALUE",
 * //         KeyPrefixEquals: "STRING_VALUE",
 * //       },
 * //       Redirect: { // Redirect
 * //         HostName: "STRING_VALUE",
 * //         HttpRedirectCode: "STRING_VALUE",
 * //         Protocol: "http" || "https",
 * //         ReplaceKeyPrefixWith: "STRING_VALUE",
 * //         ReplaceKeyWith: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketWebsiteCommandInput - {@link GetBucketWebsiteCommandInput}
 * @returns {@link GetBucketWebsiteCommandOutput}
 * @see {@link GetBucketWebsiteCommandInput} for command's `input` shape.
 * @see {@link GetBucketWebsiteCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To get bucket website configuration
 * ```javascript
 * // The following example retrieves website configuration of a bucket.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ErrorDocument: {
 *     Key: "error.html"
 *   },
 *   IndexDocument: {
 *     Suffix: "index.html"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketWebsiteCommand extends $Command
  .classBuilder<
    GetBucketWebsiteCommandInput,
    GetBucketWebsiteCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "GetBucketWebsite", {})
  .n("S3Client", "GetBucketWebsiteCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketWebsiteCommand)
  .de(de_GetBucketWebsiteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketWebsiteRequest;
      output: GetBucketWebsiteOutput;
    };
    sdk: {
      input: GetBucketWebsiteCommandInput;
      output: GetBucketWebsiteCommandOutput;
    };
  };
}
