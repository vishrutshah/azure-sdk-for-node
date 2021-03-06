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
 * Initializes a new instance of the RedisFirewallRule class.
 * @constructor
 * A firewall rule on a redis cache has a name, and describes a contiguous
 * range of IP addresses permitted to connect
 *
 * @member {string} [id] resource ID (of the firewall rule)
 *
 * @member {string} [name] name of the firewall rule
 *
 * @member {string} [type] type (of the firewall rule resource =
 * 'Microsoft.Cache/redis/firewallRule')
 *
 * @member {string} startIP lowest IP address included in the range
 *
 * @member {string} endIP highest IP address included in the range
 *
 */
class RedisFirewallRule {
  constructor() {
  }

  /**
   * Defines the metadata of RedisFirewallRule
   *
   * @returns {object} metadata of RedisFirewallRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisFirewallRule',
      type: {
        name: 'Composite',
        className: 'RedisFirewallRule',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          startIP: {
            required: true,
            serializedName: 'properties.startIP',
            type: {
              name: 'String'
            }
          },
          endIP: {
            required: true,
            serializedName: 'properties.endIP',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RedisFirewallRule;
