class PosController {
    //GET /pos
    pos(req, res) {
        res.render("pages/pos", {loop:[1,2,3,4,5,6,7,8,9,12,31321,2313,123,12312,312,3]})
    }

    //more
    show(req, res) {
        res.send('More in pos!!!')
    }
}

module.exports = new PosController();
