const express = require('express');
const router = express.Router();
const Part = require('../models/parts');

router.get('/', async (req, res) => {
    try {
        const parts = await Part.find();
        res.send(parts);
    } 
    catch (err){
        res.status(500).json({message: err.message});
    }
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.patch('/:id', (req, res) => {

});


router.delete('/:id', (req, res) => {

});

module.exports = router;