const express = require('express');
const router= express.Router();
const cartController = require('../controller/cart_controller');
const verifyToken = require('../middleware/auth')

router.post('/create',verifyToken, cartController.createCart);


module.exports = router;