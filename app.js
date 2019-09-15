// To create a server. This file will be used when deployed on cloud in a server.

const http = require('http');

const routes = require('./routes');

const server =http.createServer(routes);

server.listen(3001);