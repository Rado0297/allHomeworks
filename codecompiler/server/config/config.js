var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://admin:admin@ds047762.mongolab.com:47762/codecompilerusers',
        port: process.env.PORT || 7070
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:admin@ds047762.mongolab.com:47762/codecompilerusers',
        port: process.env.PORT || 7070
    }
}