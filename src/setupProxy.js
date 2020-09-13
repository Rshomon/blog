const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      //   target: "https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/",
      target: "http://127.0.0.1:8000/",
      changeOrigin: true,
      ws: true,
    })
  );
};
