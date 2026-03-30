// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { InitiateChatForCaseRequest, InitiateChatForCaseResponse } from "../models/models_0";
import { InitiateChatForCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitiateChatForCaseCommand}.
 */
export interface InitiateChatForCaseCommandInput extends InitiateChatForCaseRequest {}
/**
 * @public
 *
 * The output of {@link InitiateChatForCaseCommand}.
 */
export interface InitiateChatForCaseCommandOutput extends InitiateChatForCaseResponse, __MetadataBearer {}

/**
 * Initiate a chat for support case in the specified agent space
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, InitiateChatForCaseCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, InitiateChatForCaseCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // InitiateChatForCaseRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new InitiateChatForCaseCommand(input);
 * const response = await client.send(command);
 * // { // InitiateChatForCaseResponse
 * //   chatParticipantConnection: { // ChatParticipantConnection
 * //     initialContactId: "STRING_VALUE", // required
 * //     participantId: "STRING_VALUE", // required
 * //     participantToken: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param InitiateChatForCaseCommandInput - {@link InitiateChatForCaseCommandInput}
 * @returns {@link InitiateChatForCaseCommandOutput}
 * @see {@link InitiateChatForCaseCommandInput} for command's `input` shape.
 * @see {@link InitiateChatForCaseCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
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
export class InitiateChatForCaseCommand extends $Command
  .classBuilder<
    InitiateChatForCaseCommandInput,
    InitiateChatForCaseCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "InitiateChatForCase", {})
  .n("DevOpsAgentClient", "InitiateChatForCaseCommand")
  .sc(InitiateChatForCase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateChatForCaseRequest;
      output: InitiateChatForCaseResponse;
    };
    sdk: {
      input: InitiateChatForCaseCommandInput;
      output: InitiateChatForCaseCommandOutput;
    };
  };
}
