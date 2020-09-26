const { json } = require('express');
const PartModel = require('../models/parts');

class PartRepository {
    constructor() {
        this.part = PartModel;
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
        return this.part.findById(id);
    }
    async deletePart(id) {
        let obj = this.part.findById(id);
        await this.part.deleteOne(obj)
        return json({ message: "part deleted" })
    }

    async updatePart(id, part) {
        await this.part.findOneAndUpdate(id, part)
        return json({ message: "part updated" })
    }
}
module.exports = PartRepository;