const PartController = require('../controllers/PartController');
module.exports = (server) => {
    server.get('/part', PartController.getParts);
    server.post('/part', PartController.register);
    server.get('/part/:id', PartController.getPart);
    server.patch('/part/:id', PartController.updatePart);
    server.delete('/part/:id', PartController.deletePart);
}