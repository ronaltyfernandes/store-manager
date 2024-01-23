const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection.model');
const { salesMocks } = require('../mocks/index.mock');
const { salesModel } = require('../../../src/models/index.model');

chai.use(chaiHttp);

describe('Realizando testes - SALES MODEL:', function () {
  const { salesAllMocks, salesByIdMock, salesPostMockReturn, salesPostmockEnv, 
    salesResultHeader } = salesMocks;

  it('Recuperando a lista de todos os SALES', async function () {
    sinon.stub(connection, 'execute').resolves([salesAllMocks]);
    const resultado = await salesModel.findAll();
    expect(resultado).to.be.an('Array');

    expect(resultado).to.be.deep.equal(salesAllMocks);
  });

  it('Recuperando lista INVALIDA da busca por SALES por meio do ID', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const id = 23;
    const resultado = await salesModel.findById(id);

    expect(resultado).to.be.an('Array');
    expect(resultado).to.be.deep.equal([]);
  });

  it('Recuperando a lista da busca por apenas um SALE por meio do ID', async function () {
    sinon.stub(connection, 'execute').resolves([salesByIdMock]);
    const id = 1;
    const resultado = await salesModel.findById(id);

    expect(resultado).to.be.an('Array');
    expect(resultado).to.be.deep.equal(salesByIdMock);
  });

  it('Verificando POST de um SALE', async function () {
    const stub = sinon.stub(connection, 'execute');
    stub.onFirstCall().resolves([salesResultHeader]);
    stub.onSecondCall().resolves([salesPostMockReturn]);

    const resultado = await salesModel.insert(salesPostmockEnv);

    expect(resultado.id).to.equal(salesResultHeader.insertId);
    expect(resultado).to.be.an('object');
    expect(resultado).to.be.deep.equal({ id: salesResultHeader.insertId });
  });

  it('Verificando POST de um SALE INCORRETO', async function () {
    const stub = sinon.stub(connection, 'execute');
    stub.onFirstCall().resolves([salesResultHeader]);
    stub.onSecondCall().resolves([salesPostMockReturn]);

    const resultado = await salesModel.insert(salesPostmockEnv);

    expect(resultado.id).to.equal(salesResultHeader.insertId);
    expect(resultado).to.be.an('object');
    expect(resultado).to.be.deep.equal({ id: salesResultHeader.insertId });
  });

  afterEach(function () {
    sinon.restore();
  });
});