const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
  env:{
    URL:'https://the-internet.herokuapp.com/'
  },
  retries: {
    runMode: 2,
    openMode: 1
  }
});
