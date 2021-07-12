const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/User');
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded(), {extended : false});

app.use('/users', userRoutes);

db.sequelize.sync({ force : false }).then(() => {
    app.listen(8000, () => console.log('server is running at port 8000'));
});

