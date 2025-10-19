require('dotenv-flow').config()

// additional jest matchers
// https://jest-extended.jestcommunity.dev/docs/matchers
const matchers = require('jest-extended')
expect.extend(matchers)

// custom jest matchers for asserting on DOM nodes
// https://www.npmjs.com/package/@testing-library/jest-dom
require('@testing-library/jest-dom')
// require('@testing-library/jest-dom/jest-globals')

// mock web worker
global.Worker = class {
  constructor(stringUrl) {
    this.url = stringUrl
  }
  postMessage() {}
  terminate() {}
  addEventListener() {}
  removeEventListener() {}
}

global.URL.createObjectURL = () => 'mockObjectURL'

// reset timers after each test
afterEach(() => {
  jest.useRealTimers()
})
