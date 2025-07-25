// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetBucketInventoryConfigurationOutput,
  GetBucketInventoryConfigurationOutputFilterSensitiveLog,
  GetBucketInventoryConfigurationRequest,
} from "../models/models_0";
import {
  de_GetBucketInventoryConfigurationCommand,
  se_GetBucketInventoryConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandInput extends GetBucketInventoryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandOutput
  extends GetBucketInventoryConfigurationOutput,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Returns an S3 Inventory configuration (identified by the inventory configuration ID) from the
 *       bucket.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *         <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission by default and
 *       can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *         Resources</a>.</p>
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p>
 *          <p>The following operations are related to <code>GetBucketInventoryConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketInventoryConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketInventoryConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketInventoryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketInventoryConfigurationOutput
 * //   InventoryConfiguration: { // InventoryConfiguration
 * //     Destination: { // InventoryDestination
 * //       S3BucketDestination: { // InventoryS3BucketDestination
 * //         AccountId: "STRING_VALUE",
 * //         Bucket: "STRING_VALUE", // required
 * //         Format: "CSV" || "ORC" || "Parquet", // required
 * //         Prefix: "STRING_VALUE",
 * //         Encryption: { // InventoryEncryption
 * //           SSES3: {},
 * //           SSEKMS: { // SSEKMS
 * //             KeyId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     IsEnabled: true || false, // required
 * //     Filter: { // InventoryFilter
 * //       Prefix: "STRING_VALUE", // required
 * //     },
 * //     Id: "STRING_VALUE", // required
 * //     IncludedObjectVersions: "All" || "Current", // required
 * //     OptionalFields: [ // InventoryOptionalFields
 * //       "Size" || "LastModifiedDate" || "StorageClass" || "ETag" || "IsMultipartUploaded" || "ReplicationStatus" || "EncryptionStatus" || "ObjectLockRetainUntilDate" || "ObjectLockMode" || "ObjectLockLegalHoldStatus" || "IntelligentTieringAccessTier" || "BucketKeyStatus" || "ChecksumAlgorithm" || "ObjectAccessControlList" || "ObjectOwner",
 * //     ],
 * //     Schedule: { // InventorySchedule
 * //       Frequency: "Daily" || "Weekly", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketInventoryConfigurationCommandInput - {@link GetBucketInventoryConfigurationCommandInput}
 * @returns {@link GetBucketInventoryConfigurationCommandOutput}
 * @see {@link GetBucketInventoryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketInventoryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class GetBucketInventoryConfigurationCommand extends $Command
  .classBuilder<
    GetBucketInventoryConfigurationCommandInput,
    GetBucketInventoryConfigurationCommandOutput,
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
  .s("AmazonS3", "GetBucketInventoryConfiguration", {})
  .n("S3Client", "GetBucketInventoryConfigurationCommand")
  .f(void 0, GetBucketInventoryConfigurationOutputFilterSensitiveLog)
  .ser(se_GetBucketInventoryConfigurationCommand)
  .de(de_GetBucketInventoryConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketInventoryConfigurationRequest;
      output: GetBucketInventoryConfigurationOutput;
    };
    sdk: {
      input: GetBucketInventoryConfigurationCommandInput;
      output: GetBucketInventoryConfigurationCommandOutput;
    };
  };
}
