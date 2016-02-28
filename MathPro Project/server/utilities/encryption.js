//require crypto module
var crypto = require('crypto');

module.exports = {
	//generate hashing salt
    generateSalt: function (){
        return crypto.randomBytes(123).toString('base64');
    },
    //generate hashing password by getting generated salt form User.js file
    generateHashedPassword:function (salt, pwd){
        var hmac = crypto.createHmac('sha1', salt);
        return hmac.update(pwd).digest('hex');
    }
};