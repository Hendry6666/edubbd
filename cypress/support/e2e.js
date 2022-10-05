// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// const cucumber = require('cypress-cucumber-preprocessor').default

// module.exports = (on, config) => {
//     on('file:preprocessor', cucumber())
// }

//For Cucumber Integration
// const createEsbuildPlugin =
//   require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
// const nodePolyfills =
//   require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
// const addCucumberPreprocessorPlugin =
//   require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
// module.exports = async (on, config) => {
//   await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
//   // To use esBuild for the bundler when preprocessing
//   on(
//     'file:preprocessor',
//     createBundler({
//       plugins: [nodePolyfills(), createEsbuildPlugin(config)],
//     })
//   )
//   return config
// }