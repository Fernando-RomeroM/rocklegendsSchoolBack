const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/calificacionControllers');

// Ruta para agregar una calificación
router.post('/add', calificacionController.addCalificacion);

// Ruta para obtener todas las calificaciones (opcional, si quieres implementar esto)
router.get('/', calificacionController.getCalificaciones);

module.exports = router;
