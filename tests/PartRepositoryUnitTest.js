const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const PartModel = require('../src/models/parts');
const PartRepository = require('../src/repositories/PartRepository');
const { json } = require("express");

describe("PartRepository", function () {
    const stubValue = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        cpf: '00000000000',
        phone: faker.phone.phoneNumber(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
    };

    describe("create", async () => {
        it("should add a new part to the db", async function () {
            const stub = sinon.stub(PartModel, "create").returns(stubValue);
            const partRepository = new PartRepository();
            const user = await partRepository.create(stubValue.name,
                stubValue.email,
                stubValue.cpf,
                stubValue.phone);

            expect(stub.calledOnce).to.be.true;
            expect(user.id).to.equal(stubValue.id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
            expect(user.cpf).to.equal(stubValue.cpf);
            expect(user.phone).to.equal(stubValue.phone);
            expect(user.createdAt).to.equal(stubValue.createdAt);
            expect(user.updatedAt).to.equal(stubValue.updatedAt);
        });
    });

    describe("getPartById", async () => {
            it("should retrieve specfic part from db", async () => {
                const stub = sinon.stub(PartModel, "findOne").returns(stubValue);
                const partRepository = new PartRepository();
                const user = await partRepository.getPartById(stub.id);

                expect(stub.calledOnce).to.be.true;
                expect(user.id).to.equal(stubValue.id);
                expect(user.name).to.equal(stubValue.name);
                expect(user.email).to.equal(stubValue.email);
                expect(user.cpf).to.equal(stubValue.cpf);
                expect(user.phone).to.equal(stubValue.phone);
                expect(user.createdAt).to.equal(stubValue.createdAt);
                expect(user.updatedAt).to.equal(stubValue.updatedAt);
            });
        });

    describe("getPart", async () => {
        it("should retrieve an list of parts from db", async () => {
            const stub = sinon.stub(PartModel, "find").returns(Array);
            const partRepository = new PartRepository();
            const user = await partRepository.getPart();

            expect(stub.calledOnce).to.be.true;
            expect(user).to.equal(Array);
        });
    });

    describe("updatePart", async () => {
        it("should update specfic part from db", async () => {
            const stub = sinon.stub(PartModel, "findOneAndReplace").returns(json);
            const partRepository = new PartRepository();
            const user = await partRepository.updatePart(stubValue.id);

            expect(stub.calledOnce).to.be.true;
            expect(user).to.have.length.above(1);
        });
    });

    describe("deletePart", async () => {
        it("should delete specfic part from db", async () => {
            const stub = sinon.stub(PartModel, "deleteOne").returns(json);
            const partRepository = new PartRepository();
            const user = await partRepository.deletePart(stubValue.id);

            expect(stub.calledOnce).to.be.true;
            expect(user).to.have.length.above(1);
        });
    });
});