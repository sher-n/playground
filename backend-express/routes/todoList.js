const express = require('express');
const router = express.Router();
const TodolistControllers = require('../controllers/todoList');


router.get('/', TodolistControllers.getTodoList);
router.post('/', TodolistControllers.createTodoList);

module.exports = router;