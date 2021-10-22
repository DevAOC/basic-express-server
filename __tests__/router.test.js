'use strict';

const { database, cars, people } = require('../lib/models');

beforeAll(async () => {
  await database.sync();
});

afterAll(async () => {
  await database.drop();
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

  it('Should be able to read a car', async () => {
    const allCars = await cars.findAll();

    expect(allCars[0].make).toBe('Chevrolet');
  });
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
