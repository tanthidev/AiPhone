class PosController {
    //GET /pos
    pos(req, res) {
        res.render("pages/pos",)
    }

    //more
    show(req, res) {
        res.send('More in pos!!!')
    }
}

module.exports = new PosController();
