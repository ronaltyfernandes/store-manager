const express = require('express');
const { productsModel } = require('./models/index.model');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.get('/products', async (_request, response) => {
  const products = await productsModel.findAll();
  response.status(200).json(products);
});

app.get('/products/:id', async (request, response) => {
  const { id } = request.params;
  const products = await productsModel.findById(id);
  if (!products) return request.status(404).json({ message: 'Passenger not found' });
  response.status(200).json(products);
});

module.exports = app;
