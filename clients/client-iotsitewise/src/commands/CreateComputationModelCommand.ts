// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateComputationModelResponse } from "../models/models_0";
import { CreateComputationModelRequest } from "../models/models_1";
import { de_CreateComputationModelCommand, se_CreateComputationModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateComputationModelCommand}.
 */
export interface CreateComputationModelCommandInput extends CreateComputationModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateComputationModelCommand}.
 */
export interface CreateComputationModelCommandOutput extends CreateComputationModelResponse, __MetadataBearer {}

/**
 * <p>Create a computation model with a configuration and data binding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateComputationModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateComputationModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateComputationModelRequest
 *   computationModelName: "STRING_VALUE", // required
 *   computationModelDescription: "STRING_VALUE",
 *   computationModelConfiguration: { // ComputationModelConfiguration
 *     anomalyDetection: { // ComputationModelAnomalyDetectionConfiguration
 *       inputProperties: "STRING_VALUE", // required
 *       resultProperty: "STRING_VALUE", // required
 *     },
 *   },
 *   computationModelDataBinding: { // ComputationModelDataBinding // required
 *     "<keys>": { // ComputationModelDataBindingValue
 *       assetModelProperty: { // AssetModelPropertyBindingValue
 *         assetModelId: "STRING_VALUE", // required
 *         propertyId: "STRING_VALUE", // required
 *       },
 *       assetProperty: { // AssetPropertyBindingValue
 *         assetId: "STRING_VALUE", // required
 *         propertyId: "STRING_VALUE", // required
 *       },
 *       list: [ // BindingValueList
 *         {
 *           assetModelProperty: {
 *             assetModelId: "STRING_VALUE", // required
 *             propertyId: "STRING_VALUE", // required
 *           },
 *           assetProperty: {
 *             assetId: "STRING_VALUE", // required
 *             propertyId: "STRING_VALUE", // required
 *           },
 *           list: [
 *             "<ComputationModelDataBindingValue>",
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateComputationModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateComputationModelResponse
 * //   computationModelId: "STRING_VALUE", // required
 * //   computationModelArn: "STRING_VALUE", // required
 * //   computationModelStatus: { // ComputationModelStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateComputationModelCommandInput - {@link CreateComputationModelCommandInput}
 * @returns {@link CreateComputationModelCommandOutput}
 * @see {@link CreateComputationModelCommandInput} for command's `input` shape.
 * @see {@link CreateComputationModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class CreateComputationModelCommand extends $Command
  .classBuilder<
    CreateComputationModelCommandInput,
    CreateComputationModelCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "CreateComputationModel", {})
  .n("IoTSiteWiseClient", "CreateComputationModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateComputationModelCommand)
  .de(de_CreateComputationModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComputationModelRequest;
      output: CreateComputationModelResponse;
    };
    sdk: {
      input: CreateComputationModelCommandInput;
      output: CreateComputationModelCommandOutput;
    };
  };
}
