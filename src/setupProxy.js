const { createProxyMiddleware } = require('http-proxy-middleware');

function cors (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://188.225.85.187:8000/api/save_customer');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept');
    next();
}

module.exports = cors;

module.exports = function (app) {

    app.use('/data',
        createProxyMiddleware({
            target: 'http://188.225.85.187:8000/api/save_customer',
            secure: false,
            changeOrigin: true,
        })
    );
};