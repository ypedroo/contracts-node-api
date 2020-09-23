const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const PartService = require("../../src/services/PartService");
const PartRepository = require("../../src/repositories/PartRepository");

describe("PartService", function () {
    describe("create", function () {
        it("should create a new part", async function () {
            const stubValue = {
                id: faker.random.uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                cpf: '00000000000',
                phone: faker.phone.phoneNumber(),
                createdAt: faker.date.past(),
                updatedAt: faker.date.past()
            };
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

    describe("getUser", function () {
        it("should return a user that matches the provided id", async function () {
            const stubValue = {
                id: faker.random.uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                cpf: '00000000000',
                phone: faker.phone.phoneNumber(),
                createdAt: faker.date.past(),
                updatedAt: faker.date.past()
            };
            const partRepo = new PartRepository();
            const stub = sinon.stub(partRepo, "getPartById").returns(stubValue);
            const partService = new PartService(partRepo);
            const user = await userService.(stubValue.id);
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

    describe("getPart", function () {
        it("should retrieve an list of parts from db", async function () {
            const stub = sinon.stub(PartModel, "getPart").returns(Array);
            const partRepository = new PartRepository();
            const user = await partRepository.getPart();

            expect(stub.calledOnce).to.be.true;
            expect(user).to.equal(Array);
        });
    });

    describe("updatePart", function () {
        it("should update specfic part from db", async function () {
            const stub = sinon.stub(PartModel, "updatePart").returns(JSON);
            const partRepository = new PartRepository();
            const user = await partRepository.updatePart(stub.id);

            expect(stub.calledOnce).to.be.true;
            expect(user).to.equal(JSON);
        });
    });

    describe("deletePart", function () {
        it("should delete specfic part from db", async function () {
            const stub = sinon.stub(PartModel, "deletePart").returns(JSON);
            const partRepository = new PartRepository();
            const user = await partRepository.deletePart(stub.id);

            expect(stub.calledOnce).to.be.true;
            expect(user).to.equal(JSON);
        });
    });
});