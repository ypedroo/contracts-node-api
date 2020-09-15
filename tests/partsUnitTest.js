const chai = require('chai');
const part = require('../routes/parts');
const chaiHttp = require('chai-http');
const Part = require('../models/parts');

chai.use(chaiHttp);

describe('Part Integration Tests', () => {
    it("should get all parts", done => {
        chai.request(part)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('json');
            });
        done();
    });
    it("should create new parts", done => {
        partMock = new Part({
            name: "",
            email: "",
            cpf: "",
            phone: ""
        });
        chai.request(part)
            .post('/')
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a(partMock);
            });
        done();
    });
});