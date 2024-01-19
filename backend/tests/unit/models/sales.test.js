const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection.model');
const { salesModel } = require('../../../src/models/index.model');
const { salesMocks } = require('../mocks/index.mock');

describe('Realizando testes - DRIVER MODEL:', function () {
  it('Recuperando a lista de todos os products', async function () {
    sinon.stub(connection, 'execute').resolves([salesMocks.salesAllMocks]);
    
    const data = await salesModel.findAll();
    expect(data).to.be.an('array');
    expect(data).to.have.lengthOf(3);
    expect(data).to.be.deep.equal(salesMocks.salesAllMocks);
  });

  it('Recuperando a lista da busca por apenas um product por meio do id', async function () {
    sinon.stub(connection, 'execute').resolves([salesMocks.salesByIdMock]);

    const id = 1;
    
    const data = await salesModel.findById(id);
    expect(data).to.be.an('array');
    expect(data).to.have.lengthOf(2);
    expect(data).to.be.deep.equal(salesMocks.salesByIdMock);
  });

  // it('Recuperando driver por id', async function () {
  //   sinon.stub(connection, 'execute').resolves([dataMockDriversList]);
  //   const driverId = 1;
  //   const data = await driver.findByIdDriver(driverId);
  //   expect(data).to.be.an('array');
  //   expect(data).to.be.deep.equal(dataMockDriversList);
  // });

  afterEach(function () {
    sinon.restore();
  });
});