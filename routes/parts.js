const express = require('express');
const router = express.Router();
const Part = require('../models/parts');

router.get('/', async (req, res) => {
    try {
        const parts = await Part.find();
        res.send(parts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', getPart, async (req, res) => {
    res.json(res.part);
});

router.post('/', async (req, res) => {
    const part = new Part({
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
        phone: req.body.phone
    });

    try {
        const newPart = await part.save();
        res.status(201).json(newPart);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', getPart, async (req, res) => {
});


router.delete('/:id', getPart, async (req, res) => {
    try {
        await res.part.remove();
        res.json({ message: "part deleted" })
    } catch (err) {
        return res.status(500).json({ message: err.message });

    }
});

async function getPart(req, res, next) {
    let part;
    try {
        part = await Part.findById(req.params.id);
        if (part == null) {
            return res.status(404).json({ message: 'Cannot find part' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.part = part;
    next();
}
module.exports = router;