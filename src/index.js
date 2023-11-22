const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const route = require('./routes');
require('dotenv').config();


app.use(cookieParser());
app.use(session({
  secret: 'aiphone',
  resave: false,
  saveUninitialized: true,
}));

//Connect database
// db.connect()


//Morgan quest HTTP
const morgan = require('morgan');
app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template Engine
app.engine('hbs', handlebars.engine({ 
    extname: 'hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
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
