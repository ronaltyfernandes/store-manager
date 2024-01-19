const express = require('express');
const bodyParser = require('body-parser');
const rota = require('./routes/index.route');

// Analisa o corpo da solicitação como JSON

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use(bodyParser.json());

app.use('/products', rota.productsRoutes);

app.use('/sales', rota.salesRoutes);

module.exports = app;
