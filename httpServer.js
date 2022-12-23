const http = require('http');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      const data = Buffer.concat(chunks);
      res.end(JSON.stringify({ result: add(parseInt(JSON.parse(data).result), 1) }));
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
