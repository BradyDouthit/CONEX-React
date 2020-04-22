//creates a proxy for requests coming from the front end in development
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    //add new routes here as needed
    //must proxy to the Express server, port 8080 in this case
    app.use(createProxyMiddleware('/home', { target: 'http://localhost:8080' }));
};