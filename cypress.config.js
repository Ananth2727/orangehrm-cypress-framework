const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({

    reporter: 'mochawesome',

    reporterOptions: {
        reportDir: 'cypress/reports/mochawesome',
        overwrite: false,
        html: false,
        json: true
    },

    e2e: {
        baseUrl: 'https://opensource-demo.orangehrmlive.com',

        pageLoadTimeout: 120000,
        requestTimeout: 30000,
        responseTimeout: 30000,

        setupNodeEvents(on, config) {
            return config;
        }
    }
});