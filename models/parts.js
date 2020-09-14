const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        default: '0000-0000'
    },
});

module.exports = mongoose.model('Part', partSchema);