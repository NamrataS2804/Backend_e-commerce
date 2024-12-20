const express = require('express');
const router= express.Router();
const categaryController = require('../controller/categary_controller');
const verifyToken = require('../middleware/auth')

router.post('/create',categaryController.createCategary);
router.delete('/delete',categaryController.deletingCaterary);
router.put('/update',categaryController.Updatecategary);

module.exports = router;