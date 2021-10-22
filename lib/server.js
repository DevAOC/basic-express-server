'use strict';

const express = require('express');
const server = express();

const logger = require('./middleware/logger.js');

const personRoutes = require('./routes/personRoutes.js');
const carRoutes = require('./routes/carRoutes.js');

const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

server.use(express.json());
server.use(logger);

server.use('/person', personRoutes);
server.use('/car', carRoutes);

server.use(error500);
server.use(error404);

module.exports = {
  server,
  start: (port) => {
    server.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  },
};
