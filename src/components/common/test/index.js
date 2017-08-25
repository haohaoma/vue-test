import TestComponent from './TestComponent'

const test = {}

test.install = function (Vue, options) {
  Vue.prototype.$myMethod = {
    success: function (text) {
      console.log(text)
    },
    warn: function (text) {
      console.log(text)
    },
    error: function (text) {
      console.log(text)
    }
  }

  Vue.component(TestComponent.name, TestComponent)
}
export default test
