'use strict';

const { people } = require('../model');

module.exports = {
  add: async (req, res) => {
    // I believe this should work
    try {
      const newPerson = await people.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
      });
      res.status(200).send(newPerson);
    } catch (error) {
      console.error(error);
    }
  }, // This should work
  receive: async (req, res) => {
    let response;
    if (req.params.id) {
      try {
        response = await people.findByPk(req.params.id);
        res.status(200).send(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        response = await people.findAll();
        res.status(200).send(response);
      } catch (error) {
        console.error(error);
      }
    }
  }, // I believe that this works
  update: async (req, res) => {
    const updateInfo = req.body;
    try {
      const updated = await people.update(updateInfo, { where: { id: req.params.id } });
      res.status(200).send(updated);
    } catch (error) {
      console.error(error);
    }
  }, // This one should also work according to stack overflow
  remove: async (req, res) => {
    try {
      const deleted = await people.destroy(req.params.id);
      res.status(200).send(deleted);
    } catch (error) {
      console.error(error);
    }
  },
};
