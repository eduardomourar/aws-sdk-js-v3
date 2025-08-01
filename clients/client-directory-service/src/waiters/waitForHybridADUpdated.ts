// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeHybridADUpdateCommand,
  DescribeHybridADUpdateCommandInput,
} from "../commands/DescribeHybridADUpdateCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";

const checkState = async (
  client: DirectoryServiceClient,
  input: DescribeHybridADUpdateCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeHybridADUpdateCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.UpdateActivities.SelfManagedInstances);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "Updated";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.UpdateActivities.SelfManagedInstances);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "UpdateFailed") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilHybridADUpdated instead. waitForHybridADUpdated does not throw error in non-success cases.
 */
export const waitForHybridADUpdated = async (
  params: WaiterConfiguration<DirectoryServiceClient>,
  input: DescribeHybridADUpdateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeHybridADUpdateCommand for polling.
 */
export const waitUntilHybridADUpdated = async (
  params: WaiterConfiguration<DirectoryServiceClient>,
  input: DescribeHybridADUpdateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
