// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AddArtifactInput, AddArtifactOutput } from "../models/models_0";
import { AddArtifact$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddArtifactCommand}.
 */
export interface AddArtifactCommandInput extends AddArtifactInput {}
/**
 * @public
 *
 * The output of {@link AddArtifactCommand}.
 */
export interface AddArtifactCommandOutput extends AddArtifactOutput, __MetadataBearer {}

/**
 * Adds an Artifact for the given agent space
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, AddArtifactCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, AddArtifactCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // AddArtifactInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   artifactContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   artifactType: "TXT" || "PNG" || "JPEG" || "MD" || "PDF" || "DOCX" || "DOC" || "JSON" || "YAML", // required
 *   fileName: "STRING_VALUE", // required
 * };
 * const command = new AddArtifactCommand(input);
 * const response = await client.send(command);
 * // { // AddArtifactOutput
 * //   artifactId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AddArtifactCommandInput - {@link AddArtifactCommandInput}
 * @returns {@link AddArtifactCommandOutput}
 * @see {@link AddArtifactCommandInput} for command's `input` shape.
 * @see {@link AddArtifactCommandOutput} for command's `response` shape.
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
export class AddArtifactCommand extends $Command
  .classBuilder<
    AddArtifactCommandInput,
    AddArtifactCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "AddArtifact", {})
  .n("SecurityAgentClient", "AddArtifactCommand")
  .sc(AddArtifact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddArtifactInput;
      output: AddArtifactOutput;
    };
    sdk: {
      input: AddArtifactCommandInput;
      output: AddArtifactCommandOutput;
    };
  };
}
