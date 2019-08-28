// vue.config.js
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
    if (process.env.NODE_ENV === 'production') {
      // #region 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        .tap(args => {})
    }
  },
  devServer: {
    port: 8080, // 配置端口
    open: true, // 自动开启浏览器
    compress: true, // 开启压缩
    overlay: { // 设置让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    // 设置请求代理
    proxy: {
      '/bim': {
        target: process.env.BASE_URL,
        secure: false,
        changeOrigin: true
      }
    }
  }
}
