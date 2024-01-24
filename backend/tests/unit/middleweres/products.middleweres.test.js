const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsMiddlleweres } = require('../../../src/middlewares/index');

const { expect } = chai;

chai.use(sinonChai);

describe('Realizando testes - middle SERVICES:', function () {
  it('Recuperando a lista de TODOS os products', function () {
    const request = {
      params: { },
      body: { name: 'exemploXYZ' },
    };
    const next = sinon.stub();
    const response = {
    };

    productsMiddlleweres.nameValid(request, response, next);
    
    expect(next.calledOnce).to.equal(true);
  });

  afterEach(function () {
    sinon.restore();
  });
});