const { defineConfig } = require("cypress");
const db = require('../pr1/cypress/support/db');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        queryDatabase: (sql) => {
          return db.query(sql);
        },
      });
    },
    specPattern : "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    defaultCommandTimeout : 30000,
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  },
});