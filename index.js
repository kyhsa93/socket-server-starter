// absolute import
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

// relative import
import config from './config.json';

// route
import getTest from './src/router/getTest';
import postTest from './src/router/postTest';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.disable('x-powered-by');

app.get('/get-test', getTest);
app.post('/post-test', postTest);

app.listen(config.port, () => {
  // eslint-disable-next-line
  console.log(`express listening on port ${config.port}`);
});
