// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBucketRequestPaymentOutput, GetBucketRequestPaymentRequest } from "../models/models_0";
import { de_GetBucketRequestPaymentCommand, se_GetBucketRequestPaymentCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketRequestPaymentCommand}.
 */
export interface GetBucketRequestPaymentCommandInput extends GetBucketRequestPaymentRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketRequestPaymentCommand}.
 */
export interface GetBucketRequestPaymentCommandOutput extends GetBucketRequestPaymentOutput, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Returns the request payment configuration of a bucket. To use this version of the operation, you
 *       must be the bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>.</p>
 *          <p>The following operations are related to <code>GetBucketRequestPayment</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketRequestPaymentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketRequestPaymentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketRequestPaymentRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketRequestPaymentOutput
 * //   Payer: "Requester" || "BucketOwner",
 * // };
 *
 * ```
 *
 * @param GetBucketRequestPaymentCommandInput - {@link GetBucketRequestPaymentCommandInput}
 * @returns {@link GetBucketRequestPaymentCommandOutput}
 * @see {@link GetBucketRequestPaymentCommandInput} for command's `input` shape.
 * @see {@link GetBucketRequestPaymentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To get bucket versioning configuration
 * ```javascript
 * // The following example retrieves bucket versioning configuration.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Payer: "BucketOwner"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketRequestPaymentCommand extends $Command
  .classBuilder<
    GetBucketRequestPaymentCommandInput,
    GetBucketRequestPaymentCommandOutput,
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
  .s("AmazonS3", "GetBucketRequestPayment", {})
  .n("S3Client", "GetBucketRequestPaymentCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketRequestPaymentCommand)
  .de(de_GetBucketRequestPaymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketRequestPaymentRequest;
      output: GetBucketRequestPaymentOutput;
    };
    sdk: {
      input: GetBucketRequestPaymentCommandInput;
      output: GetBucketRequestPaymentCommandOutput;
    };
  };
}
