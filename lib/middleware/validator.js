'use strict';

const error = require('../error-handlers/500.js');

module.exports = (req, res, next) => {
  const query = req.query.name;
  if (query) {
    next();
  } else {
    next(error);
  }
};
