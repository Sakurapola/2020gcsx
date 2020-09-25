module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true, //配置自动启动浏览器
    host: 'localhost',
    port: 8080, // 端口号
    https: false,
    hotOnly: false, // 配置跨域处理,只有一个代理
    before: app => {},
    proxy: {
      '/map': {
        target: 'http://api.map.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/map': ''
        }
      }
    }
  }
}