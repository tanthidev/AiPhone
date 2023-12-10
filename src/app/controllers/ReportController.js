const Invoice = require('../model_mongoose/invoice');
class ReportController {
    async data(req, res) {
        const data = await Invoice.find()
        res.json(data); // Send formatted data as JSON
    }

    sale(req, res) {
        res.render("pages/sale_report",)
    }

    invoice(req, res) {
        res.render("pages/invoice_report",)
    }
}

module.exports = new ReportController();
