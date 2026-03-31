// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AllowVendedLogDeliveryForResourceInput,
  AllowVendedLogDeliveryForResourceOutput,
} from "../models/models_0";
import { AllowVendedLogDeliveryForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AllowVendedLogDeliveryForResourceCommand}.
 */
export interface AllowVendedLogDeliveryForResourceCommandInput extends AllowVendedLogDeliveryForResourceInput {}
/**
 * @public
 *
 * The output of {@link AllowVendedLogDeliveryForResourceCommand}.
 */
export interface AllowVendedLogDeliveryForResourceCommandOutput extends AllowVendedLogDeliveryForResourceOutput, __MetadataBearer {}

/**
 * Authorize Ingestion Hub subscription operation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, AllowVendedLogDeliveryForResourceCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, AllowVendedLogDeliveryForResourceCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // AllowVendedLogDeliveryForResourceInput
 *   resourceArnBeingAuthorized: "STRING_VALUE", // required
 *   deliverySourceArn: "STRING_VALUE", // required
 *   logType: "STRING_VALUE",
 * };
 * const command = new AllowVendedLogDeliveryForResourceCommand(input);
 * const response = await client.send(command);
 * // { // AllowVendedLogDeliveryForResourceOutput
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AllowVendedLogDeliveryForResourceCommandInput - {@link AllowVendedLogDeliveryForResourceCommandInput}
 * @returns {@link AllowVendedLogDeliveryForResourceCommandOutput}
 * @see {@link AllowVendedLogDeliveryForResourceCommandInput} for command's `input` shape.
 * @see {@link AllowVendedLogDeliveryForResourceCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class AllowVendedLogDeliveryForResourceCommand extends $Command
  .classBuilder<
    AllowVendedLogDeliveryForResourceCommandInput,
    AllowVendedLogDeliveryForResourceCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "AllowVendedLogDeliveryForResource", {})
  .n("DevOpsAgentClient", "AllowVendedLogDeliveryForResourceCommand")
  .sc(AllowVendedLogDeliveryForResource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AllowVendedLogDeliveryForResourceInput;
      output: AllowVendedLogDeliveryForResourceOutput;
    };
    sdk: {
      input: AllowVendedLogDeliveryForResourceCommandInput;
      output: AllowVendedLogDeliveryForResourceCommandOutput;
    };
  };
}
