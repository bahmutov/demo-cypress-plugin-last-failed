import { failedTestToggle } from 'cypress-plugin-last-failed'

const registerCypressGrep = require('@bahmutov/cy-grep')
registerCypressGrep()

failedTestToggle()
