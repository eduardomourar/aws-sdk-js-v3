// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListDestinationsRequest, ListDestinationsResponse } from "../models/models_0";
import { de_ListDestinationsCommand, se_ListDestinationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDestinationsCommand}.
 */
export interface ListDestinationsCommandInput extends ListDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDestinationsCommand}.
 */
export interface ListDestinationsCommandOutput extends ListDestinationsResponse, __MetadataBearer {}

/**
 * <p> List all destination names under one Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListDestinationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListDestinationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListDestinationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDestinationsResponse
 * //   DestinationList: [ // DestinationListDefinition
 * //     { // DestinationSummary
 * //       Description: "STRING_VALUE",
 * //       DeliveryDestinationArn: "STRING_VALUE",
 * //       DeliveryDestinationType: "KINESIS",
 * //       Name: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDestinationsCommandInput - {@link ListDestinationsCommandInput}
 * @returns {@link ListDestinationsCommandOutput}
 * @see {@link ListDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class ListDestinationsCommand extends $Command
  .classBuilder<
    ListDestinationsCommandInput,
    ListDestinationsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "ListDestinations", {})
  .n("IoTManagedIntegrationsClient", "ListDestinationsCommand")
  .f(void 0, void 0)
  .ser(se_ListDestinationsCommand)
  .de(de_ListDestinationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDestinationsRequest;
      output: ListDestinationsResponse;
    };
    sdk: {
      input: ListDestinationsCommandInput;
      output: ListDestinationsCommandOutput;
    };
  };
}
