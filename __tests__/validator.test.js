'use strict';

const validator = require('../lib/middleware/validator.js');

describe('Testing the validator middleware', () => {
  let req = { method: 'GET', query: {} };
  let res = { status: jest.fn() };
  let next = jest.fn();
  it('Should throw an error if there is no name property', () => {
    req.query.name = undefined;
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Invalid Request');
  });
});
