const Invoice = require('../model_mongoose/invoice');
const { mulToObject,singleToObject } = require('../util/mongoose');

class InvoiceController {

        async invoice(req, res) {
            try {
                const invoices = await Invoice.find();
                res.render("pages/invoice/invoice", { data: mulToObject(invoices)});
            } catch {
                res.send('Error');
            }
        }
    }
module.exports = new InvoiceController();
