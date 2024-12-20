const express = require('express');
const router= express.Router();
const productController = require('../controller/product_controller');

router.post('/add',productController.addProducts);
router.get('/get',productController.getAllProducts);

module.exports = router;