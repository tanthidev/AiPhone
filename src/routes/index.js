const homeRouter = require('./home');
const productsRouter = require('./productlist');
const posRouter = require('./pos')

function route(app) {
    app.use('/productlist', productsRouter);
    app.use('/pos', posRouter);
    app.use('/', homeRouter);
}

module.exports = route;
