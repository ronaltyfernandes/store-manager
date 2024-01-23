const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const connection = require('../../../src/models/connection.model');
const { productsModel } = require('../../../src/models/index.model');
const { productsMock } = require('../mocks/index.mock');

const { expect } = chai;

chai.use(chaiHttp);

describe('Realizando testes - PRODUCT MODEL:', function () {
  const { productAllMock, productByIdMock, productIsertMock, returnIsertMockValue, returnSetHeaderInvalid } = productsMock;

  it('Recuperando a lista de todos os products', async function () {
    sinon.stub(connection, 'execute').resolves([productAllMock]);
    const resultado = await productsModel.findAll();
    expect(resultado).to.be.an('Array');

    expect(resultado).to.be.deep.equal(productAllMock);
  });

  it('Recuperando a lista da busca por apenas um product por meio do id', async function () {
    sinon.stub(connection, 'execute').resolves([productByIdMock]);
    const id = 1;
    const resultado = await productsModel.findById(id);

    expect(resultado).to.be.an('object');
    expect(resultado).to.be.deep.equal(productByIdMock[0]);
  });

  it('Recuperando a lista INVALIDA da busca por ID ', async function () {
    sinon.stub(connection, 'execute').resolves([[undefined]]);

    const id = 23;
    const resultado = await productsModel.findById(id);

    expect(resultado).to.equal(false);
    expect(resultado).to.be.an('boolean');
  });

  it('Verificando POST de um produto', async function () {
    const { name } = productIsertMock[0];
    sinon.stub(connection, 'execute').resolves([returnIsertMockValue]);
    const resultado = await productsModel.insert(name);

    expect(resultado).to.equal(returnIsertMockValue.insertId);
    expect(resultado).to.be.an('number');
  });

  it('Verificando POST de um produto INVALIDO', async function () {
    const { name } = productByIdMock[0];
    sinon.stub(connection, 'execute').resolves([returnSetHeaderInvalid]);
    const resultado = await productsModel.insert(name);

    expect(resultado).to.equal(false);
    expect(resultado).to.be.an('boolean');
  });

  it('Verificando PUT de um produto', async function () {
    const { name, id } = productByIdMock[0];
    sinon.stub(connection, 'execute').resolves([returnIsertMockValue]);
    const resultado = await productsModel.put(id, name);

    expect(resultado).to.equal(returnIsertMockValue.affectedRows);
    expect(resultado).to.be.an('number');
  });

  it('Verificando PUT de um produto INVALIDO', async function () {
    const { name, id } = productByIdMock[0];
    sinon.stub(connection, 'execute').resolves([returnSetHeaderInvalid]);
    const resultado = await productsModel.put(id, name);

    expect(resultado).to.equal(false);
    expect(resultado).to.be.an('boolean');
  });

  it('Verificando DELETE de um produto', async function () {
    const { id } = productByIdMock[0];
    sinon.stub(connection, 'execute').resolves([returnIsertMockValue]);
    const resultado = await productsModel.deleteById(id);

    expect(resultado).to.equal(returnIsertMockValue.affectedRows);
    expect(resultado).to.be.an('number');
  });

  it('Verificando DELETE de um produto INVALIDO', async function () {
    const { id } = productByIdMock[0];
    sinon.stub(connection, 'execute').resolves([returnSetHeaderInvalid]);
    const resultado = await productsModel.deleteById(id);

    expect(resultado).to.equal(false);
    expect(resultado).to.be.an('boolean');
  });

  afterEach(function () {
    sinon.restore();
  });
});