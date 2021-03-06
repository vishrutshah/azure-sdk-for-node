/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PaasServiceTypeHealthPolicy class.
 * @constructor
 * Paas service type health policy
 *
 * @member {number} [maxPercentUnhealthyServices] max percent of unhealthy
 * services
 *
 */
class PaasServiceTypeHealthPolicy {
  constructor() {
  }

  /**
   * Defines the metadata of PaasServiceTypeHealthPolicy
   *
   * @returns {object} metadata of PaasServiceTypeHealthPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PaasServiceTypeHealthPolicy',
      type: {
        name: 'Composite',
        className: 'PaasServiceTypeHealthPolicy',
        modelProperties: {
          maxPercentUnhealthyServices: {
            required: false,
            serializedName: 'maxPercentUnhealthyServices',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = PaasServiceTypeHealthPolicy;
