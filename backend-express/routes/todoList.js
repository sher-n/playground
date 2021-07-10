const express = require('express');
const router = express.Router();
const TodolistControllers = require('../controllers/todoList');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session : false })

router.get('/',authentication, TodolistControllers.getTodoList);
router.post('/',authentication, TodolistControllers.createTodoList);
router.delete('/:id',authentication, TodolistControllers.deleteTodolist);
router.put('/:id', authentication, TodolistControllers.updateTodolist);

module.exports = router;