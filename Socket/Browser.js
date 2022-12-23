const socket = new WebSocket('ws://localhost:8082');

// Connection opened
socket.addEventListener('open', function (event) {
  // socket.send('Hello Server!');
  socket.send(JSON.stringify({ a: 'b' }));
});
// Listen for messages
socket.addEventListener('message', function (event) {
  const data = JSON.parse(event.data);
  console.log('Message from server ', data);
});
