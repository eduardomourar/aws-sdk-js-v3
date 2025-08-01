import { booleanSelector, SelectorType } from "@smithy/util-config-provider";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import {
  NODE_USE_ARN_REGION_CONFIG_OPTIONS,
  NODE_USE_ARN_REGION_ENV_NAME,
  NODE_USE_ARN_REGION_INI_NAME,
} from "./NodeUseArnRegionConfigOptions";

vi.mock("@smithy/util-config-provider");

describe("NODE_USE_ARN_REGION_CONFIG_OPTIONS", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const test = (func: Function, obj: Record<string, string>, key: string, type: SelectorType) => {
    it.each([true, false, undefined])("returns %s", (output) => {
      vi.mocked(booleanSelector).mockReturnValueOnce(output);
      expect(func(obj)).toEqual(output);
      expect(booleanSelector).toBeCalledWith(obj, key, type);
    });

    it("throws error", () => {
      const mockError = new Error("error");
      vi.mocked(booleanSelector).mockImplementationOnce(() => {
        throw mockError;
      });
      expect(() => {
        func(obj);
      }).toThrow(mockError);
    });
  };

  describe("calls booleanSelector for environmentVariableSelector", () => {
    const env: { [NODE_USE_ARN_REGION_ENV_NAME]: any } = {} as any;
    const { environmentVariableSelector } = NODE_USE_ARN_REGION_CONFIG_OPTIONS;
    test(environmentVariableSelector, env, NODE_USE_ARN_REGION_ENV_NAME, SelectorType.ENV);
  });

  describe("calls booleanSelector for configFileSelector", () => {
    const profileContent: { [NODE_USE_ARN_REGION_INI_NAME]: any } = {} as any;
    const { configFileSelector } = NODE_USE_ARN_REGION_CONFIG_OPTIONS;
    test(configFileSelector, profileContent, NODE_USE_ARN_REGION_INI_NAME, SelectorType.CONFIG);
  });

  it("returns undefined for default", () => {
    const { default: defaultValue } = NODE_USE_ARN_REGION_CONFIG_OPTIONS;
    expect(defaultValue).toEqual(undefined);
  });
});
