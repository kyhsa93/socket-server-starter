import express from 'express';
import bodyParser from 'body-parser';

import config from './config';

import getTest from './src/router/getTest';
import postTest from './src/router/postTest';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get-test', getTest);
app.post('/post-test', postTest);

app.listen(config.port, () => {
  console.log(`express listening on port ${config.port}`);
});
