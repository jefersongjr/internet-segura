const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Usando o método GET em /dados', () => {
    it('Retorna a lista informações completa!', async function () {
        const response = await chai
            .request(app) 
            .get('/dados');
        expect(response.status).to.be.equal(200);
    });
});