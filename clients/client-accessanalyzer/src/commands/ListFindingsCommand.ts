// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFindingsRequest, ListFindingsResponse } from "../models/models_0";
import { de_ListFindingsCommand, se_ListFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandInput extends ListFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandOutput extends ListFindingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of findings generated by the specified analyzer. ListFindings and ListFindingsV2 both use <code>access-analyzer:ListFindings</code> in the <code>Action</code> element of an IAM policy statement. You must have permission to perform the <code>access-analyzer:ListFindings</code> action.</p> <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListFindingsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListFindingsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListFindingsRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   filter: { // FilterCriteriaMap
 *     "<keys>": { // Criterion
 *       eq: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *       neq: [
 *         "STRING_VALUE",
 *       ],
 *       contains: [
 *         "STRING_VALUE",
 *       ],
 *       exists: true || false,
 *     },
 *   },
 *   sort: { // SortCriteria
 *     attributeName: "STRING_VALUE",
 *     orderBy: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsResponse
 * //   findings: [ // FindingsList // required
 * //     { // FindingSummary
 * //       id: "STRING_VALUE", // required
 * //       principal: { // PrincipalMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       action: [ // ActionList
 * //         "STRING_VALUE",
 * //       ],
 * //       resource: "STRING_VALUE",
 * //       isPublic: true || false,
 * //       resourceType: "STRING_VALUE", // required
 * //       condition: { // ConditionKeyMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       analyzedAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //       resourceOwnerAccount: "STRING_VALUE", // required
 * //       error: "STRING_VALUE",
 * //       sources: [ // FindingSourceList
 * //         { // FindingSource
 * //           type: "STRING_VALUE", // required
 * //           detail: { // FindingSourceDetail
 * //             accessPointArn: "STRING_VALUE",
 * //             accessPointAccount: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       resourceControlPolicyRestriction: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsCommandInput - {@link ListFindingsCommandInput}
 * @returns {@link ListFindingsCommandOutput}
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @public
 */
export class ListFindingsCommand extends $Command
  .classBuilder<
    ListFindingsCommandInput,
    ListFindingsCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "ListFindings", {})
  .n("AccessAnalyzerClient", "ListFindingsCommand")
  .f(void 0, void 0)
  .ser(se_ListFindingsCommand)
  .de(de_ListFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFindingsRequest;
      output: ListFindingsResponse;
    };
    sdk: {
      input: ListFindingsCommandInput;
      output: ListFindingsCommandOutput;
    };
  };
}
