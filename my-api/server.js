const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.get('/', (req, res) => {
  console.log('Received a request to the root URL');
  res.send('Welcome to the JSON Server'); // Customize the response message as needed
});
server.listen(4000, () => {
  console.log('JSON Server is running');
});
