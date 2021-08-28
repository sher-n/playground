const express = require('express');
const router = express.Router();
const passport = require('passport');
const StoreControllers = require('../controllers/Store');


const authentication = passport.authenticate('jwt', { session: false });

router.get('/car', StoreControllers.getCarProduct)
router.get('/', authentication,StoreControllers.getProduct);
router.post('/',authentication, StoreControllers.addProduct);
router.put('/',authentication, StoreControllers.editProduct);
router.delete('/', StoreControllers.deleteProduct);

module.exports = router;