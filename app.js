const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorControll = require('./controllers/error')

const adminData = require('./routes/admin');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use('/admin', adminData);
app.use(usersRoutes);

app.use(errorControll.get404)

app.listen(5000);
