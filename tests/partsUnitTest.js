const chai = require('chai');
const part = require('../routes/parts');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Part Routing Tests', () => {
    it("should get all parts", done => {
        chai.request(part)
            .get('/')
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('json');
            });
            done();
        })
});