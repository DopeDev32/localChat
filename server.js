const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// fallback route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// handle socket.io connections
io.on('connection', (socket) => {
  socket.on('set nickname', (name) => {
    socket.nickname = name;
    console.log(`👋 ${name} joined`);
    io.emit('chat message', { user: "System", text: `${name} joined the chat` });
  });

  socket.on('chat message', (msg) => io.emit('chat message', msg));

  socket.on('disconnect', () => {
    if (socket.nickname) {
      console.log(`👋 ${socket.nickname} left`);
      io.emit('chat message', { user: "System", text: `${socket.nickname} left the chat` });
    }
  });
});




// start server
server.listen(3000, '0.0.0.0', () => {
  console.log('✅ Chat server running at:');
  console.log('   Local:   http://localhost:3000');
  console.log('   Network: http://' + getLocalIP() + ':3000');
});

// helper to get local network IP
function getLocalIP() {
  const os = require('os');
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    for (let iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}
