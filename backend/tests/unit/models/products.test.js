const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection.model');
const { productsModel } = require('../../../src/models/index.model');
const mock = require('../mocks/index.mock');

describe('Realizando testes - DRIVER MODEL:', function () {
  it('Recuperando a lista de todos os products', async function () {
    sinon.stub(connection, 'execute').resolves([mock.productsAllMock]);
    
    const data = await productsModel.findAll();
    expect(data).to.be.an('array');
    expect(data).to.have.lengthOf(3);
    expect(data).to.be.deep.equal(mock.productsAllMock);
  });

  it('Recuperando a lista da busca por apenas um product por meio do id', async function () {
    sinon.stub(connection, 'execute').resolves([mock.productsAllMock]);

    const id = 1;
    const data = await productsModel.findById(id);
    expect(data).to.be.an('array');
    expect(data).to.have.lengthOf(1);
    expect(data).to.be.deep.equal(mock.productsAllMock[id]);
  });

  it('Verificando post de um produto', async function () {
    sinon.stub(connection, 'execute').resolves([mock.productsAllMock]);
    const name = 'Exemplo Name';
    
    const data = await productsModel.insert(name);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ name, id: mock.productsAllMock.length + 1 });
  });

  afterEach(function () {
    sinon.restore();
  });
});