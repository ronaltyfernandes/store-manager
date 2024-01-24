const { message, statusNumbers } = require('../../../src/controllers/statusMensages');
const { productAllMock } = require('./products.mock');

const findAllControllerMock = {
  status: statusNumbers.ok,
  data: productAllMock,
};
const travelFromServiceInvalidValue = {
  status: 'INVALID_VALUE',
  data: { message: 'message' },
};
const travelFromServiceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'message' },
};
const travelFromServiceConflict = {
  status: 'CONFLICT',
  data: { message: 'message' },
};

module.exports = {
  findAllControllerMock,
};