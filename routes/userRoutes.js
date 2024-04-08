const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/index', userController.addTask);
router.get('/index', userController.displayList);

module.exports = router;