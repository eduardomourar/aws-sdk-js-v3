import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from "@smithy/config-resolver";
import { Hash } from "@smithy/hash-node";
import { loadConfig } from "@smithy/node-config-provider";

import type { SignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerConfig) => {
  return {
    runtime: "node",
    ...config,
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    credentials:
      config?.credentials ??
      fromNodeProviderChain({
        profile: config.profile,
      }),
    region:
      config?.region ??
      loadConfig(NODE_REGION_CONFIG_OPTIONS, {
        ...NODE_REGION_CONFIG_FILE_OPTIONS,
        profile: config.profile,
      }),
  };
};
