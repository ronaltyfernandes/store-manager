const rota = require('express').Router();

const { salesController } = require('../controllers');
// const { salesMiddlleweres } = require('../middlewares/index');

// const { validProductId, validQuantity } = salesMiddlleweres;

rota.get('/', salesController.findAll);
rota.get('/:id', salesController.findById);
rota.post('/', salesController.insert);

module.exports = rota;
