const express = require('express');
const router = express.Router();

const ProductControllers = require('../controllers/Product');

router.get('/', ProductControllers.getProduct);
router.post('/', ProductControllers.addProduct);

module.exports = router;