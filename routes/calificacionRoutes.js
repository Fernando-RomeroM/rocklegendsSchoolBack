const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/calificacionControllers');

router.post('/add', calificacionController.addCalificacion);

module.exports = router;
