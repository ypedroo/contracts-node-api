class PartService {
    constructor(partRepository ) {
        this.partRepository = partRepository ;
    }

    async create(name, email, cpf, phone){
        return this.partRepository.create(name, email, cpf, phone);
    }

    async getPart() {
        return this.partRepository.getPart();
    }

    async getPartById(id) {
        return this.partRepository.getPartById(id);
    }


    async deletePart(id) {
        return this.partRepository.deletePart(id);
    }
    
    async updatePart(id) {
        return this.partRepository.updatePart(id);
    }
}

module.exports = PartService;