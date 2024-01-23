const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../../src/app');
const connection = require('../../../src/models/connection.model');
// const { productsModel } = require('../../../src/models/index.model');
const { productsMock } = require('../mocks/index.mock');
const { statusNumbers } = require('../../../src/controllers/statusMensages');

const { expect } = chai;

chai.use(chaiHttp);

describe('Realizando testes - PRODUCT MODEL:', function () {
  const { productAllMock, productByIdMock, productIsertMock } = productsMock;

  it('Recuperando a lista de todos os products', async function () {
    sinon.stub(connection, 'execute').resolves([productAllMock]);

    const { status, body } = await chai.request(app).get('/products/');
    
    expect(status).to.equal(statusNumbers.ok);

    expect(body).to.be.an('Array');
    expect(body).to.have.lengthOf(3);
    expect(body).to.be.deep.equal(productAllMock);
  });

  it('Recuperando a lista da busca por apenas um product por meio do id', async function () {
    sinon.stub(connection, 'execute').resolves([[productByIdMock]]);

    const id = 1;
    const { status, body } = await chai.request(app).get(`/products/${id}`);

    expect(status).to.equal(statusNumbers.ok);
    expect(body).to.be.an('array');
    expect(body).to.have.lengthOf(1);
    expect(body).to.be.deep.equal(productByIdMock);
  });

  // it.only('Recuperando a lista INVALIDA da busca por ID ', async function () {
  //   sinon.stub(connection, 'execute').resolves(undefined);

  //   const id = 23;
  //   const { status, body } = await chai.request(app).get(`/products/${id}`);

  //   console.log(status);
  //   // expect(status).to.equal(statusNumbers.erroServer);
  //   // expect(body).to.be.an('array');
  //   // expect(body).to.have.lengthOf(1);
  //   expect(body).to.be.deep.equal(undefined);
  // });

  it('Verificando post de um produto', async function () {
    const { name } = productIsertMock[0];
    sinon.stub(connection, 'execute').resolves({ name: 'Prodee' });

    const { status, body } = await chai.request(app).post('/products').send({ name });
    expect(status).to.equal(statusNumbers.postOk);
    expect(body).to.be.an('object');
    expect(body).to.be.deep.equal(body);
  });

  // it('Verificando post sem a dado NAME de um produto', async function () {
  //   sinon.stub(connection, 'execute').resolves([{}]);

  //   const { status, body } = await chai.request(app).post('/products');

  //   expect(status).to.equal(statusNumbers.erro);
  //   expect(body).to.be.an('object');
  //   expect(body).to.be.deep.equal(body);
  // });

  // it('Verificando post com o  dado NAME menor que 5 caracteres de um produto', async function () {
  //   sinon.stub(connection, 'execute').resolves([{}]);

  //   const { status, body } = await chai.request(app).post('/products').send;

  //   expect(status).to.equal(statusNumbers.erro);
  //   expect(body).to.be.an('object');
  //   expect(body).to.be.deep.equal(body);
  // });

  afterEach(function () {
    sinon.restore();
  });
});