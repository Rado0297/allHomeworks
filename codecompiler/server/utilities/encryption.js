var crypto = require('crypto');

module.exports = {
    generateSalt: function (){
        return crypto.randomBytes(123).toString('base64');
    },
    generateHashedPassword:function (salt, pwd){
        var hmac = crypto.createHmac('sha1', salt);
        return hmac.update(pwd).digest('hex');
    }
};