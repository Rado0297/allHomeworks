var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    //configure developmenr connection to local database
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/meanstackapp',
        port: process.env.PORT || 3030
    },
    //configure production connection to database
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:<adminPassword>@ds037395.mongolab.com:37395/mathpro',
        port: process.env.PORT || 3030
    }
}
