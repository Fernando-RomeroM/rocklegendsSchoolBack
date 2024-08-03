const express = require('express');
const router = express.Router();
const { getAlumnos } = require('../controllers/alumnoControllers');

// Ruta para obtener todos los alumnos
router.get('/', getAlumnos); 

module.exports = router;
