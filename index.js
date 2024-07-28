const express = require('express');
const path = require('path');
const alumnosRoutes = require('./routes/alumnosRoutes');
require('dotenv').config();

const app = express();

// Middleware para rutas de alumnos
app.use('/api/alumnos', alumnosRoutes);

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
