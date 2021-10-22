'use strict';

const express = require('express');
const { people } = require('../models');

const router = express.Router();

router.post('/', add);
router.get('/', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', remove);

async function add(req, res, next) {
  try {
    const newPerson = await people.create({
      firstName: req.body.make,
      lastName: req.body.model,
    });
    res.status(200).send(newPerson);
  } catch (error) {
    next(error);
  }
}

async function read(req, res, next) {
  let foundPerson;
  if (req.params.id) {
    try {
      foundPerson = await people.findByPk(req.params.id);
      res.status(200).send(foundPerson);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      foundPerson = await people.findAll();
      res.status(200).send(foundPerson);
    } catch (error) {
      next(error);
    }
  }
}

async function update(req, res, next) {
  const updateInfo = req.body;
  try {
    const person = await people.findByPk(req.params.id);
    const updatedPerson = await person.update(updateInfo);
    res.status(200).send(updatedPerson);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const deletedRows = await people.destroy(req.params.id);
    res.status(200).send(deletedRows);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
