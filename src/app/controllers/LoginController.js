class HomeController {
    //GET /home
    login(req, res) {
        res.render("pages/login")
    }
}

module.exports = new HomeController();
