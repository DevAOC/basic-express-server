'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');

const req = supertest(server.server);

describe('Testing routes', () => {
  it('Should throw an error when using a bad route', async () => {
    const res = await req.get('/badroute');
    expect(res.status).toBe(404);
  });

  it('Should throw an error when the PATCH method is called', async () => {
    const res = await req.patch('/');

    expect(res.status).toBe(500);
  });
});
