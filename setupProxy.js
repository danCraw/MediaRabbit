const { createProxyMiddleware } = require('http-proxy-middleware');

// function cors (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://188.225.85.187:8000/api/save_customer');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept');
//     next();
// }
//
// module.exports = cors;

module.exports = function middle (app, cors) {

    app.use('/data',
        createProxyMiddleware({
            target: 'http://188.225.85.187:8000/api/save_customer',
            secure: false,
            changeOrigin: true,
        }),
        function cors (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        }
    );
    cors();
};