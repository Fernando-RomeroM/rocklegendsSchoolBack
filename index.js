const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const alumnoRoutes = require('./routes/alumnoRoutes');
const userRoutes = require('./routes/userRoutes');
const calificacionRoutes = require('./routes/calificacionRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/alumnos', alumnoRoutes);
app.use('/api/user', userRoutes);
app.use('/api/calificaciones', calificacionRoutes);

app.use(express.static(path.join(__dirname, '../rocklegendsSchoolFront')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../rocklegendsSchoolFront', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
