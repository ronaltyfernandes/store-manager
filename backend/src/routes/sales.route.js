const rota = require('express').Router();

const { salesModel } = require('../models/index.model');

rota.get('/', async (_request, response) => {
  const products = await salesModel.findAll();
  response.status(200).json(products);
});

rota.get('/:id', async (request, response) => {
  const { id } = request.params;
  const products = await salesModel.findById(id);
  if (!products) return request.status(404).json({ message: 'Passenger not found' });
  response.status(200).json(products);
});

module.exports = rota;
