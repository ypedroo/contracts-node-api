const routes = require('express').Router();
const PartController = require('../controllers/PartController');

routes.get('/part', PartController.getParts);
routes.post('/part', PartController.register);
routes.get('/part/:id', PartController.getPart);
routes.patch('/part/:id', PartController.updatePart);
routes.delete('/part/:id', PartController.deletePart);

module.exports = routes;