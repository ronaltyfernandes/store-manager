const { productsModel } = require('../models/index.model');
const { message, statusNumbers } = require('../controllers/statusMensages');

const findAll = async () => {
  const data = await productsModel.findAll();
  return { status: 200, data };
};

const findById = async (id) => {
  const data = await productsModel.findById(id);
  if (data === false) return { status: statusNumbers.erroServer, message: message.passagerNotFoud };
  return { status: statusNumbers.ok, data };
};

const insert = async (name) => {
  const data = await productsModel.insert(name);
  if (!data) return { status: statusNumbers.erroServer, message: message.invalidName };
  return { status: statusNumbers.postOk, data: { id: data, name } };
};

module.exports = { findAll, findById, insert };