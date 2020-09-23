const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const { json } = require("express");
const PartService = require("../src/services/PartService");
const PartRepository = require("../src/repositories/PartRepository");

describe("PartService", () => {
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
        it("should create a new part", async () => {
            const partRepo = new PartRepository();
            const stub = sinon.stub(partRepo, "create").returns(stubValue);
            const partService = new PartService(partRepo);
            const user = await partService.create(stubValue.name, stubValue.email, stubValue.cpf, stubValue.phone);
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

    describe("getUser", () => {
        it("should return a user that matches the provided id", async () => {
            const partRepo = new PartRepository();
            const stub = sinon.stub(partRepo, "getPartById").returns(stubValue);
            const partService = new PartService(partRepo);
            const user = await partService.getPartById(stubValue.id);
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

    describe("getPart", () => {
        it("should retrieve an list of parts from db", async () => {
            const partRepo = new PartRepository();
            const stub = sinon.stub(partRepo, "getPart").returns(stubValue);
            const partService = new PartService(partRepo);
            const user = await partService.getPart();

            expect(stub.calledOnce).to.be.true;
            expect(user).to.not.be.null;
        });
    });

    describe("updatePart", () => {
        it("should update specfic part from db", async () => {
            const partRepo = new PartRepository();
            const stub = sinon.stub(partRepo, "updatePart").returns(json);
            const partService = new PartService(partRepo);
            const user = await partService.updatePart(stub.id);

            expect(stub.calledOnce).to.be.true;
            expect(user).to.not.be.null;
        });
    });

    describe("deletePart", () => {
        it("should delete specfic part from db", async () => {
            const partRepo = new PartRepository();
            const stub = sinon.stub(partRepo, "deletePart").returns(json);
            const partService = new PartService(partRepo);
            const user = await partService.deletePart(stub.id);

            expect(stub.calledOnce).to.be.true;
            expect(user).to.not.be.null;
        });
    });
});