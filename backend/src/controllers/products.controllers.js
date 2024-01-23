const { productServices } = require('../services');

const findAll = async (_request, response) => {
  const { status, data } = await productServices.findAll();

  return response.status(status).json(data);
};

const findById = async (request, response) => {
  const { id } = request.params;
  const { status, data } = await productServices.findById(id);
  console.log(data);

  return response.status(status).json(data);
};

const insert = async (request, response) => {
  const { name } = request.body;
  const { status, data } = await productServices.insert(name);

  return response.status(status).json(data);
};

module.exports = { findAll, findById, insert };