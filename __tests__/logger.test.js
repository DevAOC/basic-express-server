'use strict';

const logger = require('../lib/middleware/logger.js');

describe('Testing the logging middleware', () => {
  const req = { method: 'GET', path: '/person' };
  const res = {};
  const next = jest.fn();
  it('Should be able to log a GET method', () => {
    logger(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
