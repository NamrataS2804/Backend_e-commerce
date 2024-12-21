const express = require('express');
const router= express.Router();
const userController = require('../controller/user_controller');

router.post('/registerUser',userController.registerUser);
router.post('/loginUser',userController.loginUser);

module.exports = router;