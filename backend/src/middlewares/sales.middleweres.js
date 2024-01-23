const { statusNumbers, message } = require('../controllers/statusMensages');
const { findById } = require('../models/sales.model');

async function validProductId(req, res, next) {
  const values = req.body;
  await Promise.all(values.map(async (data) => {
    const { productId } = data;
    if (productId === undefined) {
      return res.status(statusNumbers.erro).json({ message: message.productRequired });
    }
    const productIdValid = await findById(productId);
    if (productIdValid.length < 1) {
      console.log('foi');
      return res.status(statusNumbers.erroServer).json({ message: message.productNotFound });
    }
  }));

  next();
}

const validQuantity = (req, res, next) => {
  const values = req.body;
  values.forEach((data) => {
    const { quantity } = data;
    if (!quantity) {
      console.log('foi');
      return res.status(statusNumbers.erro).json({ message: message.quantityRequired });
    }
    if (quantity < 1) {
      return res.status(statusNumbers.erroInvalidValue)
        .json({ message: message.invalidQuantity });
    }
  });
  
  next();
};

module.exports = { validProductId, validQuantity };