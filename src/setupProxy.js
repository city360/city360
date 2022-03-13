const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      //遇见api前缀，走代理
      '/api',
      proxy.createProxyMiddleware(
          {
            target: 'http://api.map.baidu.com',  //目标地址
            // pathRewrite: {'^/api': '',},
            changeOrigin: true,  //控制服务器收到的响应头中Host字段的值
            secure: false, // 是否验证证书
            // ws: true, // 启用websocket
          }),
      //遇见api前缀，走代理
  );
  app.use('/api2', proxy.createProxyMiddleware(
      {
        target: 'http://localhost:7002',  //目标地址
        // pathRewrite: {'^/api2': '',},
        changeOrigin: true,  //控制服务器收到的响应头中Host字段的值
        secure: false, // 是否验证证书
        // ws: true, // 启用websocket
      }),)
  console.log("进来了setup")
};
