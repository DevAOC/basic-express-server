'use strict';

const { people } = require('../model');

module.exports = {
  add: async (req, res) => {
    try {
      const newPerson = await people.create({
        firstName: req.body.make,
        lastName: req.body.model,
      });
      res.status(200).send(newPerson);
    } catch (error) {
      console.error(error);
    }
  },
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
  },
  update: async (req, res) => {
    const updateInfo = req.body;
    try {
      const person = await people.findByPk(req.params.id);
      const updatedPerson = await person.update(updateInfo);
      res.status(200).send(updatedPerson);
    } catch (error) {
      console.error(error);
    }
  },
  remove: async (req, res) => {
    try {
      const deleted = await people.destroy(req.params.id);
      res.status(200).send(deleted);
    } catch (error) {
      console.error(error);
    }
  },
};
