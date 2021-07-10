const db = require('../models');


const getTodoList = async (req,res) => {
    const todoList = await db.TodoList.findAll()
    res.status(200).send(todoList);
}
const createTodoList = async (req,res) => {
    const newTodo = await db.TodoList.create({
        task : req.body.task,
        user_id : 0 
    })
    res.status(201).send(newTodo);
}

module.exports = {
    getTodoList,
    createTodoList
}