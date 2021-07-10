const express = require('express');
const cors = require('cors');
const app = express();
const TodoListRoute = require('./routes/todoList');
const UserRoute = require('./routes/user')
const db = require('./models')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/users', UserRoute);
app.use('/todo-list', TodoListRoute);



db.sequelize.sync({ force: false }).then(() => {
    app.listen(8000, () => console.log('server is running at port 8000'));
})

