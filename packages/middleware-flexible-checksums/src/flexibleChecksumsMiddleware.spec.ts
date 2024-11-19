import { HttpRequest } from "@smithy/protocol-http";
import { BuildHandlerArguments } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { flexibleChecksumsMiddleware } from "./flexibleChecksumsMiddleware";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { hasHeader } from "./hasHeader";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { stringHasher } from "./stringHasher";

vi.mock("@smithy/protocol-http");
vi.mock("./getChecksumAlgorithmForRequest");
vi.mock("./getChecksumLocationName");
vi.mock("./hasHeader");
vi.mock("./isStreaming");
vi.mock("./selectChecksumAlgorithmFunction");
vi.mock("./stringHasher");

describe(flexibleChecksumsMiddleware.name, () => {
  const mockNext = vi.fn();

  const mockChecksum = "mockChecksum";
  const mockChecksumAlgorithmFunction = vi.fn();
  const mockChecksumLocationName = "mock-checksum-location-name";

  const mockInput = {};
  const mockConfig = {} as PreviouslyResolved;
  const mockMiddlewareConfig = { requestChecksumRequired: false };

  const mockBody = { body: "mockRequestBody" };
  const mockHeaders = { "content-length": 100, "content-encoding": "gzip" };
  const mockRequest = { body: mockBody, headers: mockHeaders };
  const mockArgs = { input: mockInput, request: mockRequest } as BuildHandlerArguments<any>;
  const mockResult = { response: { body: "mockResponsebody" } };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResult);
    const { isInstance } = HttpRequest;
    (isInstance as unknown as any).mockReturnValue(true);
    vi.mocked(getChecksumAlgorithmForRequest).mockReturnValue(ChecksumAlgorithm.MD5);
    vi.mocked(getChecksumLocationName).mockReturnValue(mockChecksumLocationName);
    vi.mocked(hasHeader).mockReturnValue(true);
    vi.mocked(isStreaming).mockReturnValue(false);
    vi.mocked(selectChecksumAlgorithmFunction).mockReturnValue(mockChecksumAlgorithmFunction);
  });

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });

  describe("skips", () => {
    it("if not an instance of HttpRequest", async () => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as any).mockReturnValue(false);
      const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
      await handler(mockArgs);
      expect(getChecksumAlgorithmForRequest).not.toHaveBeenCalled();
    });

    describe("request checksum", () => {
      afterEach(() => {
        expect(getChecksumAlgorithmForRequest).toHaveBeenCalledTimes(1);
      });

      it("if checksumAlgorithm is not defined", async () => {
        vi.mocked(getChecksumAlgorithmForRequest).mockReturnValue(undefined);
        const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
        await handler(mockArgs);
        expect(getChecksumLocationName).not.toHaveBeenCalled();
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
        expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
      });

      it("if header is already present", async () => {
        const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
        const mockHeadersWithChecksumHeader = { ...mockHeaders, [mockChecksumLocationName]: "mockHeaderValue" };
        const mockArgsWithChecksumHeader = {
          ...mockArgs,
          request: { ...mockRequest, headers: mockHeadersWithChecksumHeader },
        };
        await handler(mockArgsWithChecksumHeader);
        expect(getChecksumLocationName).toHaveBeenCalledWith(ChecksumAlgorithm.MD5);
        expect(selectChecksumAlgorithmFunction).toHaveBeenCalledWith(ChecksumAlgorithm.MD5, mockConfig);
        expect(mockNext).toHaveBeenCalledWith(mockArgsWithChecksumHeader);
        expect(hasHeader).toHaveBeenCalledWith(mockChecksumLocationName, mockHeadersWithChecksumHeader);
      });
    });
  });

  describe("adds checksum in the request header", () => {
    afterEach(() => {
      expect(getChecksumAlgorithmForRequest).toHaveBeenCalledTimes(1);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
      expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
    });

    it("for streaming body", async () => {
      vi.mocked(isStreaming).mockReturnValue(true);
      const mockUpdatedBody = { body: "mockUpdatedBody" };

      const mockBase64Encoder = vi.fn();
      const mockStreamHasher = vi.fn();
      const mockBodyLengthChecker = vi.fn();
      const mockGetAwsChunkedEncodingStream = vi.fn().mockReturnValue(mockUpdatedBody);

      const handler = flexibleChecksumsMiddleware(
        {
          ...mockConfig,
          base64Encoder: mockBase64Encoder,
          bodyLengthChecker: mockBodyLengthChecker,
          getAwsChunkedEncodingStream: mockGetAwsChunkedEncodingStream,
          streamHasher: mockStreamHasher,
        },
        mockMiddlewareConfig
      )(mockNext, {});
      await handler(mockArgs);

      expect(mockNext).toHaveBeenCalledWith({
        ...mockArgs,
        request: {
          ...mockRequest,
          headers: {
            ...mockHeaders,
            "content-length": undefined,
            "content-encoding": "gzip,aws-chunked",
            "transfer-encoding": "chunked",
            "x-amz-decoded-content-length": mockHeaders["content-length"],
            "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
            "x-amz-trailer": mockChecksumLocationName,
          },
          body: mockUpdatedBody,
        },
      });
      expect(mockGetAwsChunkedEncodingStream).toHaveBeenCalledWith(mockRequest.body, {
        base64Encoder: mockBase64Encoder,
        bodyLengthChecker: mockBodyLengthChecker,
        checksumLocationName: mockChecksumLocationName,
        checksumAlgorithmFn: mockChecksumAlgorithmFunction,
        streamHasher: mockStreamHasher,
      });
    });

    it("for non-streaming body", async () => {
      const mockRawChecksum = Buffer.from(mockChecksum);
      const mockBase64Encoder = vi.fn().mockReturnValue(mockChecksum);
      vi.mocked(stringHasher).mockResolvedValue(mockRawChecksum);
      vi.mocked(hasHeader).mockReturnValue(false);

      const handler = flexibleChecksumsMiddleware(
        { ...mockConfig, base64Encoder: mockBase64Encoder },
        mockMiddlewareConfig
      )(mockNext, {});
      await handler(mockArgs);
      expect(hasHeader).toHaveBeenCalledTimes(1);
      expect(mockNext).toHaveBeenCalledWith({
        ...mockArgs,
        request: {
          ...mockRequest,
          headers: { ...mockHeaders, [mockChecksumLocationName]: mockChecksum },
        },
      });
      expect(hasHeader).toHaveBeenCalledWith(mockChecksumLocationName, mockHeaders);
      expect(stringHasher).toHaveBeenCalledWith(mockChecksumAlgorithmFunction, mockRequest.body);
      expect(mockBase64Encoder).toHaveBeenCalledWith(mockRawChecksum);
    });
  });
});
