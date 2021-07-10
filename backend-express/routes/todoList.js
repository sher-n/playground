const express = require('express');
const router = express.Router();
const TodolistControllers = require('../controllers/todoList');


router.get('/', TodolistControllers.getTodoList);

module.exports = router;