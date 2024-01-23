const rota = require('express').Router();
const { nameValid } = require('../middlewares/products.middlewares');

const { productController } = require('../controllers/index');

rota.get('/', productController.findAll);
rota.get('/:id', productController.findById);
rota.post('/', nameValid, productController.insert);

module.exports = rota;
