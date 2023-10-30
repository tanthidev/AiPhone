const homeRouter = require('./home');
const productsRouter = require('./productlist');
const posRouter = require('./pos');
const loginRouter = require('./login');
const invoiceRouter = require('./invoice');
const customerRouter = require('./customer');
const employeeRouter = require('./employee');
const invoice_reportRouter = require('./invoice_report');
const sale_reportRouter = require('./sale_report');
const suplierRouter = require('./suplier');

function route(app) {
    app.use('/productlist', productsRouter);
    app.use('/pos', posRouter);
    app.use('/login', loginRouter);
    app.use('/invoice', invoiceRouter);
    app.use('/customer', customerRouter);
    app.use('/employee', employeeRouter);
    app.use('/invoice_report', invoice_reportRouter);
    app.use('/sale_report', sale_reportRouter);
    app.use('/suplier', suplierRouter);
    app.use('/', homeRouter);
}

module.exports = route;
