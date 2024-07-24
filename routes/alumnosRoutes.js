const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosControllers'); // Cambié propertyController a alumnosController

router.get('/', alumnosController.getProperties); // Ahora alumnosController se usa aquí

module.exports = router;
