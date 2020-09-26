const express = require("express");
const router = express.Router();
const PartController = require("../controllers/PartController");
const { partService } = require("../config/DependencyContainer");

const partController = new PartController(partService);

router.get('/part/:id', (req, res) => partController.getPart(req, res));
router.patch('/part/:id', (req, res) => partController.updatePart(req, res));
router.delete('/part/:id', (req, res) => partController.deletePart(req, res));
router.get('/part', (req, res) => partController.getParts(req, res));
router.post('/part', (req, res) => partController.register(req, res));

module.exports = router;
