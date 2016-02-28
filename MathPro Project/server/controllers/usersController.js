var encryption = require('../utilities/encryption')
var User = require('mongoose').model('User');

//export functions for CRUD opertions
module.exports = {
    //this function create user
    createUser: function(req, res, next){
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
    },
    //this function update information of users (when there is a change in first/last name, password and so on...)
    updateUser: function(req, res, next){
        if(req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1){
            var updatedUserData = req.body;
            if(updatedUserData.password && updatedUserData.password.length > 0){
                updatedUserData.salt = encryption.generateSalt();
                updatedUserData.hashPass = encryption.generateHashedPassword(updatedUserData.salt, updatedUserData.password);
            }
            User.update({_id: req.body._id}, updatedUserData, function(){
                res.end();
            });
        }
        else{
            res.send({ reason: 'You do not have permission!!!'});
        }
    },
    //this function get list of users (admin only)
    getAllUsers: function(req, res){
        User.find({}).exec(function(err, collection){
            if(err){
                console.log('Users could not be loaded: ' + err);
            }

            res.send(collection);
        });
    },
    //this function show info in profile page
    getUserById: function(req, res, next){
        User.findOne({_id: req.params.id}).exec(function(err, user){
            if(err){
                console.log('User details could not be loaded: ' + err);
            }

            res.send(user);
        });
    }
}