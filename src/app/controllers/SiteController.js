const Course = require("../models/courses.model")

class SiteController {
    //GET /news
    index(req, res) {
        // Course.find({}, function(err, courses){
        //     if(!err){
        //         res.json(courses)
        //     } else {
        //         res.status(400).json({error: 'ERROR!!!'})
        //     }
        // })
        res.render("pages/home")
    }

    //search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
