'use strict';

const express = require('express');
const server = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const personRoutes = require('./routes/personRoutes.js');
const carRoutes = require('./routes/carRoutes.js');

const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

server.use(express.json());
server.use(logger);

server.post('/person', personRoutes.add);
server.get('/person', personRoutes.receive);
server.get('/person/:id', personRoutes.receive);
server.put('/person/:id', personRoutes.update);
server.delete('/person/:id', personRoutes.remove);

server.post('/car', carRoutes.add);
server.get('/car', carRoutes.receive);
server.get('/car/:id', carRoutes.receive);
server.put('/car/:id', carRoutes.update);
server.delete('/car/:id', carRoutes.remove);

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
