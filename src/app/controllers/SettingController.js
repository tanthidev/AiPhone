const Employee = require('../model_mongoose/employee')

class SettingController {
        // GET /home
        async setting(req, res, next) {
            //Render page
            res.render("pages/setting", {
                user: req.user.user,
                message: req.query.message
            })
        }
        
        async edit(req, res, next) {
            //Render page
            res.render("pages/editInfomation", {
                user: req.user.user
            })
        }

        async handleEdit(req, res, next) {
            try {
                await Employee.updateOne({_id:req.body._id}, req.body);
                res.redirect('/setting')
            } catch (error) {
                res.render('page/error/error', {layout:'sub', error})
            }
        }
        
}

module.exports = new SettingController();
 