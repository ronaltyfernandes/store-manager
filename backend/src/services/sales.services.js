const { salesModel } = require('../models/index.model');
const { message, statusNumbers } = require('../controllers/statusMensages');

const findAll = async () => {
  const data = await salesModel.findAll();
  return { status: 200, data };
};

const findById = async (id) => {
  const data = await salesModel.findById(id);
  if (data.length < 1) return { status: statusNumbers.erroServer, message: message.SalesNotFoud };
  return { status: statusNumbers.ok, data };
};

const insert = async (values) => {
  const data = await salesModel.insert(values);
  console.log(data);
  if (!data) return { status: statusNumbers.erroServer, message: message.invalidName };
  return { status: statusNumbers.postOk, data: { id: data.id, itemsSold: values } };
};

module.exports = { findAll, findById, insert };