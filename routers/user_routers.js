const express = require('express');
const router= express.Router();
const userController = require('../controller/user_controller');

router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);

module.exports = router;