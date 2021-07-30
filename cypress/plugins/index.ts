/// <reference types="cypress" />
const injectDevServer = require('@cypress/react/plugins/next')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  injectDevServer(on, config)

  return config
}
