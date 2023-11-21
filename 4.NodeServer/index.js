const http = require('http');

const server = http.createServer((req, res) => {
  // Request handling logic goes here
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, World!\n');
  if (req.method === 'GET' && req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node!\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
