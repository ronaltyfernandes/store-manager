const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesController } = require('../../../src/controllers/index');
const { salesServices } = require('../../../src/services/index');
const { statusNumbers } = require('../../../src/controllers/statusMensages');
const { salesFindAllControllerMock, salesFindByIdControllerMock, salesInsertControllerMockEnv } = require('../mocks/controllers.mock');

const { expect } = chai;

chai.use(sinonChai);

describe('Realizando testes - PRODUCT SERVICES:', function () {
  it('Recuperando a lista de TODOS os products', async function () {
    sinon.stub(salesServices, 'findAll').returns(salesFindAllControllerMock);

    const request = {
      params: { },
      body: { },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findAll(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.ok);
    expect(response.json).to.have.been.calledWith(salesFindAllControllerMock.data);
  });

  it('Recuperando a lista products com um ID especifico', async function () {
    sinon.stub(salesServices, 'findById').returns(salesFindByIdControllerMock);

    const request = {
      params: { id: 1 },
      body: { },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.ok);
    expect(response.json).to.have.been.calledWith(salesFindByIdControllerMock.data);
  });

  it('INSERINDO a lista products', async function () {
    sinon.stub(salesServices, 'insert').returns(salesInsertControllerMockEnv);

    const request = {
      params: { },
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.insert(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.postOk);
    expect(response.json).to.have.been.calledWith(salesInsertControllerMockEnv.data);
  });

  afterEach(function () {
    sinon.restore();
  });
});