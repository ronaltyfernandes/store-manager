const { salesServices } = require('../services');

const findAll = async (_request, response) => {
  const { status, data } = await salesServices.findAll();

  return response.status(status).json(data);
};

const findById = async (request, response) => {
  const { id } = request.params;
  const { status, data } = await salesServices.findById(id);

  return response.status(status).json(data);
};

const insert = async (request, response) => {
  const valores = request.body;
  const { status, data } = await salesServices.insert(valores);

  return response.status(status).json(data);
};

module.exports = { findAll, findById, insert };