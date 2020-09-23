const Router = require('express');
const PartController = require('../controllers/PartController');

const routes = Router();

routes.get('/api/part', PartController.getParts);
routes.post('/api/part', PartController.register);
routes.get('/api/part/:id', PartController.getPart);
routes.patch('/api/part/:id', PartController.updatePart);
routes.delete('/api/part/:id', PartController.deletePart);

module.exports = setRoutes;