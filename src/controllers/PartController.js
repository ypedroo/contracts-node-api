class PartController {
    constructor(partService) {
        this.partService = partService;
    }
    async register(req, res, next) {
        const { name, email, cpf, phone } = req.body;
        if (
            !name ||
            typeof name !== "string" ||
            (!email || typeof email !== "string")
        ) {
            return res.status(400).json({
                message: "Invalid Params"
            });
        }
        const part = await this.partService.create(name, email, cpf, phone);
        return res.status(201).json({
            data: part
        });
    }
    async getParts(req, res) {
        const part = await this.partService.getPart();
        return res.json({
            data: part
        });
    }
    async getPart(req, res) {
        const { id } = req.params;
        const part = await this.partService.getPartById(id);
        return res.json({
            data: part
        });
    }
    async updatePart(req, res) {
        const { id } = req.params;
        const part = await this.partService.updatePart(id);
        return res.status(201).json({
            data: part
        });
    }
    async deletePart(req, res) {
        const { id } = req.params;
        const part = await this.partService.deletePart(id);
        return res.status(201).json({
            data: part
        });
    }
}
module.exports = PartController;