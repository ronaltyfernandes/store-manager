const rota = require('express').Router();

const { productsModel } = require('../models/index.model');

rota.get('/', async (_request, response) => {
  const products = await productsModel.findAll();
  response.status(200).json(products);
});

rota.get('/:id', async (request, response) => {
  const { id } = request.params;
  const products = await productsModel.findById(id);
  if (!products) return request.status(404).json({ message: 'Passenger not found' });
  response.status(200).json(products);
});

rota.post('/', async (request, response) => {
  console.log(request.body);
  const name = await request.body;
  const products = await productsModel.insert(name);
  response.status(201).json(products);
});

module.exports = rota;
