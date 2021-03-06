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
 * Initializes a new instance of the DpmBackupEngine class.
 * @constructor
 * The backup engine type when Data Protection Manager (DPM) is used to manage
 * backups.
 *
 */
class DpmBackupEngine extends models['BackupEngineBase'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DpmBackupEngine
   *
   * @returns {object} metadata of DpmBackupEngine
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DpmBackupEngine',
      type: {
        name: 'Composite',
        className: 'DpmBackupEngine',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql' ]
            }
          },
          registrationStatus: {
            required: false,
            serializedName: 'registrationStatus',
            type: {
              name: 'String'
            }
          },
          healthStatus: {
            required: false,
            serializedName: 'healthStatus',
            type: {
              name: 'String'
            }
          },
          canReRegister: {
            required: false,
            serializedName: 'canReRegister',
            type: {
              name: 'Boolean'
            }
          },
          backupEngineId: {
            required: false,
            serializedName: 'backupEngineId',
            type: {
              name: 'String'
            }
          },
          backupEngineType: {
            required: true,
            serializedName: 'backupEngineType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DpmBackupEngine;
