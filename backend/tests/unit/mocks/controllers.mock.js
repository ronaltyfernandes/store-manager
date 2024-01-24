const { statusNumbers } = require('../../../src/controllers/statusMensages');
const { productAllMock, productByIdMock } = require('./products.mock');

const findAllControllerMock = {
  status: statusNumbers.ok,
  data: productAllMock,
};
const findByIdControllerMock = {
  status: statusNumbers.ok,
  data: productByIdMock[0],
};
const insertControllerMock = {
  status: statusNumbers.postOk,
  data: productByIdMock[0],
};
// const travelFromServiceConflict = {
//   status: 'CONFLICT',
//   data: { message: 'message' },
// };

module.exports = {
  findAllControllerMock, findByIdControllerMock, insertControllerMock,
};