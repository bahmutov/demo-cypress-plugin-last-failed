const { defineConfig } = require('cypress')
const { collectFailingTests } = require('cypress-plugin-last-failed')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      collectFailingTests(on, config)

      require('@bahmutov/cy-grep/src/plugin')(config)
      return config
    },
  },
})
