const { json } = require('express');
const PartModel = require('../models/parts');

class PartRepository {
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
    async getPartById(id) {
        return this.part.findOne({ id });
    }
    async deletePart(id) {
        let part = this.part.findOne({ id });
        await part.deleteOne(part)
        return json({ message: "part deleted" })
    }
    async updatePart(id) {
        let part = this.part.findOne({ id });
        await await part.save(part)
        return json({ message: "part updated" })
    }
}
module.exports = PartRepository;

