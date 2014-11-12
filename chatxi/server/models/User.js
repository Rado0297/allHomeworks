var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

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

var User = mongoose.model('User', userSchema);

module.exports.seedInitialUsers = function(){
    User.find({}).exec(function(err, collection){
        if(err){
            console.log('Cannot find users: ' + err);
            return;
        }


        if(collection.length === 0){
            var salt;
            var hashedPwd;

            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'admin');
            User.create({username: 'admin', firstName: 'Радослав', lastName: 'Радков', email: 'radoslavradov@gmail.com', salt: salt, hashPass: hashedPwd, roles: ['admin']});
            console.log("Admin rado is added");

            console.log("Users added to database.");
        }
    });
};