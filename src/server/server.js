const express = require('express');
const cors = require('cors');
const router = require('../routes');
const { errorHandler } = require('../middlewares/errorHandler.middleware');

const server = express();

server.use(express.json());
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
server.use(cors(options));
server.use('/api/v1/', router);

server.use(errorHandler);

module.exports = server;
