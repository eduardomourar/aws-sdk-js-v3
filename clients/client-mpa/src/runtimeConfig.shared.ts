// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { NoOpLogger } from "@smithy/smithy-client";
import { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultMPAHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MPAClientConfig } from "./MPAClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MPAClientConfig) => {
  return {
    apiVersion: "2022-07-26",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultMPAHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "MPA",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
