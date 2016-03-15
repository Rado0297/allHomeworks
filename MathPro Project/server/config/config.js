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
        db: 'CONNECTION STRING FOR DATABASE',
        port: process.env.PORT || 3030
    }
}
