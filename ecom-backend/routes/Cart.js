const express = require('express');
const router = express.Router();

const CartControllers = require('../controllers/Cart');

router.get('/', CartControllers.getCart);
router.post('/', CartControllers.addCart);
// router.put('/:id', CartControllers.editCart);
// router.delete('/:id', CartControllers.deleteCart);

module.exports = router;