const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportPageTitle: 'Custom Title',
    charts: true,
    chartsSettings: {
      // Customize the chart settings
      showPassed: true,
      showFailed: true,
      showPending: true,
      showSkipped: false,
      chartHeight: 300,
      chartWidth: 500,
      chartColors: ['#00aaff', '#ff0000', '#ffaa00'],
      // ... other available chart settings
    },
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://app.clickup.com/login',
  },
});
