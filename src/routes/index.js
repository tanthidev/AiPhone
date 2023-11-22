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
const { logout, checkAdmin} = require('../middlewares/authMiddleware')

function route(app) {
    app.use('/productlist', productsRouter);
    app.use('/pos', posRouter);
    app.use('/login', loginRouter);
    app.use('/invoice', invoiceRouter);
    app.use('/customer', customerRouter);
    app.use('/employee', employeeRouter);
    app.use('/report', reportRouter);
    app.use('/suplier', suplierRouter);
    app.get('/logout', logout);
    app.use('/', homeRouter);
}

module.exports = route;
