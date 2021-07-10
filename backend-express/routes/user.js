const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/', UserController.getUserList)
router.post('/register', UserController.registerUser);

module.exports = router;