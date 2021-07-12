
const getUser = (req,res) => {
    res.send('userlist');
}

const registerUser = (req,res) => {
    res.send('register');
}

const loginUser = (req,res) => {
    res.send('login');
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}