var passport = require('passport');

module.exports = {
    //function that logs in user
    login: function(req, res, next){
        var auth = passport.authenticate('local', function(err, user){
            if(err) return next(err);
            if(!user){
                res.send({success: false});
            }

            req.login(user, function(err){
                if(err) return next(err);
                res.send({success: true, user: user});
            });
        });
        auth(req, res, next);
    },
    //function that log out user
    logout: function(req, res, next){
        req.logout();
        res.end();
    },
    //function that check is there any logged user
    isAuthenticated: function(req, res, next){
        if(!req.isAuthenticated()){
            res.status(403);
            res.end();
        }
        else {
            next();
        }
    },
    //function check that is there admin role for logged user
    isInRole: function(role){
        return function(req, res, next) {
            if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
                next();
            }
            else {
                res.status(403);
                res.end();
            }
        }
    }
}