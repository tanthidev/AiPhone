const homeRouter = require('./home');
const productsRouter = require('./productlist');
const posRouter = require('./pos')
const loginRouter = require('./login')

function route(app) {
    app.use('/productlist', productsRouter);
    app.use('/pos', posRouter);
    app.use('/login', loginRouter)
    app.use('/', homeRouter);
}

module.exports = route;
