// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRotationShiftsRequest, ListRotationShiftsResult } from "../models/models_0";
import { de_ListRotationShiftsCommand, se_ListRotationShiftsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRotationShiftsCommand}.
 */
export interface ListRotationShiftsCommandInput extends ListRotationShiftsRequest {}
/**
 * @public
 *
 * The output of {@link ListRotationShiftsCommand}.
 */
export interface ListRotationShiftsCommandOutput extends ListRotationShiftsResult, __MetadataBearer {}

/**
 * <p>Returns a list of shifts generated by an existing rotation in the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListRotationShiftsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListRotationShiftsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // ListRotationShiftsRequest
 *   RotationId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRotationShiftsCommand(input);
 * const response = await client.send(command);
 * // { // ListRotationShiftsResult
 * //   RotationShifts: [ // RotationShifts
 * //     { // RotationShift
 * //       ContactIds: [ // SsmContactsArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"), // required
 * //       Type: "REGULAR" || "OVERRIDDEN",
 * //       ShiftDetails: { // ShiftDetails
 * //         OverriddenContactIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRotationShiftsCommandInput - {@link ListRotationShiftsCommandInput}
 * @returns {@link ListRotationShiftsCommandOutput}
 * @see {@link ListRotationShiftsCommandInput} for command's `input` shape.
 * @see {@link ListRotationShiftsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 * @public
 */
export class ListRotationShiftsCommand extends $Command
  .classBuilder<
    ListRotationShiftsCommandInput,
    ListRotationShiftsCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "ListRotationShifts", {})
  .n("SSMContactsClient", "ListRotationShiftsCommand")
  .f(void 0, void 0)
  .ser(se_ListRotationShiftsCommand)
  .de(de_ListRotationShiftsCommand)
  .build() {}
