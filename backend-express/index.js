const express = require('express');
const cors = require('cors');
const app = express();
const TodoListRoute = require('./routes/todoList');
const db = require('./models')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/', TodoListRoute);



db.sequelize.sync().then(() => {
    app.listen(8000, () => console.log('server is running at port 8000'));
})

