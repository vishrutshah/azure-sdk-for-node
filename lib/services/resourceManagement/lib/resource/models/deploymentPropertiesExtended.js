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
 * Initializes a new instance of the DeploymentPropertiesExtended class.
 * @constructor
 * Deployment properties with additional details.
 *
 * @member {string} [provisioningState] The state of the provisioning.
 *
 * @member {string} [correlationId] The correlation ID of the deployment.
 *
 * @member {date} [timestamp] The timestamp of the template deployment.
 *
 * @member {object} [outputs] Key/value pairs that represent deploymentoutput.
 *
 * @member {array} [providers] The list of resource providers needed for the
 * deployment.
 *
 * @member {array} [dependencies] The list of deployment dependencies.
 *
 * @member {object} [template] The template content. Use only one of Template
 * or TemplateLink.
 *
 * @member {object} [templateLink] The URI referencing the template. Use only
 * one of Template or TemplateLink.
 *
 * @member {string} [templateLink.uri] The URI of the template to deploy.
 *
 * @member {string} [templateLink.contentVersion] If included, must match the
 * ContentVersion in the template.
 *
 * @member {object} [parameters] Deployment parameters. Use only one of
 * Parameters or ParametersLink.
 *
 * @member {object} [parametersLink] The URI referencing the parameters. Use
 * only one of Parameters or ParametersLink.
 *
 * @member {string} [parametersLink.uri] The URI of the parameters file.
 *
 * @member {string} [parametersLink.contentVersion] If included, must match the
 * ContentVersion in the template.
 *
 * @member {string} [mode] The deployment mode. Possible values are Incremental
 * and Complete. Possible values include: 'Incremental', 'Complete'
 *
 * @member {object} [debugSetting] The debug setting of the deployment.
 *
 * @member {string} [debugSetting.detailLevel] Specifies the type of
 * information to log for debugging. The permitted values are none,
 * requestContent, responseContent, or both requestContent and responseContent
 * separated by a comma. The default is none. When setting this value,
 * carefully consider the type of information you are passing in during
 * deployment. By logging information about the request or response, you could
 * potentially expose sensitive data that is retrieved through the deployment
 * operations.
 *
 */
class DeploymentPropertiesExtended {
  constructor() {
  }

  /**
   * Defines the metadata of DeploymentPropertiesExtended
   *
   * @returns {object} metadata of DeploymentPropertiesExtended
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeploymentPropertiesExtended',
      type: {
        name: 'Composite',
        className: 'DeploymentPropertiesExtended',
        modelProperties: {
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          correlationId: {
            required: false,
            readOnly: true,
            serializedName: 'correlationId',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            readOnly: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          outputs: {
            required: false,
            serializedName: 'outputs',
            type: {
              name: 'Object'
            }
          },
          providers: {
            required: false,
            serializedName: 'providers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProviderElementType',
                  type: {
                    name: 'Composite',
                    className: 'Provider'
                  }
              }
            }
          },
          dependencies: {
            required: false,
            serializedName: 'dependencies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DependencyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Dependency'
                  }
              }
            }
          },
          template: {
            required: false,
            serializedName: 'template',
            type: {
              name: 'Object'
            }
          },
          templateLink: {
            required: false,
            serializedName: 'templateLink',
            type: {
              name: 'Composite',
              className: 'TemplateLink'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Object'
            }
          },
          parametersLink: {
            required: false,
            serializedName: 'parametersLink',
            type: {
              name: 'Composite',
              className: 'ParametersLink'
            }
          },
          mode: {
            required: false,
            serializedName: 'mode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Incremental', 'Complete' ]
            }
          },
          debugSetting: {
            required: false,
            serializedName: 'debugSetting',
            type: {
              name: 'Composite',
              className: 'DebugSetting'
            }
          }
        }
      }
    };
  }
}

module.exports = DeploymentPropertiesExtended;
