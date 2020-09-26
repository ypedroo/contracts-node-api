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
            return res.status(500).json({ message: err.message });
        }
    }
    async getParts(req, res) {
        try {
            const part = await this.partService.getPart();
            return res.json({
                data: part
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async getPart(req, res) {
        try {
            const { id } = req.params;
            const part = await this.partService.getPartById(id);
            return res.json({
                data: part
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async updatePart(req, res) {
        try {
            const { id } = req.params;
            let newPart = {
                name: req.body.name,
                cpf: req.body.cpf,
                email: req.body.email,
                phone: req.body.phone
            };
            const part = await this.partService.updatePart(id, newPart);
            return res.json({
                data: part
            });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    };
    async deletePart(req, res) {
        try {
            const { id } = req.params;
            const part = await this.partService.deletePart(id);
            return res.json({
                data: part
            });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

module.exports = PartController;