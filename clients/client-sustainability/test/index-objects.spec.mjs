import {
  AccessDeniedException,
  AccessDeniedException$,
  Dimension,
  DimensionEntry$,
  Emissions$,
  EmissionsType,
  EmissionsUnit,
  EstimatedCarbonEmissions$,
  FilterExpression$,
  GetEstimatedCarbonEmissions$,
  GetEstimatedCarbonEmissionsCommand,
  GetEstimatedCarbonEmissionsDimensionValues$,
  GetEstimatedCarbonEmissionsDimensionValuesCommand,
  GetEstimatedCarbonEmissionsDimensionValuesRequest$,
  GetEstimatedCarbonEmissionsDimensionValuesResponse$,
  GetEstimatedCarbonEmissionsRequest$,
  GetEstimatedCarbonEmissionsResponse$,
  GranularityConfiguration$,
  InternalServerException,
  InternalServerException$,
  paginateGetEstimatedCarbonEmissions,
  paginateGetEstimatedCarbonEmissionsDimensionValues,
  Sustainability,
  SustainabilityClient,
  SustainabilityServiceException,
  ThrottlingException,
  ThrottlingException$,
  TimeGranularity,
  TimePeriod$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SustainabilityClient === "function");
assert(typeof Sustainability === "function");
// commands
assert(typeof GetEstimatedCarbonEmissionsCommand === "function");
assert(typeof GetEstimatedCarbonEmissions$ === "object");
assert(typeof GetEstimatedCarbonEmissionsDimensionValuesCommand === "function");
assert(typeof GetEstimatedCarbonEmissionsDimensionValues$ === "object");
// structural schemas
assert(typeof DimensionEntry$ === "object");
assert(typeof Emissions$ === "object");
assert(typeof EstimatedCarbonEmissions$ === "object");
assert(typeof FilterExpression$ === "object");
assert(typeof GetEstimatedCarbonEmissionsDimensionValuesRequest$ === "object");
assert(typeof GetEstimatedCarbonEmissionsDimensionValuesResponse$ === "object");
assert(typeof GetEstimatedCarbonEmissionsRequest$ === "object");
assert(typeof GetEstimatedCarbonEmissionsResponse$ === "object");
assert(typeof GranularityConfiguration$ === "object");
assert(typeof TimePeriod$ === "object");
// enums
assert(typeof Dimension === "object");
assert(typeof EmissionsType === "object");
assert(typeof EmissionsUnit === "object");
assert(typeof TimeGranularity === "object");
// errors
assert(AccessDeniedException.prototype instanceof SustainabilityServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof SustainabilityServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof SustainabilityServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SustainabilityServiceException);
assert(typeof ValidationException$ === "object");
assert(SustainabilityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetEstimatedCarbonEmissions === "function");
assert(typeof paginateGetEstimatedCarbonEmissionsDimensionValues === "function");
console.log(`Sustainability index test passed.`);
