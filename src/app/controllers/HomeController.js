class HomeController {
    //GET /home
    home(req, res) {
        res.render("pages/home")
    }
}

module.exports = new HomeController();
