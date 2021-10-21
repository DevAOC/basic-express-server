'use strict';

const { db, cars } = require('../lib/model');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing the car model', () => {
  it('Should be able to create a Car', async () => {
    const newCar = await cars.create({
      make: 'Chevrolet',
      model: 'Cruze',
      year: 2018,
    });

    expect(newCar.model).toBe('Cruze');
    expect(newCar.year).toBe(2018);
  });
});
