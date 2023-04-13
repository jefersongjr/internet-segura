const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const dataMock = require('../mocks/dataMock.json');

const { expect } = chai;

chai.use(chaiHttp);

describe('Usando o método GET em /dados', () => {
    beforeEach(() => {
        sinon.stub(fs.promises, 'readFile')
          .resolves(dataMock);
      });
    
      afterEach(() => {
        sinon.restore();
      });

    it('Retorna a lista informações completa!', async () => {
        const response = await chai
            .request(app) 
            .get('/dados');
        expect(response.status).to.be.equal(200);
        expect(response.body[0]).to.deep.equal(dataMock[0]);
    });
});