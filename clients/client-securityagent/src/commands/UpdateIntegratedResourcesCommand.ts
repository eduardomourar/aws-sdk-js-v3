// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateIntegratedResourcesInput, UpdateIntegratedResourcesOutput } from "../models/models_0";
import { UpdateIntegratedResources$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIntegratedResourcesCommand}.
 */
export interface UpdateIntegratedResourcesCommandInput extends UpdateIntegratedResourcesInput {}
/**
 * @public
 *
 * The output of {@link UpdateIntegratedResourcesCommand}.
 */
export interface UpdateIntegratedResourcesCommandOutput extends UpdateIntegratedResourcesOutput, __MetadataBearer {}

/**
 * Updates the integrated resources for an agent space
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateIntegratedResourcesCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateIntegratedResourcesCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateIntegratedResourcesInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   integrationId: "STRING_VALUE", // required
 *   items: [ // IntegratedResourceInputItemList // required
 *     { // IntegratedResourceInputItem
 *       resource: { // IntegratedResource Union: only one key present
 *         githubRepository: { // GitHubRepositoryResource
 *           name: "STRING_VALUE", // required
 *           owner: "STRING_VALUE", // required
 *         },
 *       },
 *       capabilities: { // ProviderResourceCapabilities Union: only one key present
 *         github: { // GitHubResourceCapabilities
 *           leaveComments: true || false,
 *           remediateCode: true || false,
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateIntegratedResourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIntegratedResourcesCommandInput - {@link UpdateIntegratedResourcesCommandInput}
 * @returns {@link UpdateIntegratedResourcesCommandOutput}
 * @see {@link UpdateIntegratedResourcesCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegratedResourcesCommandOutput} for command's `response` shape.
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
export class UpdateIntegratedResourcesCommand extends $Command
  .classBuilder<
    UpdateIntegratedResourcesCommandInput,
    UpdateIntegratedResourcesCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "UpdateIntegratedResources", {})
  .n("SecurityAgentClient", "UpdateIntegratedResourcesCommand")
  .sc(UpdateIntegratedResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntegratedResourcesInput;
      output: {};
    };
    sdk: {
      input: UpdateIntegratedResourcesCommandInput;
      output: UpdateIntegratedResourcesCommandOutput;
    };
  };
}
