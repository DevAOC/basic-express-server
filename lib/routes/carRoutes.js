'use strict';

const { cars } = require('../model');

module.exports = {
  add: async (req, res) => {
    try {
      const newCar = await cars.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
      });
      res.status(200).send(newCar);
    } catch (error) {
      console.error(error);
    }
  },
  receive: async (req, res) => {
    let response;
    if (req.params.id) {
      try {
        response = await cars.findByPk(req.params.id);
        res.status(200).send(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        response = await cars.findAll();
        res.status(200).send(response);
      } catch (error) {
        console.error(error);
      }
    }
  },
  update: async (req, res) => {
    const updateInfo = req.body;
    try {
      const car = await people.findByPk(req.params.id);
      const updatedCar = await car.update(updateInfo);
      res.status(200).send(updatedCar);
    } catch (error) {
      console.error(error);
    }
  },
  remove: async (req, res) => {
    try {
      const deleted = await cars.destroy(req.params.id);
      res.status(200).send(deleted);
    } catch (error) {
      console.error(error);
    }
  },
};
