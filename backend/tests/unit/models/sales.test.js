const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const sinon = require('sinon');
const app = require('../../../src/app');
const connection = require('../../../src/models/connection.model');
const { salesMocks } = require('../mocks/index.mock');
const { statusNumbers } = require('../../../src/controllers/statusMensages');

chai.use(chaiHttp);

describe('Realizando testes - SALES MODEL:', function () {
  it('Recuperando a lista de todos os sales', async function () {
    sinon.stub(connection, 'execute').resolves([salesMocks.salesAllMocks]);
    const { status, body } = await chai.request(app).get('/sales');
    
    expect(status).to.equal(statusNumbers.ok);
    expect(body).to.be.an('array');
    expect(body).to.have.lengthOf(salesMocks.salesAllMocks.length);
    expect(body).to.be.deep.equal(salesMocks.salesAllMocks);
  });

  it('Recuperando a lista da busca por sales por meio do id', async function () {
    sinon.stub(connection, 'execute').resolves([salesMocks.salesByIdMock]);

    const id = 1;
    const { status, body } = await chai.request(app).get(`/sales/${id}`);

    expect(status).to.equal(statusNumbers.ok);
    expect(body).to.be.an('array');
    expect(body).to.have.lengthOf(salesMocks.salesByIdMock.length);
    expect(body).to.be.deep.equal(salesMocks.salesByIdMock);
  });

  // it('Recuperando a lista INVALIDA sales da busca por ID ', async function () {
  //   sinon.stub(connection, 'execute').resolves(false);

  //   const id = 23;
  //   const { status, body } = await chai.request(app).get(`/products/${id}`);

  //   console.log(body);
  //   expect(status).to.equal(statusNumbers.erroServer);
  //   // expect(body).to.be.an('array');
  //   // expect(body).to.have.lengthOf(1);
  //   expect(body).to.be.deep.equal(false);
  // });

  afterEach(function () {
    sinon.restore();
  });
});