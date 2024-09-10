// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHITWithHITTypeRequest, CreateHITWithHITTypeResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_CreateHITWithHITTypeCommand, se_CreateHITWithHITTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHITWithHITTypeCommand}.
 */
export interface CreateHITWithHITTypeCommandInput extends CreateHITWithHITTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateHITWithHITTypeCommand}.
 */
export interface CreateHITWithHITTypeCommandOutput extends CreateHITWithHITTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT)
 *             using an existing HITTypeID generated by the <code>CreateHITType</code> operation.
 *         </p>
 *         <p>
 *             This is an alternative way to create HITs from the <code>CreateHIT</code> operation.
 *             This is the recommended best practice for Requesters who are creating large numbers of HITs.
 *         </p>
 *         <p>CreateHITWithHITType also supports several ways to provide question data:
 *             by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT,
 *             or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
 *         </p>
 *         <note>
 *             <p>
 *                 If a HIT is created with 10 or more maximum assignments, there is an additional fee.
 *                 For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITWithHITTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITWithHITTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // CreateHITWithHITTypeRequest
 *   HITTypeId: "STRING_VALUE", // required
 *   MaxAssignments: Number("int"),
 *   LifetimeInSeconds: Number("long"), // required
 *   Question: "STRING_VALUE",
 *   RequesterAnnotation: "STRING_VALUE",
 *   UniqueRequestToken: "STRING_VALUE",
 *   AssignmentReviewPolicy: { // ReviewPolicy
 *     PolicyName: "STRING_VALUE", // required
 *     Parameters: [ // PolicyParameterList
 *       { // PolicyParameter
 *         Key: "STRING_VALUE",
 *         Values: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         MapEntries: [ // ParameterMapEntryList
 *           { // ParameterMapEntry
 *             Key: "STRING_VALUE",
 *             Values: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   HITReviewPolicy: {
 *     PolicyName: "STRING_VALUE", // required
 *     Parameters: [
 *       {
 *         Key: "STRING_VALUE",
 *         Values: [
 *           "STRING_VALUE",
 *         ],
 *         MapEntries: [
 *           {
 *             Key: "STRING_VALUE",
 *             Values: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   HITLayoutId: "STRING_VALUE",
 *   HITLayoutParameters: [ // HITLayoutParameterList
 *     { // HITLayoutParameter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHITWithHITTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateHITWithHITTypeResponse
 * //   HIT: { // HIT
 * //     HITId: "STRING_VALUE",
 * //     HITTypeId: "STRING_VALUE",
 * //     HITGroupId: "STRING_VALUE",
 * //     HITLayoutId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Title: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Question: "STRING_VALUE",
 * //     Keywords: "STRING_VALUE",
 * //     HITStatus: "Assignable" || "Unassignable" || "Reviewable" || "Reviewing" || "Disposed",
 * //     MaxAssignments: Number("int"),
 * //     Reward: "STRING_VALUE",
 * //     AutoApprovalDelayInSeconds: Number("long"),
 * //     Expiration: new Date("TIMESTAMP"),
 * //     AssignmentDurationInSeconds: Number("long"),
 * //     RequesterAnnotation: "STRING_VALUE",
 * //     QualificationRequirements: [ // QualificationRequirementList
 * //       { // QualificationRequirement
 * //         QualificationTypeId: "STRING_VALUE", // required
 * //         Comparator: "LessThan" || "LessThanOrEqualTo" || "GreaterThan" || "GreaterThanOrEqualTo" || "EqualTo" || "NotEqualTo" || "Exists" || "DoesNotExist" || "In" || "NotIn", // required
 * //         IntegerValues: [ // IntegerList
 * //           Number("int"),
 * //         ],
 * //         LocaleValues: [ // LocaleList
 * //           { // Locale
 * //             Country: "STRING_VALUE", // required
 * //             Subdivision: "STRING_VALUE",
 * //           },
 * //         ],
 * //         RequiredToPreview: true || false,
 * //         ActionsGuarded: "Accept" || "PreviewAndAccept" || "DiscoverPreviewAndAccept",
 * //       },
 * //     ],
 * //     HITReviewStatus: "NotReviewed" || "MarkedForReview" || "ReviewedAppropriate" || "ReviewedInappropriate",
 * //     NumberOfAssignmentsPending: Number("int"),
 * //     NumberOfAssignmentsAvailable: Number("int"),
 * //     NumberOfAssignmentsCompleted: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHITWithHITTypeCommandInput - {@link CreateHITWithHITTypeCommandInput}
 * @returns {@link CreateHITWithHITTypeCommandOutput}
 * @see {@link CreateHITWithHITTypeCommandInput} for command's `input` shape.
 * @see {@link CreateHITWithHITTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 * @public
 */
export class CreateHITWithHITTypeCommand extends $Command
  .classBuilder<
    CreateHITWithHITTypeCommandInput,
    CreateHITWithHITTypeCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "CreateHITWithHITType", {})
  .n("MTurkClient", "CreateHITWithHITTypeCommand")
  .f(void 0, void 0)
  .ser(se_CreateHITWithHITTypeCommand)
  .de(de_CreateHITWithHITTypeCommand)
  .build() {}
