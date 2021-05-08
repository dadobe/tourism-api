const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('tourism-db.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(router);

server.listen(port);