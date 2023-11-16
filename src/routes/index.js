const session = require('express-session');
const cookieParser = require('cookie-parser');

const homeRouter = require('./home');
const productsRouter = require('./productlist');
const posRouter = require('./pos');
const loginRouter = require('./login');
const invoiceRouter = require('./invoice');
const customerRouter = require('./customer');
const employeeRouter = require('./employee');
const suplierRouter = require('./suplier');
const reportRouter = require('./report');
const {checkLogin, logout} = require('../middlewares/authMiddleware')

function route(app) {
    app.use('/productlist',checkLogin, productsRouter);
    app.use('/pos',checkLogin, posRouter);
    app.use('/login',checkLogin, loginRouter);
    app.use('/invoice',checkLogin, invoiceRouter);
    app.use('/customer',checkLogin, customerRouter);
    app.use('/employee',checkLogin, employeeRouter);
    app.use('/report',checkLogin, reportRouter);
    app.use('/suplier',checkLogin, suplierRouter);
    app.get('/logout', logout);
    app.use('/',checkLogin, homeRouter);
}

module.exports = route;
