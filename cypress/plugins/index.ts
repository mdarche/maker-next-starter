/// <reference types="cypress" />
const injectDevServer = require('@cypress/react/plugins/next')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  injectDevServer(on, config)

  return config
}