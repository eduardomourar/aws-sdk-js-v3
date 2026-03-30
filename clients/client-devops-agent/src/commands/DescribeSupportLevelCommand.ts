// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSupportLevelRequest, DescribeSupportLevelResponse } from "../models/models_0";
import { DescribeSupportLevel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSupportLevelCommand}.
 */
export interface DescribeSupportLevelCommandInput extends DescribeSupportLevelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSupportLevelCommand}.
 */
export interface DescribeSupportLevelCommandOutput extends DescribeSupportLevelResponse, __MetadataBearer {}

/**
 * Describe the support level of a CloudSmith customer account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, DescribeSupportLevelCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, DescribeSupportLevelCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // DescribeSupportLevelRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSupportLevelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSupportLevelResponse
 * //   supportLevel: { // SupportLevel
 * //     code: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //   },
 * //   mosaicSupportLevel: {
 * //     code: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //   },
 * //   activeSubscription: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeSupportLevelCommandInput - {@link DescribeSupportLevelCommandInput}
 * @returns {@link DescribeSupportLevelCommandOutput}
 * @see {@link DescribeSupportLevelCommandInput} for command's `input` shape.
 * @see {@link DescribeSupportLevelCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class DescribeSupportLevelCommand extends $Command
  .classBuilder<
    DescribeSupportLevelCommandInput,
    DescribeSupportLevelCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "DescribeSupportLevel", {})
  .n("DevOpsAgentClient", "DescribeSupportLevelCommand")
  .sc(DescribeSupportLevel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSupportLevelRequest;
      output: DescribeSupportLevelResponse;
    };
    sdk: {
      input: DescribeSupportLevelCommandInput;
      output: DescribeSupportLevelCommandOutput;
    };
  };
}
