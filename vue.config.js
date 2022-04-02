const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
let path = require('path')
let webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  productionSourceMap: false,
  // entry: NODE_ENV == 'development' ? './examples/main.js' : './packages/index.js',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: 'sys-test-dome.js',
  //   library: 'sys-test-dome',
  //   libraryTarget: 'umd'
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples')); // 调整@指向examples
    // console.log(NODE_ENV)
    // if (process.env.NODE_ENV === 'production') {
    //   config.entry('app').clear().add('./packages/index.js')
    // } else {
    //   config.entry('app').clear().add('./examples/main.js')
    // }
    config.module
      .rule('js')
      .include
      .add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    extract: false // 绑定css样式
  }
}