class PartController {
    constructor(partService) {
        this.partService = partService;
    }
    async register(req, res, next) {
        try {
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
        } catch (err) {
            return (err.message);
        }
    }
    async getParts(req, res) {
        try {
            const part = await this.partService.getPart();
            return res.json({
                data: part
            });
        } catch (err) {
            return (err.message);
        }
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
        data: part
    };
    async deletePart(req, res) {
        const { id } = req.params;
        const part = await this.partService.deletePart(id);
        return res.json({
            data: part
        });
    }
}

module.exports = PartController;