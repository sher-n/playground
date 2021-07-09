const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
import TodolistRoutes from './routes/todoList'


app(cor());
app(express.json());
app(express.urlencoded({ extended : false }));

app.use('/users', )





app.listen(8000, () => console.log('server is running at port 8000'))