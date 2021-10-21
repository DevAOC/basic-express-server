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

server.post('/person', validator, personRoutes.add);
server.get('/person', validator, personRoutes.receive);
server.get('/person/:id', validator, personRoutes.receive);
server.put('/person/:id', validator, personRoutes.update);
server.delete('/person/:id', validator, personRoutes.remove);

server.post('/car', validator, carRoutes.add);
server.get('/car', validator, carRoutes.receive);
server.get('/car/:id', validator, carRoutes.receive);
server.put('/car/:id', validator, carRoutes.update);
server.delete('/car/:id', validator, carRoutes.remove);

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
