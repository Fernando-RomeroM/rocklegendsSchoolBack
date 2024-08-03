const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/calificacionControllers');

router.get('/', calificacionController.getCalificaciones);
router.get('/:alumno_id', calificacionController.getCalificacionByAlumnoId);
router.post('/', calificacionController.updateCalificacion);

module.exports = router;
