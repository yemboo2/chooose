const fs = require('fs');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const JSON_FILE_PATH = './data.json';

let data = JSON.parse(fs.readFileSync(JSON_FILE_PATH, 'utf8'));

io.on('connection', (socket) => {
  console.log('connected');

  // Send the initial data to the client
  socket.emit('initialData', data.experiences);

  // Listen for changes in the data
  fs.watchFile(JSON_FILE_PATH, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      console.log('Data file changed');
      data = JSON.parse(fs.readFileSync(JSON_FILE_PATH, 'utf8'));
      io.emit('updateData', data.experiences);
    }
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
