const PartModel = require('../models/parts');

class Partepository {
    constructor() {
        this.part = PartModel;
        this.part.sync({ force: true });
    }
    async create(name, email, cpf, phone) {
        return this.part.create({
            name,
            email,
            cpf,
            phone
        });
    }
    async getPart() {
        return this.part.find();
    }
    async getPart(id) {
        return this.part.findOne({ id });
    }
    async deletePart(id) {
        let part = this.part.findOne({ id });
        return await part.deleteOne(part)
    }
    async updatePart(id) {
        let part = this.part.findOne({ id });
        return await await part.save(part)
    }
}
module.exports = Partepository;

