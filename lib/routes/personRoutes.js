'use strict';

const { people } = require('../models');

const express = require('express');
const router = express.Router();

router.post('/', add);
router.get('/', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', remove);

const add = async (req, res, next) => {
  try {
    const newPerson = await people.create({
      firstName: req.body.make,
      lastName: req.body.model,
    });
    res.status(200).send(newPerson);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  let response;
  if (req.params.id) {
    try {
      response = await people.findByPk(req.params.id);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      response = await people.findAll();
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
};

const update = async (req, res, next) => {
  const updateInfo = req.body;
  try {
    const person = await people.findByPk(req.params.id);
    const updatedPerson = await person.update(updateInfo);
    res.status(200).send(updatedPerson);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const deletedRows = await people.destroy(req.params.id);
    res.status(200).send(deletedRows);
  } catch (error) {
    next(error);
  }
};

module.exports = router;
