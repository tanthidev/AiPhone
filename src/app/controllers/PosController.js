class PosController {
    //GET /pos
    pos(req, res) {
        res.render("pages/pos",{data: [1,2,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]})
    }

    //more
    show(req, res) {
        res.send('More in pos!!!')
    }
}

module.exports = new PosController();
