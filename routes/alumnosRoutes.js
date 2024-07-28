const express = require('express');
const router = express.Router();
const { getAlumnos } = require('../controllers/alumnosControllers');

// Ruta para obtener todos los alumnos
router.get('/', getAlumnos);

module.exports = router;



// // Simulación de base de datos en memoria
// const alumnos = [
//   { id: 1, nombre: 'Carlos', apellidos: 'García', instrumento: 'guitarra', foto: 'carlos_garcia.jpg', email: 'carlos.garcia@example.com', telefono: '555-1234' },
//   { id: 2, nombre: 'María', apellidos: 'López', instrumento: 'bajo', foto: 'maria_lopez.jpg', email: 'maria.lopez@example.com', telefono: '555-5678' },
//   { id: 3, nombre: 'Pedro', apellidos: 'Martínez', instrumento: 'batería', foto: 'pedro_martinez.jpg', email: 'pedro.martinez@example.com', telefono: '555-8765' }
//   // ... (otros alumnos)
// ];