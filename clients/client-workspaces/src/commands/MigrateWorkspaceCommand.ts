// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrateWorkspaceRequest, MigrateWorkspaceResult } from "../models/models_0";
import { de_MigrateWorkspaceCommand, se_MigrateWorkspaceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MigrateWorkspaceCommand}.
 */
export interface MigrateWorkspaceCommandInput extends MigrateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link MigrateWorkspaceCommand}.
 */
export interface MigrateWorkspaceCommandOutput extends MigrateWorkspaceResult, __MetadataBearer {}

/**
 * <p>Migrates a WorkSpace from one operating system or bundle type to another, while
 *          retaining the data on the user volume.</p>
 *          <p>The migration process recreates the WorkSpace by using a new root volume from the target
 *          bundle image and the user volume from the last available snapshot of the original
 *          WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile
 *          folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new
 *             <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in
 *          the old user profile are moved to the new user profile.</p>
 *          <p>For available migration scenarios, details about what happens during migration, and best
 *          practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a
 *          WorkSpace</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, MigrateWorkspaceCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, MigrateWorkspaceCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // MigrateWorkspaceRequest
 *   SourceWorkspaceId: "STRING_VALUE", // required
 *   BundleId: "STRING_VALUE", // required
 * };
 * const command = new MigrateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // MigrateWorkspaceResult
 * //   SourceWorkspaceId: "STRING_VALUE",
 * //   TargetWorkspaceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MigrateWorkspaceCommandInput - {@link MigrateWorkspaceCommandInput}
 * @returns {@link MigrateWorkspaceCommandOutput}
 * @see {@link MigrateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link MigrateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class MigrateWorkspaceCommand extends $Command
  .classBuilder<
    MigrateWorkspaceCommandInput,
    MigrateWorkspaceCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "MigrateWorkspace", {})
  .n("WorkSpacesClient", "MigrateWorkspaceCommand")
  .f(void 0, void 0)
  .ser(se_MigrateWorkspaceCommand)
  .de(de_MigrateWorkspaceCommand)
  .build() {}
