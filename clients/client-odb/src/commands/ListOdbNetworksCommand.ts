// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOdbNetworksInput, ListOdbNetworksOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { de_ListOdbNetworksCommand, se_ListOdbNetworksCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOdbNetworksCommand}.
 */
export interface ListOdbNetworksCommandInput extends ListOdbNetworksInput {}
/**
 * @public
 *
 * The output of {@link ListOdbNetworksCommand}.
 */
export interface ListOdbNetworksCommandOutput extends ListOdbNetworksOutput, __MetadataBearer {}

/**
 * <p>Returns information about the ODB networks owned by your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListOdbNetworksCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListOdbNetworksCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * const client = new OdbClient(config);
 * const input = { // ListOdbNetworksInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOdbNetworksCommand(input);
 * const response = await client.send(command);
 * // { // ListOdbNetworksOutput
 * //   nextToken: "STRING_VALUE",
 * //   odbNetworks: [ // OdbNetworkList // required
 * //     { // OdbNetworkSummary
 * //       odbNetworkId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       odbNetworkArn: "STRING_VALUE",
 * //       availabilityZone: "STRING_VALUE",
 * //       availabilityZoneId: "STRING_VALUE",
 * //       clientSubnetCidr: "STRING_VALUE",
 * //       backupSubnetCidr: "STRING_VALUE",
 * //       customDomainName: "STRING_VALUE",
 * //       defaultDnsPrefix: "STRING_VALUE",
 * //       peeredCidrs: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ociNetworkAnchorId: "STRING_VALUE",
 * //       ociNetworkAnchorUrl: "STRING_VALUE",
 * //       ociResourceAnchorName: "STRING_VALUE",
 * //       ociVcnId: "STRING_VALUE",
 * //       ociVcnUrl: "STRING_VALUE",
 * //       ociDnsForwardingConfigs: [ // OciDnsForwardingConfigList
 * //         { // OciDnsForwardingConfig
 * //           domainName: "STRING_VALUE",
 * //           ociDnsListenerIp: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       percentProgress: Number("float"),
 * //       managedServices: { // ManagedServices
 * //         serviceNetworkArn: "STRING_VALUE",
 * //         resourceGatewayArn: "STRING_VALUE",
 * //         managedServicesIpv4Cidrs: [
 * //           "STRING_VALUE",
 * //         ],
 * //         serviceNetworkEndpoint: { // ServiceNetworkEndpoint
 * //           vpcEndpointId: "STRING_VALUE",
 * //           vpcEndpointType: "SERVICENETWORK",
 * //         },
 * //         managedS3BackupAccess: { // ManagedS3BackupAccess
 * //           status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //           ipv4Addresses: "<StringList>",
 * //         },
 * //         zeroEtlAccess: { // ZeroEtlAccess
 * //           status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //           cidr: "STRING_VALUE",
 * //         },
 * //         s3Access: { // S3Access
 * //           status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //           ipv4Addresses: "<StringList>",
 * //           domainName: "STRING_VALUE",
 * //           s3PolicyDocument: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOdbNetworksCommandInput - {@link ListOdbNetworksCommandInput}
 * @returns {@link ListOdbNetworksCommandOutput}
 * @see {@link ListOdbNetworksCommandInput} for command's `input` shape.
 * @see {@link ListOdbNetworksCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListOdbNetworksCommand extends $Command
  .classBuilder<
    ListOdbNetworksCommandInput,
    ListOdbNetworksCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Odb", "ListOdbNetworks", {})
  .n("OdbClient", "ListOdbNetworksCommand")
  .f(void 0, void 0)
  .ser(se_ListOdbNetworksCommand)
  .de(de_ListOdbNetworksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOdbNetworksInput;
      output: ListOdbNetworksOutput;
    };
    sdk: {
      input: ListOdbNetworksCommandInput;
      output: ListOdbNetworksCommandOutput;
    };
  };
}
