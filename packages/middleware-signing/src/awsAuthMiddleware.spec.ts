import { HttpRequest } from "@smithy/protocol-http";
import { RequestSigner } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { AwsAuthResolvedConfig } from "./awsAuthConfiguration";
import { awsAuthMiddleware } from "./awsAuthMiddleware";
import { getSkewCorrectedDate } from "./utils/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";

vi.mock("./utils/getUpdatedSystemClockOffset");
vi.mock("./utils/getSkewCorrectedDate");

describe(awsAuthMiddleware.name, () => {
  let mockSignFn: any;
  let mockSigner: () => Promise<RequestSigner>;
  let mockOptions: AwsAuthResolvedConfig;

  const mockNext: any = vi.fn();
  const mockSystemClockOffset = 100;
  const mockUpdatedSystemClockOffset = 500;
  const mockSigningHandlerArgs = {
    input: {},
    request: new HttpRequest({
      headers: {},
    }),
  };
  const mockSignedRequest = new HttpRequest({ headers: { signed: "true" } });
  const mockSkewCorrectedDate = new Date();
  const mockResponse = { output: "", response: "" };

  beforeEach(() => {
    mockSignFn = vi.fn().mockResolvedValue(mockSignedRequest);
    mockSigner = () => Promise.resolve({ sign: mockSignFn } as RequestSigner);
    mockNext.mockResolvedValue(mockResponse);
    mockOptions = {
      credentials: vi.fn(),
      signer: mockSigner,
      signingEscapePath: true,
      systemClockOffset: mockSystemClockOffset,
    };
    vi.mocked(getUpdatedSystemClockOffset).mockReturnValue(mockUpdatedSystemClockOffset);
    vi.mocked(getSkewCorrectedDate).mockReturnValue(mockSkewCorrectedDate);
  });

  afterEach(() => {
    expect(getSkewCorrectedDate).toHaveBeenCalledTimes(1);
    expect(getSkewCorrectedDate).toHaveBeenCalledWith(mockSystemClockOffset);
    expect(mockSignFn).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith({ ...mockSigningHandlerArgs, request: mockSignedRequest });
    vi.clearAllMocks();
  });

  it("should sign the request with systemClockOffset", async () => {
    const signingHandler = awsAuthMiddleware(mockOptions)(mockNext, {});
    const output = await signingHandler(mockSigningHandlerArgs);

    expect(output).toStrictEqual(mockResponse);
    expect(mockSignFn).toHaveBeenCalledWith(mockSigningHandlerArgs.request, { signingDate: mockSkewCorrectedDate });
    expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
  });

  it("should call the signer with the region and service overrides from context", async () => {
    const handlerContext = { signing_region: "us-foo-1", signing_service: "BAR" };
    const signingHandler = awsAuthMiddleware(mockOptions)(mockNext, handlerContext);
    const output = await signingHandler(mockSigningHandlerArgs);

    expect(output).toStrictEqual(mockResponse);
    expect(mockSignFn).toHaveBeenCalledWith(mockSigningHandlerArgs.request, {
      signingDate: mockSkewCorrectedDate,
      signingRegion: handlerContext.signing_region,
      signingService: handlerContext.signing_service,
    });
    expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
  });

  describe("should update systemClockOffset if date header is present", () => {
    it.each(["date", "Date"])("header '%s'", async (headerName) => {
      const dateHeader = new Date().toString();
      const options = { ...mockOptions };
      const signingHandler = awsAuthMiddleware(options)(mockNext, {});

      const mockResponseWithDateHeader = {
        output: "",
        response: { headers: { [headerName]: dateHeader }, statusCode: 200 },
      };
      mockNext.mockResolvedValue(mockResponseWithDateHeader);

      const output = await signingHandler(mockSigningHandlerArgs);

      expect(output).toStrictEqual(mockResponseWithDateHeader);
      expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
      expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
      expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(dateHeader, mockSystemClockOffset);
    });

    it.each(["date", "Date"])("error response with header '%s'", async (headerName) => {
      const serverTime = new Date().toString();
      const options = { ...mockOptions };
      const signingHandler = awsAuthMiddleware(options)(mockNext, {});

      const mockError = Object.assign(new Error("error"), {
        $response: { statusCode: 400, headers: { [headerName]: serverTime } },
      });
      mockNext.mockRejectedValue(mockError);

      try {
        await signingHandler(mockSigningHandlerArgs);
        fail(`should throw ${mockError}`);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
      }

      expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
      expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
      expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(serverTime, mockSystemClockOffset);
    });
  });

  it("should update systemClockOffset if error contains ServerTime", async () => {
    const serverTime = new Date().toString();
    const options = { ...mockOptions };
    const signingHandler = awsAuthMiddleware(options)(mockNext, {});

    const mockError = Object.assign(new Error("error"), { ServerTime: serverTime });
    mockNext.mockRejectedValue(mockError);

    try {
      await signingHandler(mockSigningHandlerArgs);
      fail(`should throw ${mockError}`);
    } catch (error) {
      expect(error).toStrictEqual(mockError);
    }

    expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
    expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
    expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(serverTime, mockSystemClockOffset);
  });
});
