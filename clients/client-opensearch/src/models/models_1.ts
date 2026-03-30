// smithy-typescript generated code
import type { ActionType, ScheduleAt } from "./enums";
import type { ChangeProgressDetails, ScheduledAction, VpcEndpoint, VPCOptions } from "./models_0";

/**
 * @public
 */
export interface UpdateScheduledActionRequest {
  /**
   * <p>The name of the domain to reschedule an action for.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the action to reschedule. To retrieve this ID, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.</p>
   * @public
   */
  ActionID: string | undefined;

  /**
   * <p>The type of action to reschedule. Can be one of <code>SERVICE_SOFTWARE_UPDATE</code>,
   *                 <code>JVM_HEAP_SIZE_TUNING</code>, or <code>JVM_YOUNG_GEN_TUNING</code>. To retrieve
   *             this value, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.</p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>When to schedule the action.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Immediately schedules the update to happen in the current
   *                     hour if there's capacity available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the
   *                     update. If you specify this value, you must also provide a value for
   *                         <code>DesiredStartTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFF_PEAK_WINDOW</code> - Marks the action to be picked up during an
   *                     upcoming off-peak window. There's no guarantee that the change will be
   *                     implemented during the next immediate window. Depending on capacity, it might
   *                     happen in subsequent days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScheduleAt: ScheduleAt | undefined;

  /**
   * <p>The time to implement the change, in Coordinated Universal Time (UTC). Only specify
   *             this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.</p>
   * @public
   */
  DesiredStartTime?: number | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledActionResponse {
  /**
   * <p>Information about the rescheduled action.</p>
   * @public
   */
  ScheduledAction?: ScheduledAction | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>The security groups and/or subnets to add, remove, or modify.</p>
   * @public
   */
  VpcOptions: VPCOptions | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointResponse {
  /**
   * <p>The endpoint to be updated.</p>
   * @public
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * <p>Container for the request parameters to the <code>UpgradeDomain</code>
 *             operation.</p>
 * @public
 */
export interface UpgradeDomainRequest {
  /**
   * <p>Name of the OpenSearch Service domain that you want to upgrade.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>OpenSearch or Elasticsearch version to which you want to upgrade, in the format
   *             Opensearch_X.Y or Elasticsearch_X.Y.</p>
   * @public
   */
  TargetVersion: string | undefined;

  /**
   * <p>When true, indicates that an upgrade eligibility check needs to be performed. Does not
   *             actually perform the upgrade.</p>
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * <p>Only supports the <code>override_main_response_version</code> parameter and not other
   *             advanced options. You can only include this option when upgrading to an OpenSearch
   *             version. Specifies whether the domain reports its version as 7.10 so that it continues
   *             to work with Elasticsearch OSS clients and plugins.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;
}

/**
 * <p>Container for the response returned by <code>UpgradeDomain</code> operation.</p>
 * @public
 */
export interface UpgradeDomainResponse {
  /**
   * <p>The unique identifier of the domain upgrade.</p>
   * @public
   */
  UpgradeId?: string | undefined;

  /**
   * <p>The name of the domain that was upgraded.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>OpenSearch or Elasticsearch version that the domain was upgraded to.</p>
   * @public
   */
  TargetVersion?: string | undefined;

  /**
   * <p>When true, indicates that an upgrade eligibility check was performed.</p>
   * @public
   */
  PerformCheckOnly?: boolean | undefined;

  /**
   * <p>The advanced options configuration for the domain.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>Container for information about a configuration change happening on a domain.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;
}
