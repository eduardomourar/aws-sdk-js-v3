// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import { de_CreateTableCommand, se_CreateTableCommand } from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTableCommand}.
 */
export interface CreateTableCommandInput extends CreateTableRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableCommand}.
 */
export interface CreateTableCommandOutput extends CreateTableResponse, __MetadataBearer {}

/**
 * <p>Creates a new table associated with the given namespace in a table bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, CreateTableCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, CreateTableCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * const client = new S3TablesClient(config);
 * const input = { // CreateTableRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   format: "ICEBERG", // required
 * };
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateTableResponse
 * //   tableARN: "STRING_VALUE", // required
 * //   versionToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTableCommandInput - {@link CreateTableCommandInput}
 * @returns {@link CreateTableCommandOutput}
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the
 *       request.</p>
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
 * @public
 */
export class CreateTableCommand extends $Command
  .classBuilder<
    CreateTableCommandInput,
    CreateTableCommandOutput,
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
  .s("S3TableBuckets", "CreateTable", {})
  .n("S3TablesClient", "CreateTableCommand")
  .f(void 0, void 0)
  .ser(se_CreateTableCommand)
  .de(de_CreateTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTableRequest;
      output: CreateTableResponse;
    };
    sdk: {
      input: CreateTableCommandInput;
      output: CreateTableCommandOutput;
    };
  };
}
