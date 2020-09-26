const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const PartController = require("../src/controllers/PartController");
const PartService = require("../src/services/PartService");

describe("PartController", () => {
    describe("register", () => {
        let status, json, res, userController, partService;
        beforeEach(() => {
            status = sinon.stub();
            json = sinon.spy();
            res = { json, status };
            status.returns(res);
            const userRepo = sinon.spy();
            partService = new PartService(userRepo);
        });
        it("should not register a user when name param is not provided", async () => {
            const req = { body: { email: faker.internet.email() } };

            await new PartController().register(req, res);

            expect(status.calledOnce).to.be.true;
            expect(status.args[0][0]).to.equal(400);
            expect(json.calledOnce).to.be.true;
            expect(json.args[0][0].message).to.equal("Invalid Params");
        });

        it("should not register a user when name and email params are not provided", async () => {
            const req = { body: {} };

            await new PartController().register(req, res);

            expect(status.calledOnce).to.be.true;
            expect(status.args[0][0]).to.equal(400);
            expect(json.calledOnce).to.be.true;
            expect(json.args[0][0].message).to.equal("Invalid Params");
        });

        it("should not register a user when email param is not provided", async () => {
            const req = { body: { name: faker.name.findName() } };

            await new PartController().register(req, res);

            expect(status.calledOnce).to.be.true;
            expect(status.args[0][0]).to.equal(400);
            expect(json.calledOnce).to.be.true;
            expect(json.args[0][0].message).to.equal("Invalid Params");
        });

        it("should register a user when email and name params are provided", async () => {
            const req = {
                body: { name: faker.name.findName(), email: faker.internet.email() }
            };

            const stubValue = {
                id: faker.random.uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                cpf: '00000000000',
                phone: faker.phone.phoneNumber(),
                createdAt: faker.date.past(),
                updatedAt: faker.date.past()
            };
            const stub = sinon.stub(partService, "create").returns(stubValue);
            userController = new PartController(partService);

            await userController.register(req, res);
            expect(stub.calledOnce).to.be.true;
            expect(status.calledOnce).to.be.true;
            expect(status.args[0][0]).to.equal(201);
            expect(json.calledOnce).to.be.true;
            expect(json.args[0][0].data).to.equal(stubValue);
        });
    });

    describe("getUserById", () => {
        let req;
        let res;
        let partService;
        beforeEach(() => {
            req = { params: { id: faker.random.uuid() } };
            res = { json: function () { } };
            const userRepo = sinon.spy();
            partService = new PartService(userRepo);
        });

        it("should return a part that matches the id param", async () => {
            const stubValue = {
                id: req.params.id,
                name: faker.name.findName(),
                email: faker.internet.email(),
                cpf: '00000000000',
                phone: faker.phone.phoneNumber(),
                createdAt: faker.date.past(),
                updatedAt: faker.date.past()
            };
            const mock = sinon.mock(res);
            mock
                .expects("json")
                .once()
                .withExactArgs({ data: stubValue });

            const stub = sinon.stub(partService, "getPartById").returns(stubValue);
            userController = new PartController(partService);
            const user = await userController.getPart(req, res);
            expect(stub.calledOnce).to.be.true;
            mock.verify();
        });
    });

    describe("getPart", () => {
        let req;
        let res;
        let partService;
        beforeEach(() => {
            res = { json: function () { } };
            const userRepo = sinon.spy();
            partService = new PartService(userRepo);
        });

        it("should return a list of parts", async () => {
            const stubValue = {};
            const mock = sinon.mock(res);
            mock
                .expects("json")
                .once()
                .withExactArgs({ data: Object });

            const stub = sinon.stub(partService, "getPart").returns(Object);
            userController = new PartController(partService);
            const user = await userController.getParts(req, res);
            expect(stub.calledOnce).to.be.true;
            mock.verify();
        });
    });

    describe("updatePart", () => {
        let req;
        let res;
        let partService;
        beforeEach(() => {
            req = { params: { id: faker.random.uuid() } };
            res = { json: function () { } };
            const userRepo = sinon.spy();
            partService = new PartService(userRepo);
        });

        it("should update a part that matches the id param", async () => {
            const mock = sinon.mock(res);
            mock
                .expects("json")
                .once()
                .withExactArgs({ data: String });

            const stub = sinon.stub(partService, "updatePart").returns(String);
            userController = new PartController(partService);
            const user = await userController.updatePart(req, res);
            expect(stub.calledOnce).to.be.true;
            mock.verify();
        });
    });

    describe("deletePart", () => {
        let req;
        let res;
        let partService;
        beforeEach(() => {
            req = { params: { id: faker.random.uuid() } };
            res = { json: function () { } };
            const userRepo = sinon.spy();
            partService = new PartService(userRepo);
        });

        it("should return a part that matches the id param", async () => {
            const mock = sinon.mock(res);
            mock
                .expects("json")
                .once()
                .withExactArgs({ data: String });

            const stub = sinon.stub(partService, "deletePart").returns(String);
            userController = new PartController(partService);
            const user = await userController.deletePart(req, res);
            expect(stub.calledOnce).to.be.true;
            mock.verify();
        });
    });
});