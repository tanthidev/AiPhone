class HomeController {
    //GET /home
    login(req, res) {
        res.render("pages/login", {layout: 'sub' })
    }
}

module.exports = new HomeController();
