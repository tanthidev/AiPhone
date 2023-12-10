const session = require('express-session');
const cookieParser = require('cookie-parser');

const homeRouter = require('./home');
const productsRouter = require('./productlist');
const settingRouter = require('./setting');
const posRouter = require('./pos');
const loginRouter = require('./login');
const invoiceRouter = require('./invoice');
const customerRouter = require('./customer');
const employeeRouter = require('./employee');
const adminCustomerRouter = require('./admin_customer');
const adminEmployeeRouter = require('./admin_employee');
const adminInvoiceRouter = require('./admin_invoice');
const adminProductRouter = require('./admin_product');
const reportRouter = require('./report');
const {checkLogin, logout, checkAdmin} = require('../middlewares/authMiddleware')

function route(app) {
    app.use('/setting',checkLogin, settingRouter);
    app.use('/productlist',checkLogin, productsRouter);
    app.use('/pos', checkLogin, posRouter);
    app.use('/login' ,loginRouter);
    app.use('/invoice', checkLogin,checkAdmin, invoiceRouter);
    app.use('/customer', checkLogin, customerRouter);
    app.use('/employee',checkLogin, checkAdmin, employeeRouter);
    app.use('/report',checkLogin, reportRouter);
    app.use('/admin_employee',checkLogin, checkAdmin, adminEmployeeRouter);
    app.use('/admin_customer',checkLogin, checkAdmin, adminCustomerRouter);
    app.use('/admin_invoice',checkLogin, checkAdmin, adminInvoiceRouter);
    app.use('/admin_product',checkLogin, checkAdmin, adminProductRouter);
    app.get('/logout', logout);
    app.use('/',checkLogin, homeRouter);
}

module.exports = route;
