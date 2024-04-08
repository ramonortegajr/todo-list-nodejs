const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/index', userController.addTask);
module.exports = router;