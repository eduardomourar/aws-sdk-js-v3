// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteArtifactInput, DeleteArtifactOutput } from "../models/models_0";
import { DeleteArtifact$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteArtifactCommand}.
 */
export interface DeleteArtifactCommandInput extends DeleteArtifactInput {}
/**
 * @public
 *
 * The output of {@link DeleteArtifactCommand}.
 */
export interface DeleteArtifactCommandOutput extends DeleteArtifactOutput, __MetadataBearer {}

/**
 * Delete an Artifact from the given agent space
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DeleteArtifactCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DeleteArtifactCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DeleteArtifactInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   artifactId: "STRING_VALUE", // required
 * };
 * const command = new DeleteArtifactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteArtifactCommandInput - {@link DeleteArtifactCommandInput}
 * @returns {@link DeleteArtifactCommandOutput}
 * @see {@link DeleteArtifactCommandInput} for command's `input` shape.
 * @see {@link DeleteArtifactCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Request denied due to insufficient permissions
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
export class DeleteArtifactCommand extends $Command
  .classBuilder<
    DeleteArtifactCommandInput,
    DeleteArtifactCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "DeleteArtifact", {})
  .n("SecurityAgentClient", "DeleteArtifactCommand")
  .sc(DeleteArtifact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteArtifactInput;
      output: {};
    };
    sdk: {
      input: DeleteArtifactCommandInput;
      output: DeleteArtifactCommandOutput;
    };
  };
}
