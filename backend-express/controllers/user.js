const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


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
        const salt = bcryptjs.genSaltSync(12);
        const hashPassword = bcryptjs.hashSync(password, salt);
        await db.User.create({
            username: username,
            password: hashPassword,
            name: name
        });
    }

    res.status(201).send({ message: `User ${name} has been created` });

}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username: username }})
    if (!targetUser) {
        res.status(404).send({message : 'Username or password is wrong'});
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        if (isCorrectPassword) {
            const payload = {
                id : targetUser.id,
                name : targetUser.name
            }
            const token = jwt.sign(payload, 'Easy', { expiresIn : 3600});
            res.status(200).send({ token : token, message : 'you are logging in'});
        } else {
            res.status(400).send({ message : 'wrong username or password'});
        }
    }
}

module.exports = {
    registerUser,
    getUserList,
    loginUser
}