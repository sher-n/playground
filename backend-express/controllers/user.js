const db = require('../models');

const getUserList = async (req, res) => {
    const todoList = await db.User.findAll();
    res.status(200).send(todoList);
}

const registerUser = async (req, res) => {
    const { username, password, name } = req.body;
    const targetUser = await db.User.findOne({ where: { username: username } })
    if (targetUser) {
        res.status(400).send({ message: `username ${username} has been taken` });
    } else {
        await db.User.create({
            username: username,
            password: password,
            name: name
        });
    }

    res.status(201).send({ message: `User ${name} has been created` });

}

const loginUser = async (req, res) => {
    const { username, password } = req.body
    const targetUser = await db.User.findOne(
        {
            where:
            {
                username: username,
                password: password
            }
        })
    if (!targetUser) {
        res.status(404).send({message : 'Username or password is wrong'});
    } else {
        res.status(200).send({ token : password, message : 'you are logging in'});
    }
}

module.exports = {
    registerUser,
    getUserList,
    loginUser
}