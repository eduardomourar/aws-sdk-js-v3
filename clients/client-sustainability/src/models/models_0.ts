// smithy-typescript generated code
import type { Dimension, EmissionsType, EmissionsUnit, TimeGranularity } from "./enums";

/**
 * <p>Filters emission values by specific dimension values.</p>
 * @public
 */
export interface FilterExpression {
  /**
   * <p>Filters emission values by specific dimension values.</p>
   * @public
   */
  Dimensions?: Partial<Record<Dimension, string[]>> | undefined;
}

/**
 * <p> Contains configuration for the fiscal year granularities (e.g., <code>YEARLY_FISCAL</code>, <code>QUARTERLY_FISCAL</code>. </p>
 * @public
 */
export interface GranularityConfiguration {
  /**
   * <p> The month (1-12) when the fiscal year begins. Used for <code>YEARLY_FISCAL</code> and <code>QUARTERLY_FISCAL</code> granularity. Defaults to 1 (January). </p>
   * @public
   */
  FiscalYearStartMonth?: number | undefined;
}

/**
 * <p>Represents a duration of time defined by start and end timestamps.</p>
 * @public
 */
export interface TimePeriod {
  /**
   * <p>The start (inclusive) of the time period. ISO-8601 formatted timestamp, for example: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> </p>
   * @public
   */
  Start: Date | undefined;

  /**
   * <p>The end (exclusive) of the time period. ISO-8601 formatted timestamp, for example: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> </p>
   * @public
   */
  End: Date | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsRequest {
  /**
   * <p>The date range for fetching estimated carbon emissions.</p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions available for grouping estimated carbon emissions.</p>
   * @public
   */
  GroupBy?: Dimension[] | undefined;

  /**
   * <p>The criteria for filtering estimated carbon emissions.</p>
   * @public
   */
  FilterBy?: FilterExpression | undefined;

  /**
   * <p>The emission types to include in the results. If absent, returns <code>TOTAL_LBM_CARBON_EMISSIONS</code> and <code>TOTAL_MBM_CARBON_EMISSIONS</code> emissions types. </p>
   * @public
   */
  EmissionsTypes?: EmissionsType[] | undefined;

  /**
   * <p>The time granularity for the results. If absent, uses <code>MONTHLY</code> time granularity.</p>
   * @public
   */
  Granularity?: TimeGranularity | undefined;

  /**
   * <p>Configuration for fiscal year calculations when using <code>YEARLY_FISCAL</code> or <code>QUARTERLY_FISCAL</code> granularity. </p>
   * @public
   */
  GranularityConfiguration?: GranularityConfiguration | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Default is 40.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a carbon emissions quantity with its value and unit of measurement.</p>
 * @public
 */
export interface Emissions {
  /**
   * <p>The numeric value of the emissions quantity.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The unit of measurement for the emissions value.</p>
   * @public
   */
  Unit: EmissionsUnit | undefined;
}

/**
 * <p>Contains estimated carbon emissions data for a specific time period and dimension grouping.</p>
 * @public
 */
export interface EstimatedCarbonEmissions {
  /**
   * <p>The reporting period for emission values.</p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions used to group emissions values.</p>
   * @public
   */
  DimensionsValues: Partial<Record<Dimension, string>> | undefined;

  /**
   * <p>The semantic version-formatted string that indicates the methodology version used to calculate the emission values. </p> <note> <p> The AWS Sustainability service reflects the most recent model version for every month. You will not see two entries for the same month with different <code>ModelVersion</code> values. To track the evolution of the methodology and compare emission values from previous versions, we recommend creating a <a href="https://docs.aws.amazon.com/cur/latest/userguide/what-is-data-exports.html">Data Export</a>. </p> </note>
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * <p>The emissions values for the requested emissions types.</p>
   * @public
   */
  EmissionsValues: Partial<Record<EmissionsType, Emissions>> | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsResponse {
  /**
   * <p>The result of the requested inputs.</p>
   * @public
   */
  Results: EstimatedCarbonEmissions[] | undefined;

  /**
   * <p>The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesRequest {
  /**
   * <p>The date range for fetching the dimension values.</p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions available for grouping estimated carbon emissions.</p>
   * @public
   */
  Dimensions: Dimension[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Default is 40.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a dimension and its corresponding value.</p>
 * @public
 */
export interface DimensionEntry {
  /**
   * <p>The dimension type that categorizes this entry.</p>
   * @public
   */
  Dimension: Dimension | undefined;

  /**
   * <p> The value for the specified dimension. Valid values vary based on the dimension type (e.g., <code>us-east-1</code> for the <code>REGION</code> dimension, <code>AmazonEC2</code> for the <code>SERVICE</code> dimension). </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesResponse {
  /**
   * <p>The list of possible dimensions over which the emissions data is aggregated.</p>
   * @public
   */
  Results?: DimensionEntry[] | undefined;

  /**
   * <p>The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}
