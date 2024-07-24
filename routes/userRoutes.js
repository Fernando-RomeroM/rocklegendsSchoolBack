const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/user/:id', userController.getUser);
router.post('/login', userController.loginUser);

module.exports = router;
