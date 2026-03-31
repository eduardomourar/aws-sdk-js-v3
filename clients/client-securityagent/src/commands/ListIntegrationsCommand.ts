// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListIntegrationsInput, ListIntegrationsOutput } from "../models/models_0";
import { ListIntegrations$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntegrationsCommand}.
 */
export interface ListIntegrationsCommandInput extends ListIntegrationsInput {}
/**
 * @public
 *
 * The output of {@link ListIntegrationsCommand}.
 */
export interface ListIntegrationsCommandOutput extends ListIntegrationsOutput, __MetadataBearer {}

/**
 * Retrieves the Integrations associated with the user's account
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListIntegrationsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListIntegrationsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListIntegrationsInput
 *   filter: { // IntegrationFilter Union: only one key present
 *     provider: "GITHUB",
 *     providerType: "SOURCE_CODE" || "DOCUMENTATION",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationsOutput
 * //   integrationSummaries: [ // IntegrationSummaryList // required
 * //     { // IntegrationSummary
 * //       integrationId: "STRING_VALUE", // required
 * //       installationId: "STRING_VALUE", // required
 * //       provider: "GITHUB", // required
 * //       providerType: "SOURCE_CODE" || "DOCUMENTATION", // required
 * //       displayName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntegrationsCommandInput - {@link ListIntegrationsCommandInput}
 * @returns {@link ListIntegrationsCommandOutput}
 * @see {@link ListIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationsCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListIntegrationsCommand extends $Command
  .classBuilder<
    ListIntegrationsCommandInput,
    ListIntegrationsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListIntegrations", {})
  .n("SecurityAgentClient", "ListIntegrationsCommand")
  .sc(ListIntegrations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntegrationsInput;
      output: ListIntegrationsOutput;
    };
    sdk: {
      input: ListIntegrationsCommandInput;
      output: ListIntegrationsCommandOutput;
    };
  };
}
