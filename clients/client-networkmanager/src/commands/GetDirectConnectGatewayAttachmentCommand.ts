// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDirectConnectGatewayAttachmentRequest,
  GetDirectConnectGatewayAttachmentResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_GetDirectConnectGatewayAttachmentCommand,
  se_GetDirectConnectGatewayAttachmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDirectConnectGatewayAttachmentCommand}.
 */
export interface GetDirectConnectGatewayAttachmentCommandInput extends GetDirectConnectGatewayAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link GetDirectConnectGatewayAttachmentCommand}.
 */
export interface GetDirectConnectGatewayAttachmentCommandOutput
  extends GetDirectConnectGatewayAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a specific Amazon Web Services Direct Connect gateway attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetDirectConnectGatewayAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetDirectConnectGatewayAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetDirectConnectGatewayAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 * };
 * const command = new GetDirectConnectGatewayAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // GetDirectConnectGatewayAttachmentResponse
 * //   DirectConnectGatewayAttachment: { // DirectConnectGatewayAttachment
 * //     Attachment: { // Attachment
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       AttachmentId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       AttachmentType: "CONNECT" || "SITE_TO_SITE_VPN" || "VPC" || "DIRECT_CONNECT_GATEWAY" || "TRANSIT_GATEWAY_ROUTE_TABLE",
 * //       State: "REJECTED" || "PENDING_ATTACHMENT_ACCEPTANCE" || "CREATING" || "FAILED" || "AVAILABLE" || "UPDATING" || "PENDING_NETWORK_UPDATE" || "PENDING_TAG_ACCEPTANCE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       EdgeLocations: [ // ExternalRegionCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceArn: "STRING_VALUE",
 * //       AttachmentPolicyRuleNumber: Number("int"),
 * //       SegmentName: "STRING_VALUE",
 * //       NetworkFunctionGroupName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ProposedSegmentChange: { // ProposedSegmentChange
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AttachmentPolicyRuleNumber: Number("int"),
 * //         SegmentName: "STRING_VALUE",
 * //       },
 * //       ProposedNetworkFunctionGroupChange: { // ProposedNetworkFunctionGroupChange
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AttachmentPolicyRuleNumber: Number("int"),
 * //         NetworkFunctionGroupName: "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       LastModificationErrors: [ // AttachmentErrorList
 * //         { // AttachmentError
 * //           Code: "VPC_NOT_FOUND" || "SUBNET_NOT_FOUND" || "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE" || "SUBNET_NO_FREE_ADDRESSES" || "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE" || "SUBNET_NO_IPV6_CIDRS" || "VPN_CONNECTION_NOT_FOUND" || "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED" || "DIRECT_CONNECT_GATEWAY_NOT_FOUND" || "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS" || "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF",
 * //           Message: "STRING_VALUE",
 * //           ResourceArn: "STRING_VALUE",
 * //           RequestId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     DirectConnectGatewayArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDirectConnectGatewayAttachmentCommandInput - {@link GetDirectConnectGatewayAttachmentCommandInput}
 * @returns {@link GetDirectConnectGatewayAttachmentCommandOutput}
 * @see {@link GetDirectConnectGatewayAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetDirectConnectGatewayAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 * @public
 */
export class GetDirectConnectGatewayAttachmentCommand extends $Command
  .classBuilder<
    GetDirectConnectGatewayAttachmentCommandInput,
    GetDirectConnectGatewayAttachmentCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "GetDirectConnectGatewayAttachment", {})
  .n("NetworkManagerClient", "GetDirectConnectGatewayAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_GetDirectConnectGatewayAttachmentCommand)
  .de(de_GetDirectConnectGatewayAttachmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDirectConnectGatewayAttachmentRequest;
      output: GetDirectConnectGatewayAttachmentResponse;
    };
    sdk: {
      input: GetDirectConnectGatewayAttachmentCommandInput;
      output: GetDirectConnectGatewayAttachmentCommandOutput;
    };
  };
}
