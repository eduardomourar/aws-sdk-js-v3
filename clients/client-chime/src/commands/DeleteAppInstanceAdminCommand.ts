// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppInstanceAdminRequest } from "../models/models_0";
import { de_DeleteAppInstanceAdminCommand, se_DeleteAppInstanceAdminCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppInstanceAdminCommand}.
 */
export interface DeleteAppInstanceAdminCommandInput extends DeleteAppInstanceAdminRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInstanceAdminCommand}.
 */
export interface DeleteAppInstanceAdminCommandOutput extends __MetadataBearer {}

/**
 * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version,
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceAdmin.html">DeleteAppInstanceAdmin</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by DeleteAppInstanceAdmin in the Amazon Chime SDK Identity Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAppInstanceAdminCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAppInstanceAdminCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DeleteAppInstanceAdminRequest
 *   AppInstanceAdminArn: "STRING_VALUE", // required
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppInstanceAdminCommandInput - {@link DeleteAppInstanceAdminCommandInput}
 * @returns {@link DeleteAppInstanceAdminCommandOutput}
 * @see {@link DeleteAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class DeleteAppInstanceAdminCommand extends $Command
  .classBuilder<
    DeleteAppInstanceAdminCommandInput,
    DeleteAppInstanceAdminCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "DeleteAppInstanceAdmin", {})
  .n("ChimeClient", "DeleteAppInstanceAdminCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppInstanceAdminCommand)
  .de(de_DeleteAppInstanceAdminCommand)
  .build() {}
