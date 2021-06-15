module.exports = {
  publicPath: './',
  lintOnSave: true,

  devServer: {
    proxy: {
      '/': {
        target: 'http://xiaomiao.club:6677', //代理接口
        changeOrigin: true,
        pathRewrite: {
          '/': '' //代理的路径
        }
      }
    },
  }
}