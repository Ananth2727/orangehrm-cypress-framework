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

        env: {
            apiUrl: process.env.ORANGEHRM_API_URL,
            clientId: process.env.ORANGEHRM_CLIENT_ID,
            clientSecret: process.env.ORANGEHRM_CLIENT_SECRET
        },

        setupNodeEvents(on, config) {
            return config;
        }
    }
});