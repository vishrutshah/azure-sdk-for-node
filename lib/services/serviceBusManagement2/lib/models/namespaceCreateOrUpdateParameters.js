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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the NamespaceCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the Create Or Update Namespace operation.
 *
 * @member {string} location Namespace location.
 *
 * @member {object} [sku]
 *
 * @member {string} [sku.name] Name of this SKU. Possible values include:
 * 'Basic', 'Standard', 'Premium'
 *
 * @member {string} [sku.tier] The billing tier of this particular SKU.
 * Possible values include: 'Basic', 'Standard', 'Premium'
 *
 * @member {number} [sku.capacity] The specified messaging units for the tier.
 *
 * @member {object} [tags] Namespace tags.
 *
 * @member {string} [provisioningState] Provisioning state of the namespace.
 *
 * @member {string} [status] State of the namespace. Possible values include:
 * 'Unknown', 'Creating', 'Created', 'Activating', 'Enabling', 'Active',
 * 'Disabling', 'Disabled', 'SoftDeleting', 'SoftDeleted', 'Removing',
 * 'Removed', 'Failed'
 *
 * @member {date} [createdAt] The time the namespace was created.
 *
 * @member {date} [updatedAt] The time the namespace was updated.
 *
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * Service Bus operations.
 *
 * @member {boolean} [createACSNamespace] Indicates whether to create an ACS
 * namespace.
 *
 * @member {boolean} [enabled] Specifies whether this instance is enabled.
 *
 */
class NamespaceCreateOrUpdateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of NamespaceCreateOrUpdateParameters
   *
   * @returns {object} metadata of NamespaceCreateOrUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NamespaceCreateOrUpdateParameters',
      type: {
        name: 'Composite',
        className: 'NamespaceCreateOrUpdateParameters',
        modelProperties: {
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Unknown', 'Creating', 'Created', 'Activating', 'Enabling', 'Active', 'Disabling', 'Disabled', 'SoftDeleting', 'SoftDeleted', 'Removing', 'Removed', 'Failed' ]
            }
          },
          createdAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdAt',
            type: {
              name: 'DateTime'
            }
          },
          updatedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedAt',
            type: {
              name: 'DateTime'
            }
          },
          serviceBusEndpoint: {
            required: false,
            readOnly: true,
            serializedName: 'properties.serviceBusEndpoint',
            type: {
              name: 'String'
            }
          },
          createACSNamespace: {
            required: false,
            serializedName: 'properties.createACSNamespace',
            type: {
              name: 'Boolean'
            }
          },
          enabled: {
            required: false,
            serializedName: 'properties.enabled',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = NamespaceCreateOrUpdateParameters;
