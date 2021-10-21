'use strict';

const { db, people } = require('../lib/model');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing the person model', () => {
  it('Should be able to create a Person', async () => {
    const newPerson = await people.create({
      firstName: 'Antoine',
      lastName: 'Charette',
    });

    expect(newPerson.firstName).toBe('Antoine');
    expect(newPerson.lastName).toBe('Charette');
  });
});

// Route tests can potentially go in each model test
