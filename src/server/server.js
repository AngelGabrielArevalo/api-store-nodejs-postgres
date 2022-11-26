const express = require('express');
const cors = require('cors');
const router = require('../routes');
const { errorHandler } = require('../middlewares/errorHandler.middleware');
const passport = require('passport');

const server = express();

require('../auth/index')
server.use(express.json());
server.use(cors());
server.use(express.static('public'));
//server.use(passport.initialize());
server.use('/api/v1/', router);


server.use(errorHandler);

module.exports = server;
