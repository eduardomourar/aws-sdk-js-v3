// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutTableMaintenanceConfigurationRequest } from "../models/models_0";
import {
  de_PutTableMaintenanceConfigurationCommand,
  se_PutTableMaintenanceConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTableMaintenanceConfigurationCommand}.
 */
export interface PutTableMaintenanceConfigurationCommandInput extends PutTableMaintenanceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutTableMaintenanceConfigurationCommand}.
 */
export interface PutTableMaintenanceConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a new maintenance configuration or replaces an existing maintenance configuration for a table. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-maintenance.html">S3 Tables maintenance</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:PutTableMaintenanceConfiguration</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableMaintenanceConfigurationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableMaintenanceConfigurationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * const client = new S3TablesClient(config);
 * const input = { // PutTableMaintenanceConfigurationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "icebergCompaction" || "icebergSnapshotManagement", // required
 *   value: { // TableMaintenanceConfigurationValue
 *     status: "enabled" || "disabled",
 *     settings: { // TableMaintenanceSettings Union: only one key present
 *       icebergCompaction: { // IcebergCompactionSettings
 *         targetFileSizeMB: Number("int"),
 *         strategy: "auto" || "binpack" || "sort" || "z-order",
 *       },
 *       icebergSnapshotManagement: { // IcebergSnapshotManagementSettings
 *         minSnapshotsToKeep: Number("int"),
 *         maxSnapshotAgeHours: Number("int"),
 *       },
 *     },
 *   },
 * };
 * const command = new PutTableMaintenanceConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTableMaintenanceConfigurationCommandInput - {@link PutTableMaintenanceConfigurationCommandInput}
 * @returns {@link PutTableMaintenanceConfigurationCommandOutput}
 * @see {@link PutTableMaintenanceConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutTableMaintenanceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 *
 * @public
 */
export class PutTableMaintenanceConfigurationCommand extends $Command
  .classBuilder<
    PutTableMaintenanceConfigurationCommandInput,
    PutTableMaintenanceConfigurationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3TableBuckets", "PutTableMaintenanceConfiguration", {})
  .n("S3TablesClient", "PutTableMaintenanceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutTableMaintenanceConfigurationCommand)
  .de(de_PutTableMaintenanceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableMaintenanceConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutTableMaintenanceConfigurationCommandInput;
      output: PutTableMaintenanceConfigurationCommandOutput;
    };
  };
}
