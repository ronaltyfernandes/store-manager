const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsMiddlleweres } = require('../../../src/middlewares/index');

const { expect } = chai;

chai.use(sinonChai);

describe('Realizando testes - middleweres :', function () {
  it('verifica exemplo VERDADEIRO para name valid', function () {
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

  it('verifica exemplo FALSO para name valid', function () {
    const request = {
      params: { },
      body: { name: 'INVA' },
    };
    const next = sinon.stub();
    const response = {
    };

    productsMiddlleweres.nameValid(request, response, next);
    
    expect(next.calledOnce).to.equal(false);
  });

  afterEach(function () {
    sinon.restore();
  });
});