const { statusNumbers, message } = require('../controllers/statusMensages');
const { findById } = require('../models/sales.model');

const valuesExist = (req, res, next) => {
  const values = req.body;
  if (values[0] === undefined) {
    return res.status(statusNumbers.erro).json({ message: message.productRequired });
  }
  next();
};

async function validProductId(req, res, next) {
  const values = req.body;
  const dataErro = await Promise.all(values.map(async (data) => {
    const { productId } = data;
    if (productId === undefined) {
      return res.status(statusNumbers.erro).json({ message: message.productRequired });
    }
    const productIdValid = await findById(productId);
    if (productIdValid.length < 1) {
      return res.status(statusNumbers.erroServer).json({ message: message.productNotFound });
    }
  }));
  const resoltErrors = dataErro.find((result) => result);
  if (resoltErrors) return resoltErrors;
  next();
}

const validQuantity = (req, res, next) => {
  const values = req.body;
  const dataErro = values.map((data) => {
    const { quantity } = data;
    if (quantity === undefined) {
      return res.status(statusNumbers.erro).json({ message: message.quantityRequired });
    }
    if (quantity < 1) {
      return res.status(statusNumbers.erroInvalidValue)
        .json({ message: message.invalidQuantity });
    }
    return false;
  });
  const resoltErrors = dataErro.find((result) => result);
  if (resoltErrors) return resoltErrors; 
  next();
};

module.exports = { validProductId, validQuantity, valuesExist };