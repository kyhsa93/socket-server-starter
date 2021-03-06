// absolute import
import express from 'express';
import compression from 'compression';
import http from 'http';
import socket from 'socket.io';

// relative import
import config from './config.json';

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(compression());
app.disable('x-powered-by');

// route
app.get('/socket', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const testNamespace = io.of('/test');

testNamespace.on('connection', (socket) => {
  console.log('user connected test namespace.');
  socket.broadcast.emit('test connect', 'someone is connected.');

  // receive event named 'test chat'
  socket.on('test chat', (msg) => {
    console.log('test chat: ', msg);
    // send my message
    socket.emit('my message', 'you: ' + msg);
    // broadcast my message to other user except me
    socket.broadcast.emit('test chat', 'someone: ' + msg);
  });

  // user disconneted
  socket.on('disconnect',  () => {
    console.log('user disconnected from test namespace.');
    socket.broadcast.emit('test disconnect', 'someone is disconnected.');
  })
});

// connection start
io.on('connection', (socket) => {
  console.log('a user connected');

  // broadcast message to everyone except for a certain socket
  socket.broadcast.emit('server is connected.');

  // listen event named 'chat message'
  socket.on('chat message', (msg) => {
    // boradcast all connected user
    console.log('chat message: ', msg);
    io.emit('chat message', msg);
  });

  // user disconnected
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(config.port, () => {
  // eslint-disable-next-line
  console.log(`express listening on port ${config.port}`);
});
