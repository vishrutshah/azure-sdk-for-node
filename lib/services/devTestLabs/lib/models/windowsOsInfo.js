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
 * Initializes a new instance of the WindowsOsInfo class.
 * @constructor
 * Information about a Windows OS.
 *
 * @member {string} [windowsOsState] The state of the Windows OS. Possible
 * values include: 'NonSysprepped', 'SysprepRequested', 'SysprepApplied'
 *
 */
class WindowsOsInfo {
  constructor() {
  }

  /**
   * Defines the metadata of WindowsOsInfo
   *
   * @returns {object} metadata of WindowsOsInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WindowsOsInfo',
      type: {
        name: 'Composite',
        className: 'WindowsOsInfo',
        modelProperties: {
          windowsOsState: {
            required: false,
            serializedName: 'windowsOsState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WindowsOsInfo;
