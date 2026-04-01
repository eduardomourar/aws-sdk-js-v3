// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type DescribeDaemonCommandInput, DescribeDaemonCommand } from "../commands/DescribeDaemonCommand";
import type { ECSClient } from "../ECSClient";

const checkState = async (client: ECSClient, input: DescribeDaemonCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeDaemonCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.daemon.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.daemon.status;
      }
      if (returnComparator() === "DELETE_IN_PROGRESS") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilDaemonActive instead. waitForDaemonActive does not throw error in non-success cases.
 */
export const waitForDaemonActive = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonCommand for polling.
 */
export const waitUntilDaemonActive = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
