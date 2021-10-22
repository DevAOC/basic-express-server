'use strict';

const { cars } = require('../models');

const express = require('express');
const router = express.Router();

router.post('/', add);
router.get('/', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', remove);

async function add(req, res, next) {
  try {
    const newCar = await cars.create({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
    });
    res.status(200).send(newCar);
  } catch (error) {
    next(error);
  }
}

async function read(req, res, next) {
  let response;
  if (req.params.id) {
    try {
      response = await cars.findByPk(req.params.id);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      response = await cars.findAll();
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}

async function update(req, res, next) {
  const updateInfo = req.body;
  try {
    const car = await cars.findByPk(req.params.id);
    const updatedCar = await car.update(updateInfo);
    res.status(200).send(updatedCar);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const deletedRows = await cars.destroy(req.params.id);
    res.status(200).send(deletedRows);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
