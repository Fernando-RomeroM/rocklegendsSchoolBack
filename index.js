const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const alumnoRoutes = require('./routes/alumnoRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Middleware para rutas de alumnos y usuarios
app.use('/api/alumnos', alumnoRoutes);
app.use('/api/user', userRoutes);

// Middleware para servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../rocklegendsSchoolFront')));

// Ruta para manejar todas las demás solicitudes y servir el archivo index.html del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../rocklegendsSchoolFront', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
