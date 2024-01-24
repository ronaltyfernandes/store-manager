const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { salesServices } = require('../../../src/services/index');
const { salesModel } = require('../../../src/models/index.model');
const { salesMocks } = require('../mocks/index.mock');
const { message, statusNumbers } = require('../../../src/controllers/statusMensages');

const { salesAllMocks, salesByIdMock, salesPostMockReturn, salesPostmockEnv } = salesMocks;

const { expect } = chai;

chai.use(chaiHttp);

describe('Realizando testes - SALES SERVICES:', function () {
  it('Recuperando a lista de TODOS os SALES', async function () {
    sinon.stub(salesModel, 'findAll').returns(salesAllMocks);
    const { status, data } = await salesServices.findAll();
    expect(data).to.be.an('Array');
    expect(data).to.be.deep.equal(salesAllMocks);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.ok);
  });

  it('Recuperando por ID da lista SALES', async function () {
    sinon.stub(salesModel, 'findById').returns(salesByIdMock);
    const { status, data } = await salesServices.findById(salesByIdMock[0].id);
    expect(data).to.be.an('Array');
    expect(data).to.be.deep.equal(salesByIdMock);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.ok);
  });

  it('Recuperando INCORRETAMENTE por ID da lista SALES ', async function () {
    sinon.stub(salesModel, 'findById').returns([]);
    const { status, data } = await salesServices.findById(23);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ message: message.SalesNotFoud });
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.erroServer);
  });

  it('Adicionando valores na lista SALES por meio de POST', async function () {
    sinon.stub(salesModel, 'insert').returns(salesPostMockReturn);
    const { status, data } = await salesServices.insert(salesPostmockEnv);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal(salesPostMockReturn);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.postOk);
  });

  it('Adicionando valores na lista SALES por meio de POST INVALIDO', async function () {
    sinon.stub(salesModel, 'insert').returns(undefined);
    const { status, data } = await salesServices.insert(salesPostmockEnv);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ message: message.invalidName });
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.erroServer);
  });

  afterEach(function () {
    sinon.restore();
  });
});