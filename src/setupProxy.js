// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function (app) {
    if (process.env.NODE_ENV === 'development') {
        app.use(
            '/api',
            createProxyMiddleware({
                target: 'http://188.225.85.187:8000/api/save_customer',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '/': '',
                },
            })
        );
    }
};
