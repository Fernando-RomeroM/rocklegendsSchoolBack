// server.js

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const alumnosRoutes = require('./routes/alumnosRoutes');
const userRoutes = require('./routes/userRoutes'); // Importar las rutas de usuario

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/properties', alumnosRoutes);
app.use('/api/user', userRoutes); // Usar las rutas de usuario

app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
});
