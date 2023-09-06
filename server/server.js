const fs = require('fs');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const JSON_FILE_PATH = './data.json';

// Serve the HTML and JavaScript for the client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Read the initial data from the JSON file
let data = JSON.parse(fs.readFileSync(JSON_FILE_PATH, 'utf8'));

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('A user connected');

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

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
