const { defineConfig } = require("cypress");
// import * as webpack from "@cypress/webpack-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const { default: preprocessor } = require('cypress-cucumber-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    },
    
    video : false,
    defaultCommandTimeout : 5000,
    pageLoadTimeout : 10000,
    
    // Load test file
    specPattern: "**/*.feature"

  
  },
});


// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin =
//   require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin =
//   require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

// module.exports = defineConfig({
//   // video: false,
//   // defaultCommandTimeout: 5000,
//   // pageLoadTimeout: 10000, 
//   // // SpecPattern: ["**/*.feature","cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
//   // SpecPattern: "**/*.{feature,*.test.ts}",

//   e2e: {
//     async setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });

//       on("file:preprocessor", bundler);
//       await addCucumberPreprocessorPlugin(on, config);

//       return config;
//     },
//     specPattern: "cypress/e2e/*.feature",
//     chromeWebSecurity: false,
//   },
// });
