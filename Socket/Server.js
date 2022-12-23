const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8082 });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    console.log(JSON.parse(message));
    ws.send(JSON.stringify({ a: 'b' }));
  });
});
