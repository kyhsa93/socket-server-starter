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

app.listen(config.port, () => {
  // eslint-disable-next-line
  console.log(`express listening on port ${config.port}`);
});
