// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserHierarchyRequest } from "../models/models_2";
import { de_UpdateUserHierarchyCommand, se_UpdateUserHierarchyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserHierarchyCommand}.
 */
export interface UpdateUserHierarchyCommandInput extends UpdateUserHierarchyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserHierarchyCommand}.
 */
export interface UpdateUserHierarchyCommandOutput extends __MetadataBearer {}

/**
 * <p>Assigns the specified hierarchy group to the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserHierarchyRequest
 *   HierarchyGroupId: "STRING_VALUE",
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserHierarchyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserHierarchyCommandInput - {@link UpdateUserHierarchyCommandInput}
 * @returns {@link UpdateUserHierarchyCommandOutput}
 * @see {@link UpdateUserHierarchyCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class UpdateUserHierarchyCommand extends $Command
  .classBuilder<
    UpdateUserHierarchyCommandInput,
    UpdateUserHierarchyCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateUserHierarchy", {})
  .n("ConnectClient", "UpdateUserHierarchyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserHierarchyCommand)
  .de(de_UpdateUserHierarchyCommand)
  .build() {}
