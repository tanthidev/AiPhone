const homeRouter = require('./home');
const productsRouter = require('./productlist');
const posRouter = require('./pos')
const loginRouter = require('./login')
const invoiceRouter = require('./invoice')


function route(app) {
    app.use('/productlist', productsRouter);
    app.use('/pos', posRouter);
    app.use('/login', loginRouter)
    app.use('/invoice', invoiceRouter)
    app.use('/', homeRouter);
}

module.exports = route;
