const db = require('../models');


const getTodoList = async (req,res) => {
    const todoList = await db.TodoList.findAll({ where : { user_id : req.user.id}})
    console.log(req.user)
    res.status(200).send(todoList);
}
const createTodoList = async (req,res) => {
    const newTodo = await db.TodoList.create({
        task : req.body.task,
        user_id : req.user.id 
    })
    res.status(201).send(newTodo);
}

const deleteTodolist = async (req,res) => {
    const targetId = Number(req.params.id);
    const targetTodo = await db.TodoList.findAll({ where : { id : targetId, user_id : req.user.id}});
    if (targetTodo) {
        await targetTodo.destroy();
        res.status(204).send();
    } else {
        res.status(404).send({ message : "todolist not found"});
    }
}

const updateTodolist = async (req,res) => {
    const targetId = Number(req.params.id);
    const newTask = req.body.task;

    const targetTodo = await db.TodoList.findOne({ where : { id : targetId, user_id : req.user.id}});
    await targetTodo.update({
        task : newTask
    }, {
        where : { id : targetId}
    })
    res.status(200).send({message : 'updating success'});
    
}

module.exports = {
    getTodoList,
    createTodoList,
    deleteTodolist,
    updateTodolist
}