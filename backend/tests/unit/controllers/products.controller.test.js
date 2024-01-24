const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productController } = require('../../../src/controllers/index');
const { productServices } = require('../../../src/services/index');
const { controllersMocks } = require('../mocks/index.mock');
const { statusNumbers } = require('../../../src/controllers/statusMensages');

const { 
  findAllControllerMock,
  findByIdControllerMock, 
  insertControllerMock, 
  findByIdControllerMockErro,
  putControllerMock, 
  deleteControllerMock } = controllersMocks;

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

  it('Recuperando a lista products com um ID especifico', async function () {
    sinon.stub(productServices, 'findById').returns(findByIdControllerMock);

    const request = {
      params: { id: 1 },
      body: { },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.ok);
    expect(response.json).to.have.been.calledWith(findByIdControllerMock.data);
  });

  it('Recuperando a lista products com um ID especifico INVALIDO', async function () {
    sinon.stub(productServices, 'findById').returns(findByIdControllerMockErro);

    const request = {
      params: { id: 99 },
      body: { },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.erroServer);
    expect(response.json).to.have.been.calledWith(findByIdControllerMockErro.data);
  });

  it('INSERINDO a lista products', async function () {
    sinon.stub(productServices, 'insert').returns(insertControllerMock);

    const request = {
      params: { },
      body: { name: 'exemploX' },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.insert(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.postOk);
    expect(response.json).to.have.been.calledWith(insertControllerMock.data);
  });

  it('MODIFICANDO a lista products com PUT', async function () {
    sinon.stub(productServices, 'put').returns(putControllerMock);

    const request = {
      params: { id: 1 },
      body: { name: 'exemploX' },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.put(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.ok);
    expect(response.json).to.have.been.calledWith(putControllerMock.data);
  });

  it('DELETANDO item de products com DELETE', async function () {
    sinon.stub(productServices, 'deleteById').returns(deleteControllerMock);

    const request = {
      params: { id: 1 },
      body: { name: 'exemploX' },
    };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.deleteById(request, response);

    expect(response.status).to.have.been.calledWith(statusNumbers.deleteOk);
    expect(response.json).to.have.been.calledWith(deleteControllerMock.data);
  });

  afterEach(function () {
    sinon.restore();
  });
});