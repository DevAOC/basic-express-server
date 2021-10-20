'use strict';

module.exports = (req, res) => {
  console.log('404 error');
  res.status(404);
  res.end();
};
