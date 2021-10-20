'use strict';

module.exports = (err, req, res) => {
  console.log(err);
  res.status(500);
  res.end();
};
