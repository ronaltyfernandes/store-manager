const { statusNumbers, message } = require('../../../src/controllers/statusMensages');
const { productAllMock, productByIdMock } = require('./products.mock');
const { salesAllMocks, salesByIdMock, salesPostMockReturn } = require('./sale.mocks');

const findAllControllerMock = {
  status: statusNumbers.ok,
  data: productAllMock,
};
const findByIdControllerMock = {
  status: statusNumbers.ok,
  data: productByIdMock[0],
};
const findByIdControllerMockErro = {
  status: statusNumbers.erroServer,
  data: { message: message.notFond },
};
const insertControllerMock = {
  status: statusNumbers.postOk,
  data: productByIdMock[0],
};
const putControllerMock = {
  status: statusNumbers.ok,
  data: productAllMock[0],
};

const deleteControllerMock = {
  status: statusNumbers.deleteOk,
  data: {},
};

const salesFindAllControllerMock = {
  status: statusNumbers.ok,
  data: salesAllMocks,
};

const salesFindByIdControllerMock = {
  status: statusNumbers.ok,
  data: salesByIdMock,
};

const salesInsertControllerMockEnv = {
  status: statusNumbers.postOk,
  data: salesPostMockReturn,
};

module.exports = {
  findAllControllerMock, 
  findByIdControllerMock, 
  insertControllerMock, 
  findByIdControllerMockErro, 
  putControllerMock,
  deleteControllerMock,
  salesFindAllControllerMock,
  salesFindByIdControllerMock,
  salesInsertControllerMockEnv,
};