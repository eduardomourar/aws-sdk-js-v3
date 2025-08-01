// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServicePrimaryTaskSetRequest, UpdateServicePrimaryTaskSetResponse } from "../models/models_1";
import { de_UpdateServicePrimaryTaskSetCommand, se_UpdateServicePrimaryTaskSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServicePrimaryTaskSetCommand}.
 */
export interface UpdateServicePrimaryTaskSetCommandInput extends UpdateServicePrimaryTaskSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServicePrimaryTaskSetCommand}.
 */
export interface UpdateServicePrimaryTaskSetCommandOutput
  extends UpdateServicePrimaryTaskSetResponse,
    __MetadataBearer {}

/**
 * <p>Modifies which task set in a service is the primary task set. Any parameters that are
 * 			updated on the primary task set in a service will transition to the service. This is
 * 			used when a service uses the <code>EXTERNAL</code> deployment controller type. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateServicePrimaryTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateServicePrimaryTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // UpdateServicePrimaryTaskSetRequest
 *   cluster: "STRING_VALUE", // required
 *   service: "STRING_VALUE", // required
 *   primaryTaskSet: "STRING_VALUE", // required
 * };
 * const command = new UpdateServicePrimaryTaskSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServicePrimaryTaskSetResponse
 * //   taskSet: { // TaskSet
 * //     id: "STRING_VALUE",
 * //     taskSetArn: "STRING_VALUE",
 * //     serviceArn: "STRING_VALUE",
 * //     clusterArn: "STRING_VALUE",
 * //     startedBy: "STRING_VALUE",
 * //     externalId: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     taskDefinition: "STRING_VALUE",
 * //     computedDesiredCount: Number("int"),
 * //     pendingCount: Number("int"),
 * //     runningCount: Number("int"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //     capacityProviderStrategy: [ // CapacityProviderStrategy
 * //       { // CapacityProviderStrategyItem
 * //         capacityProvider: "STRING_VALUE", // required
 * //         weight: Number("int"),
 * //         base: Number("int"),
 * //       },
 * //     ],
 * //     platformVersion: "STRING_VALUE",
 * //     platformFamily: "STRING_VALUE",
 * //     networkConfiguration: { // NetworkConfiguration
 * //       awsvpcConfiguration: { // AwsVpcConfiguration
 * //         subnets: [ // StringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         assignPublicIp: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //     loadBalancers: [ // LoadBalancers
 * //       { // LoadBalancer
 * //         targetGroupArn: "STRING_VALUE",
 * //         loadBalancerName: "STRING_VALUE",
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         advancedConfiguration: { // AdvancedConfiguration
 * //           alternateTargetGroupArn: "STRING_VALUE",
 * //           productionListenerRule: "STRING_VALUE",
 * //           testListenerRule: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     serviceRegistries: [ // ServiceRegistries
 * //       { // ServiceRegistry
 * //         registryArn: "STRING_VALUE",
 * //         port: Number("int"),
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //       },
 * //     ],
 * //     scale: { // Scale
 * //       value: Number("double"),
 * //       unit: "PERCENT",
 * //     },
 * //     stabilityStatus: "STEADY_STATE" || "STABILIZING",
 * //     stabilityStatusAt: new Date("TIMESTAMP"),
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     fargateEphemeralStorage: { // DeploymentEphemeralStorage
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServicePrimaryTaskSetCommandInput - {@link UpdateServicePrimaryTaskSetCommandInput}
 * @returns {@link UpdateServicePrimaryTaskSetCommandOutput}
 * @see {@link UpdateServicePrimaryTaskSetCommandInput} for command's `input` shape.
 * @see {@link UpdateServicePrimaryTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotActiveException} (client fault)
 *  <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link TaskSetNotFoundException} (client fault)
 *  <p>The specified task set wasn't found. You can view your available task sets with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html">DescribeTaskSets</a>. Task sets are specific to each cluster, service and
 * 			Region.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To update the primary task set for a service
 * ```javascript
 * // This example updates the primary task set for a service MyService that uses the EXTERNAL deployment controller type.
 * const input = {
 *   cluster: "MyCluster",
 *   primaryTaskSet: "arn:aws:ecs:us-west-2:123456789012:task-set/MyCluster/MyService/ecs-svc/1234567890123456789",
 *   service: "MyService"
 * };
 * const command = new UpdateServicePrimaryTaskSetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   taskSet: {
 *     computedDesiredCount: 1,
 *     createdAt: 1.557128360711E9,
 *     id: "ecs-svc/1234567890123456789",
 *     launchType: "EC2",
 *     loadBalancers:     [],
 *     networkConfiguration: {
 *       awsvpcConfiguration: {
 *         assignPublicIp: "DISABLED",
 *         securityGroups: [
 *           "sg-12344312"
 *         ],
 *         subnets: [
 *           "subnet-12344321"
 *         ]
 *       }
 *     },
 *     pendingCount: 0,
 *     runningCount: 0,
 *     scale: {
 *       unit: "PERCENT",
 *       value: 50
 *     },
 *     serviceRegistries:     [],
 *     stabilityStatus: "STABILIZING",
 *     stabilityStatusAt: 1.557129279914E9,
 *     status: "PRIMARY",
 *     taskDefinition: "arn:aws:ecs:us-west-2:123456789012:task-definition/sample-fargate:2",
 *     taskSetArn: "arn:aws:ecs:us-west-2:123456789012:task-set/MyCluster/MyService/ecs-svc/1234567890123456789",
 *     updatedAt: 1.557129412653E9
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateServicePrimaryTaskSetCommand extends $Command
  .classBuilder<
    UpdateServicePrimaryTaskSetCommandInput,
    UpdateServicePrimaryTaskSetCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "UpdateServicePrimaryTaskSet", {})
  .n("ECSClient", "UpdateServicePrimaryTaskSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateServicePrimaryTaskSetCommand)
  .de(de_UpdateServicePrimaryTaskSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServicePrimaryTaskSetRequest;
      output: UpdateServicePrimaryTaskSetResponse;
    };
    sdk: {
      input: UpdateServicePrimaryTaskSetCommandInput;
      output: UpdateServicePrimaryTaskSetCommandOutput;
    };
  };
}
