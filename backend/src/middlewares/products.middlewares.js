const { statusNumbers, message } = require('../controllers/statusMensages');

const nameValid = (req, res, next) => {
  const { name } = req.body;
  if (!name) res.status(statusNumbers.erro).json({ message: message.NameIsrequired }); 
  if (name.length < 5 || typeof name !== 'string') {
    return res.status(statusNumbers.erroInvalidValue).json({ message: message.invalidName });
  }
  return next();
};

module.exports = { nameValid };