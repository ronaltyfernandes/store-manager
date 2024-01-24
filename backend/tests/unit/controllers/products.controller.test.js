const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productController } = require('../../../src/controllers/index');
const { productServices } = require('../../../src/services/index');
const { controllersMocks } = require('../mocks/index.mock');
const { message, statusNumbers } = require('../../../src/controllers/statusMensages');

const { findAllControllerMock } = controllersMocks;

const { expect } = chai;

chai.use(sinonChai);

describe('Realizando testes - PRODUCT SERVICES:', function () {
  it('Recuperando a lista de TODOS os products', async function () {
    sinon.stub(productServices, 'findAll').returns(findAllControllerMock);

    const request = {
      params: { },
      body: { },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findAll(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.ok);
    expect(response.json).to.have.been.calledWith(findAllControllerMock.data);
  });

  afterEach(function () {
    sinon.restore();
  });
});