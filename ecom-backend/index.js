const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/User');
const cartRoutes = require('./routes/Cart');
const productRoutes = require('./routes/Product');
const db = require('./models');

require('./config/passport/passport');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(8000, () => console.log('server is running at port 8000'));
});

