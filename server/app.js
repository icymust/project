const path = require('path'); // path module
const http = require('http'); // http
const express = require('express'); // add frameworks Express
const socketIo = require('socket.io'); // connect socket to server
require('dotenv').config({ path: '../.env' }); // upload from .env

const app = express();
const server = http.createServer(app);  // create HTTP-server
const io = socketIo(server); // connect Socket.io to server
// connect socket file
require('./sockets.js')(io);
app.use(express.static(path.join(__dirname, '../public')));

//take port number
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
