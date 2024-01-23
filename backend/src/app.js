const express = require('express');
const bodyParser = require('body-parser');
const { productsRoutes, salesRoutes } = require('./routes/index.route');

// Analisa o corpo da solicitação como JSON

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use(bodyParser.json());

app.use('/products', productsRoutes);

app.use('/sales', salesRoutes);

module.exports = app;
