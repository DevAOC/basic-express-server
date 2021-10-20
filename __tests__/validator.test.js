'use strict';

const validator = require('../lib/middleware/validator.js');
const error = require('../lib/error-handlers/500.js');

describe('Testing the validator middleware', () => {
  it('Should throw an error if there is no name property', () => {
    req.query.name = undefined;
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).toBe(500);
  });
});
