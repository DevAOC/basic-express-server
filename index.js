'use strict';

const { database } = require('./lib/models');
const server = require('./lib/server.js');
require('dotenv').config();

const PORT = process.env.PORT;

database.sync().then(() => {
  server.start(PORT);
});
