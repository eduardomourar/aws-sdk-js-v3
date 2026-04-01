// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeDaemonTaskDefinitionCommandInput,
  DescribeDaemonTaskDefinitionCommand,
} from "../commands/DescribeDaemonTaskDefinitionCommand";
import type { ECSClient } from "../ECSClient";

const checkState = async (client: ECSClient, input: DescribeDaemonTaskDefinitionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeDaemonTaskDefinitionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.daemonTaskDefinition.status;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilDaemonTaskDefinitionDeleted instead. waitForDaemonTaskDefinitionDeleted does not throw error in non-success cases.
 */
export const waitForDaemonTaskDefinitionDeleted = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonTaskDefinitionCommand for polling.
 */
export const waitUntilDaemonTaskDefinitionDeleted = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
