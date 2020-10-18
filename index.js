const restify = require('restify');
const callRoutes = require('./routes/base');
const server = restify.createServer();
server.pre(restify.plugins.bodyParser());
server.pre(restify.plugins.queryParser());
server.listen(8081);
callRoutes(server);