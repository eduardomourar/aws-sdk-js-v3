// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetArtifactMetadataInput, BatchGetArtifactMetadataOutput } from "../models/models_0";
import { BatchGetArtifactMetadata$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetArtifactMetadataCommand}.
 */
export interface BatchGetArtifactMetadataCommandInput extends BatchGetArtifactMetadataInput {}
/**
 * @public
 *
 * The output of {@link BatchGetArtifactMetadataCommand}.
 */
export interface BatchGetArtifactMetadataCommandOutput extends BatchGetArtifactMetadataOutput, __MetadataBearer {}

/**
 * Retrieve the list of artifact metadata for the given agent space
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetArtifactMetadataCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetArtifactMetadataCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetArtifactMetadataInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   artifactIds: [ // ArtifactIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetArtifactMetadataCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetArtifactMetadataOutput
 * //   artifactMetadataList: [ // ArtifactMetadataList // required
 * //     { // ArtifactMetadataItem
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       artifactId: "STRING_VALUE", // required
 * //       fileName: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetArtifactMetadataCommandInput - {@link BatchGetArtifactMetadataCommandInput}
 * @returns {@link BatchGetArtifactMetadataCommandOutput}
 * @see {@link BatchGetArtifactMetadataCommandInput} for command's `input` shape.
 * @see {@link BatchGetArtifactMetadataCommandOutput} for command's `response` shape.
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
export class BatchGetArtifactMetadataCommand extends $Command
  .classBuilder<
    BatchGetArtifactMetadataCommandInput,
    BatchGetArtifactMetadataCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetArtifactMetadata", {})
  .n("SecurityAgentClient", "BatchGetArtifactMetadataCommand")
  .sc(BatchGetArtifactMetadata$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetArtifactMetadataInput;
      output: BatchGetArtifactMetadataOutput;
    };
    sdk: {
      input: BatchGetArtifactMetadataCommandInput;
      output: BatchGetArtifactMetadataCommandOutput;
    };
  };
}
