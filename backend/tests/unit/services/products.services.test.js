const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { productServices } = require('../../../src/services/index');
const { productsModel } = require('../../../src/models/index.model');
const { productsMock } = require('../mocks/index.mock');
const { message, statusNumbers } = require('../../../src/controllers/statusMensages');

const { expect } = chai;

chai.use(chaiHttp);

describe('Realizando testes - PRODUCT SERVICES:', function () {
  const { productAllMock, productByIdMock, returnIsertMockValue } = productsMock;

  it('Recuperando a lista de TODOS os products', async function () {
    sinon.stub(productsModel, 'findAll').returns(productAllMock);
    const { status, data } = await productServices.findAll();
    expect(data).to.be.an('Array');
    expect(data).to.be.deep.equal(productAllMock);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.ok);
  });

  it('Recuperando por ID da lista products', async function () {
    sinon.stub(productsModel, 'findById').returns(productByIdMock[0]);
    const { status, data } = await productServices.findById(productByIdMock[0].id);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal(productByIdMock[0]);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.ok);
  });

  it('Recuperando INCORRETAMENTE por ID da lista products ', async function () {
    sinon.stub(productsModel, 'findById').returns(false);
    const { status, data } = await productServices.findById(23);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ message: message.productNotFound });
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.erroServer);
  });

  it('Adicionando valores na lista product por meio de POST', async function () {
    sinon.stub(productsModel, 'insert').returns(productByIdMock[0].id);
    const { status, data } = await productServices.insert(productByIdMock[0].name);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal(productByIdMock[0]);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.postOk);
  });

  it('Adicionando valores INVALIDOS na lista product por meio de POST', async function () {
    sinon.stub(productsModel, 'insert').returns(false);
    const { status, data } = await productServices.insert(productByIdMock[0].name);
    expect(data).to.be.an('string');
    expect(data).to.be.deep.equal(message.invalidName);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.erroServer);
  });

  it('MODIFICANDO valores na lista product por meio de PUT', async function () {
    const { name, id } = productByIdMock[0];
    sinon.stub(productsModel, 'put').returns(returnIsertMockValue.insertId);
    const { status, data } = await productServices.put(id, name);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal(productByIdMock[0]);
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.ok);
  });

  it('MODIFICANDO valores na lista product por meio de PUT INVALIDO', async function () {
    const { name, id } = productByIdMock[0];
    sinon.stub(productsModel, 'put').returns(false);
    const { status, data } = await productServices.put(id, name);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ message: message.productNotFound });
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.erroServer);
  });

  it('DELETANDO valores na lista product por meio de DELETE', async function () {
    const { id } = productByIdMock[0];
    sinon.stub(productsModel, 'deleteById').returns(returnIsertMockValue.affectedRows);
    const { status, data } = await productServices.deleteById(id);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({});
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.deleteOk);
  });

  it('DELETANDO valores na lista product por meio de DELETE INCORRETO', async function () {
    const { id } = productByIdMock[0];
    sinon.stub(productsModel, 'deleteById').returns(false);
    const { status, data } = await productServices.deleteById(id);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ message: message.productNotFound });
    expect(status).to.be.an('number');
    expect(status).to.be.deep.equal(statusNumbers.erroServer);
  });

  afterEach(function () {
    sinon.restore();
  });
});