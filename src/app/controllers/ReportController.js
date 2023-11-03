
class ReportController {
    sale(req, res) {
        res.render("pages/sale_report",)
    }

    invoice(req, res) {
        res.render("pages/invoice_report",)
    }
}

module.exports = new ReportController();
