'use strict';

module.exports = (req, res, next) => {
  const query = req.query.name;
  if (query) {
    next();
  } else {
    next('Invalid Request');
  }
};
