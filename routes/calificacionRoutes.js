const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/calificacionControllers');

router.post('/add', calificacionController.addCalificacion);
router.get('/:alumnoId', calificacionController.getCalificacionByAlumnoId);

module.exports = router;
