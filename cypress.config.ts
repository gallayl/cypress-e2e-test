import { defineConfig } from "cypress"

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://forms.office.com/r/TqiGBPjxtr"
  },
});
