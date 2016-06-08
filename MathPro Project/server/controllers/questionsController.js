var forumQuestion = require('mongoose').model('forumQuestion');

//export functions for CRUD opertions
module.exports = {
    //this function get list of FAQs (admin only)
    /*createFAQ: function(req, res, next){
        //Edit for Questions model....
        var newUserData = req.body;
        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
        User.create(newUserData, function(err, user){
            if(err){
                console.log('Failed to register new user: ' + err);
                return;
            }

            req.login(user, function(err){
                if(err) {
                    res.status(400);
                    return res.send({reason: err.toString()});
                }
                res.send(user);
            });
        });
    },*/
    getAllForumQuestions: function(req, res){
        forumQuestion.find({}).exec(function(err, collection){
            if(err){
                console.log('FAQs could not be loaded: ' + err);
            }

            res.send(collection);
        });
    }
}