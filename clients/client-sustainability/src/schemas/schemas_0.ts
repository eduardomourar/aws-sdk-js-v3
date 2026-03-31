const _ADE = "AccessDeniedException";
const _D = "Dimension";
const _DE = "DimensionEntry";
const _DEL = "DimensionEntryList";
const _DLM = "DimensionListMap";
const _DV = "DimensionsValues";
const _Di = "Dimensions";
const _E = "Emissions";
const _ECE = "EstimatedCarbonEmissions";
const _ECEL = "EstimatedCarbonEmissionsList";
const _EM = "EmissionsMap";
const _ET = "EmissionsTypes";
const _EV = "EmissionsValues";
const _En = "End";
const _FB = "FilterBy";
const _FE = "FilterExpression";
const _FYSM = "FiscalYearStartMonth";
const _G = "Granularity";
const _GB = "GroupBy";
const _GC = "GranularityConfiguration";
const _GECE = "GetEstimatedCarbonEmissions";
const _GECEDV = "GetEstimatedCarbonEmissionsDimensionValues";
const _GECEDVR = "GetEstimatedCarbonEmissionsDimensionValuesRequest";
const _GECEDVRe = "GetEstimatedCarbonEmissionsDimensionValuesResponse";
const _GECER = "GetEstimatedCarbonEmissionsRequest";
const _GECERe = "GetEstimatedCarbonEmissionsResponse";
const _ISE = "InternalServerException";
const _M = "Message";
const _MR = "MaxResults";
const _MV = "ModelVersion";
const _NT = "NextToken";
const _R = "Results";
const _S = "Start";
const _TE = "ThrottlingException";
const _TP = "TimePeriod";
const _U = "Unit";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _jN = "jsonName";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sustainability";
const _se = "server";
const n0 = "com.amazonaws.sustainability";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { SustainabilityServiceException } from "../models/SustainabilityServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SustainabilityServiceException$: StaticErrorSchema = [-3, _s, "SustainabilityServiceException", 0, [], []];
_s_registry.registerError(SustainabilityServiceException$, SustainabilityServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var DimensionEntry$: StaticStructureSchema = [3, n0, _DE,
  0,
  [_D, _V],
  [0, 0], 2
];
export var Emissions$: StaticStructureSchema = [3, n0, _E,
  0,
  [_V, _U],
  [1, 0], 2
];
export var EstimatedCarbonEmissions$: StaticStructureSchema = [3, n0, _ECE,
  0,
  [_TP, _DV, _MV, _EV],
  [() => TimePeriod$, 128 | 0, 0, () => EmissionsMap], 4
];
export var FilterExpression$: StaticStructureSchema = [3, n0, _FE,
  0,
  [_Di],
  [[2, n0, _DLM, 0, 0, 64 | 0]]
];
export var GetEstimatedCarbonEmissionsDimensionValuesRequest$: StaticStructureSchema = [3, n0, _GECEDVR,
  0,
  [_TP, _Di, _MR, _NT],
  [() => TimePeriod$, 64 | 0, 1, 0], 2
];
export var GetEstimatedCarbonEmissionsDimensionValuesResponse$: StaticStructureSchema = [3, n0, _GECEDVRe,
  0,
  [_R, _NT],
  [() => DimensionEntryList, 0]
];
export var GetEstimatedCarbonEmissionsRequest$: StaticStructureSchema = [3, n0, _GECER,
  0,
  [_TP, _GB, _FB, _ET, _G, _GC, _MR, _NT],
  [() => TimePeriod$, 64 | 0, () => FilterExpression$, 64 | 0, 0, () => GranularityConfiguration$, 1, 0], 1
];
export var GetEstimatedCarbonEmissionsResponse$: StaticStructureSchema = [3, n0, _GECERe,
  0,
  [_R, _NT],
  [() => EstimatedCarbonEmissionsList, 0], 1
];
export var GranularityConfiguration$: StaticStructureSchema = [3, n0, _GC,
  0,
  [_FYSM],
  [1]
];
export var TimePeriod$: StaticStructureSchema = [3, n0, _TP,
  0,
  [_S, _En],
  [5, 5], 2
];
var DimensionEntryList: StaticListSchema = [1, n0, _DEL,
  0, () => DimensionEntry$
];
var DimensionList = 64 | 0;
var DimensionValueList = 64 | 0;
var EmissionsTypeList = 64 | 0;
var EstimatedCarbonEmissionsList: StaticListSchema = [1, n0, _ECEL,
  0, () => EstimatedCarbonEmissions$
];
var DimensionListMap: StaticMapSchema = [2, n0, _DLM,
  0, 0, 64 | 0
];
var DimensionsMap = 128 | 0;
var EmissionsMap: StaticMapSchema = [2, n0, _EM,
  0, 0, () => Emissions$
];
export var GetEstimatedCarbonEmissions$: StaticOperationSchema = [9, n0, _GECE,
  { [_h]: ["POST", "/v1/estimated-carbon-emissions", 200] }, () => GetEstimatedCarbonEmissionsRequest$, () => GetEstimatedCarbonEmissionsResponse$
];
export var GetEstimatedCarbonEmissionsDimensionValues$: StaticOperationSchema = [9, n0, _GECEDV,
  { [_h]: ["POST", "/v1/estimated-carbon-emissions-dimension-values", 200] }, () => GetEstimatedCarbonEmissionsDimensionValuesRequest$, () => GetEstimatedCarbonEmissionsDimensionValuesResponse$
];
