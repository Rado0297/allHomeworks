var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/meanstackapp',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:[password]@ds043997.mongolab.com:43997/meanstackapp',
        port: process.env.PORT || 3030
    }
}
