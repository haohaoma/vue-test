import TestComponent from './TestComponent'

const test = {}

function setTemp (type, text) {
  let temp = document.createElement('div')
  temp.setAttribute('class', 'toast ' + type)
  temp.innerHTML = text
  document.getElementById('toastbox').appendChild(temp)
  setTimeout(() => {
    document.getElementById('toastbox').removeChild(temp)
  }, 3000)
}
test.install = function (Vue, options) {
  Vue.prototype.$toast = {
    success: function (text) {
      setTemp('success', text)
    },
    warn: function (text) {
      setTemp('warn', text)
    },
    error: function (text) {
      setTemp('error', text)
    }
  }

  Vue.component(TestComponent.name, TestComponent)
}
export default test
