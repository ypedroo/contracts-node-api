const PartRepository = require("../repositories/PartRepository");
const PartService = require('../services/PartService');

const partRepository = new PartRepository();
const partService = new PartService(partRepository);
module.exports = {
    partRepository,
    partService
};