/**
 * 不要编辑这个文件
 * 此文件用于将当前目录中的所有文件作为模块导出
 */

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
