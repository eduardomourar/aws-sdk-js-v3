// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { DeleteSyncConfigurationInput, DeleteSyncConfigurationOutput } from "../models/models_0";
import { de_DeleteSyncConfigurationCommand, se_DeleteSyncConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSyncConfigurationCommand}.
 */
export interface DeleteSyncConfigurationCommandInput extends DeleteSyncConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteSyncConfigurationCommand}.
 */
export interface DeleteSyncConfigurationCommandOutput extends DeleteSyncConfigurationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the sync configuration for a specified repository and connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteSyncConfigurationCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteSyncConfigurationCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // DeleteSyncConfigurationInput
 *   SyncType: "CFN_STACK_SYNC", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSyncConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSyncConfigurationCommandInput - {@link DeleteSyncConfigurationCommandInput}
 * @returns {@link DeleteSyncConfigurationCommandOutput}
 * @see {@link DeleteSyncConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSyncConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded the maximum limit for connections.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 */
export class DeleteSyncConfigurationCommand extends $Command<
  DeleteSyncConfigurationCommandInput,
  DeleteSyncConfigurationCommandOutput,
  CodeStarConnectionsClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteSyncConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSyncConfigurationCommandInput, DeleteSyncConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSyncConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "DeleteSyncConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_connections_20191201",
        operation: "DeleteSyncConfiguration",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteSyncConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSyncConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSyncConfigurationCommandOutput> {
    return de_DeleteSyncConfigurationCommand(output, context);
  }
}
