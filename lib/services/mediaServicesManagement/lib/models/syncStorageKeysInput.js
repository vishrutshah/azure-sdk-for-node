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
 * Initializes a new instance of the SyncStorageKeysInput class.
 * @constructor
 * The request  body for a SyncStorageKeys API.
 *
 * @member {string} id The id of the storage account resource.
 *
 */
class SyncStorageKeysInput {
  constructor() {
  }

  /**
   * Defines the metadata of SyncStorageKeysInput
   *
   * @returns {object} metadata of SyncStorageKeysInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SyncStorageKeysInput',
      type: {
        name: 'Composite',
        className: 'SyncStorageKeysInput',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SyncStorageKeysInput;
