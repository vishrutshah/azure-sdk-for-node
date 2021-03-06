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
 * Initializes a new instance of the VerificationIPFlowParameters class.
 * @constructor
 * Parameters that define the IP flow to be verified.
 *
 * @member {string} targetResourceId The ID of the target resource to perform
 * next-hop on.
 *
 * @member {string} direction The direction of the packet represented as a
 * 5-tuple. Possible values include: 'Inbound', 'Outbound'
 *
 * @member {string} protocol Protocol to be verified on. Possible values
 * include: 'TCP', 'UDP'
 *
 * @member {string} localPort The local port. Acceptable values are a single
 * integer in the range (0-65535). Support for * for the source port, which
 * depends on the direction.
 *
 * @member {string} remotePort The remote port. Acceptable values are a single
 * integer in the range (0-65535). Support for * for the source port, which
 * depends on the direction.
 *
 * @member {string} localIPAddress The local IP address. Acceptable values are
 * valid IPv4 addresses.
 *
 * @member {string} remoteIPAddress The remote IP address. Acceptable values
 * are valid IPv4 addresses.
 *
 * @member {string} [targetNicResourceId] The NIC ID. (If VM has multiple NICs
 * and IP forwarding is enabled on any of them, then this parameter must be
 * specified. Otherwise optional).
 *
 */
class VerificationIPFlowParameters {
  constructor() {
  }

  /**
   * Defines the metadata of VerificationIPFlowParameters
   *
   * @returns {object} metadata of VerificationIPFlowParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VerificationIPFlowParameters',
      type: {
        name: 'Composite',
        className: 'VerificationIPFlowParameters',
        modelProperties: {
          targetResourceId: {
            required: true,
            serializedName: 'targetResourceId',
            type: {
              name: 'String'
            }
          },
          direction: {
            required: true,
            serializedName: 'direction',
            type: {
              name: 'String'
            }
          },
          protocol: {
            required: true,
            serializedName: 'protocol',
            type: {
              name: 'String'
            }
          },
          localPort: {
            required: true,
            serializedName: 'localPort',
            type: {
              name: 'String'
            }
          },
          remotePort: {
            required: true,
            serializedName: 'remotePort',
            type: {
              name: 'String'
            }
          },
          localIPAddress: {
            required: true,
            serializedName: 'localIPAddress',
            type: {
              name: 'String'
            }
          },
          remoteIPAddress: {
            required: true,
            serializedName: 'remoteIPAddress',
            type: {
              name: 'String'
            }
          },
          targetNicResourceId: {
            required: false,
            serializedName: 'targetNicResourceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VerificationIPFlowParameters;
