const { productsModel } = require('../models/index.model');
const { message, statusNumbers } = require('../controllers/statusMensages');

const findAll = async () => {
  console.log('isso');
  const data = await productsModel.findAll();
  return { status: 200, data };
};

const findById = async (id) => {
  const data = await productsModel.findById(id);
  if (data === false) {
    return { 
      status: statusNumbers.erroServer, data: { message: message.productNotFound } }; 
  }
  return { status: statusNumbers.ok, data };
};

const insert = async (name) => {
  const data = await productsModel.insert(name);
  if (!data) return { status: statusNumbers.erroServer, data: message.invalidName };
  return { status: statusNumbers.postOk, data: { id: data, name } };
};

const put = async (id, name) => {
  const data = await productsModel.put(id, name);
  if (data === false) {
    return {
      status: statusNumbers.erroServer, data: { message: message.productNotFound } }; 
  }
  return { status: statusNumbers.ok, data: { id: parseFloat(id), name } };
};

const deleteById = async (id) => {
  const data = await productsModel.deleteById(id);
  if (data === false) {
    return { 
      status: statusNumbers.erroServer, data: { message: message.productNotFound } }; 
  }
  return { status: statusNumbers.deleteOk, data: { } };
};

module.exports = { findAll, findById, insert, put, deleteById };