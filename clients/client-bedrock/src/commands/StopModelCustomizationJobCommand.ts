// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopModelCustomizationJobRequest, StopModelCustomizationJobResponse } from "../models/models_1";
import { de_StopModelCustomizationJobCommand, se_StopModelCustomizationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopModelCustomizationJobCommand}.
 */
export interface StopModelCustomizationJobCommandInput extends StopModelCustomizationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopModelCustomizationJobCommand}.
 */
export interface StopModelCustomizationJobCommandOutput extends StopModelCustomizationJobResponse, __MetadataBearer {}

/**
 * <p>Stops an active model customization job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, StopModelCustomizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, StopModelCustomizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // StopModelCustomizationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopModelCustomizationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopModelCustomizationJobCommandInput - {@link StopModelCustomizationJobCommandInput}
 * @returns {@link StopModelCustomizationJobCommandOutput}
 * @see {@link StopModelCustomizationJobCommandInput} for command's `input` shape.
 * @see {@link StopModelCustomizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class StopModelCustomizationJobCommand extends $Command
  .classBuilder<
    StopModelCustomizationJobCommandInput,
    StopModelCustomizationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "StopModelCustomizationJob", {})
  .n("BedrockClient", "StopModelCustomizationJobCommand")
  .f(void 0, void 0)
  .ser(se_StopModelCustomizationJobCommand)
  .de(de_StopModelCustomizationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopModelCustomizationJobRequest;
      output: {};
    };
    sdk: {
      input: StopModelCustomizationJobCommandInput;
      output: StopModelCustomizationJobCommandOutput;
    };
  };
}
