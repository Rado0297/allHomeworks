//require mongoose module and encryption srcipt
var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

//Make user schema - all properties that user object has
var userSchema = mongoose.Schema({
    username: { type: String, require: '{PATH} is required', unique: true },
    firstName: { type: String, require: '{PATH} is required' },
    lastName: { type: String, require: '{PATH} is required' },
    email: { type: String, require: '{PATH} is required' },
    profileImg: { type: String, default: 'pictures/profilePic.png'},
    salt: String,
    hashPass: String,
    roles: [String]
});

//Check entered password for hashing is same as hashed password in the database
userSchema.method({
    authenticate: function(password){
        if(encryption.generateHashedPassword(this.salt, password) === this.hashPass){
            return true
        }
        else{
            return false;
        }
    }
});

//declarate object User,which use model of user schema
var User = mongoose.model('User', userSchema);

module.exports.seedInitialUsers = function(){
    //checks is there any users in the database
    User.find({}).exec(function(err, collection){
        //if there is error with something throw error
        if(err){
            console.log('Cannot find users: ' + err);
            return;
        }

        //if database is empty this make one admin user with some default username and password
        if(collection.length === 0){
            var salt;
            var hashedPwd;

            //generating salt for hash
            salt = encryption.generateSalt();
            //make hashed password
            hashedPwd = encryption.generateHashedPassword(salt, 'radoDev0297');
            //create some default admin user
            User.create({username: 'rado', firstName: 'Радослав', lastName: 'Радков', email: 'radoslavradov@gmail.com', salt: salt, hashPass: hashedPwd, roles: ['admin']});
            console.log("Admin rado is added");

            console.log("Users added to database.");
        }
    });
};