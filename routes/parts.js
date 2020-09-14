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

router.get('/:id', (req, res) => {

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

router.patch('/:id', (req, res) => {

});


router.delete('/:id', (req, res) => {

});

module.exports = router;