'use strict';

const { cars } = require('../model');

module.exports = {
  add: async (req, res) => {
    // I believe this should work
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
  }, // This should work
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
  }, // I believe that this works
  update: async (req, res) => {
    const updateInfo = req.body;
    try {
      const updated = await cars.update(updateInfo, { where: { id: req.params.id } });
      res.status(200).send(updated);
    } catch (error) {
      console.error(error);
    }
  }, // This one should also work according to stack overflow
  remove: async (req, res) => {
    try {
      const deleted = await cars.destroy(req.params.id);
      res.status(200).send(deleted);
    } catch (error) {
      console.error(error);
    }
  },
};
