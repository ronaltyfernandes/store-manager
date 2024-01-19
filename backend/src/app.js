const express = require('express');
const rota = require('./routes/index.route');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', rota.productsRoutes);

app.use('/sales', rota.salesRoutes);

module.exports = app;
