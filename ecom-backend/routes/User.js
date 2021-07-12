const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/User');


router.get('/', userControllers.getUser)
router.post('/register', userControllers.registerUser);
router.post('/login', userControllers.loginUser);


module.exports = router;