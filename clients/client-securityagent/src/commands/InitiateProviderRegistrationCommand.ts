// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InitiateProviderRegistrationInput, InitiateProviderRegistrationOutput } from "../models/models_0";
import { InitiateProviderRegistration$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitiateProviderRegistrationCommand}.
 */
export interface InitiateProviderRegistrationCommandInput extends InitiateProviderRegistrationInput {}
/**
 * @public
 *
 * The output of {@link InitiateProviderRegistrationCommand}.
 */
export interface InitiateProviderRegistrationCommandOutput extends InitiateProviderRegistrationOutput, __MetadataBearer {}

/**
 * Initiates the registration of Security Agent App for an external Provider
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, InitiateProviderRegistrationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, InitiateProviderRegistrationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // InitiateProviderRegistrationInput
 *   provider: "GITHUB", // required
 * };
 * const command = new InitiateProviderRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // InitiateProviderRegistrationOutput
 * //   redirectTo: "STRING_VALUE", // required
 * //   csrfState: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InitiateProviderRegistrationCommandInput - {@link InitiateProviderRegistrationCommandInput}
 * @returns {@link InitiateProviderRegistrationCommandOutput}
 * @see {@link InitiateProviderRegistrationCommandInput} for command's `input` shape.
 * @see {@link InitiateProviderRegistrationCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Request denied due to insufficient permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  Request conflicts with current resource state
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected server error occurred
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Specified resource was not found
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request denied due to throttling
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class InitiateProviderRegistrationCommand extends $Command
  .classBuilder<
    InitiateProviderRegistrationCommandInput,
    InitiateProviderRegistrationCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "InitiateProviderRegistration", {})
  .n("SecurityAgentClient", "InitiateProviderRegistrationCommand")
  .sc(InitiateProviderRegistration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateProviderRegistrationInput;
      output: InitiateProviderRegistrationOutput;
    };
    sdk: {
      input: InitiateProviderRegistrationCommandInput;
      output: InitiateProviderRegistrationCommandOutput;
    };
  };
}
