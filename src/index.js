const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

const db = require("./config/database")

const route = require('./routes');
require('dotenv').config();

//Connect database
db.connect()


//Morgan quest HTTP
const morgan = require('morgan');
app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template Engine
app.engine('hbs', handlebars.engine({ 
    extname: 'hbs',
}));

//config source static
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes 
route(app);

app.listen(port, () => {
    console.log(`App listening on localhost:${port}`);
});
