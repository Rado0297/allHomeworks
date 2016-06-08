//get mongoose module and user model
var mongoose = require('mongoose'),
    user = require('../models/User'),
    faq = require('../models/FAQs'),
    question = require('../models/ForumQuestions');

//configure database connection
module.exports = function(config){
    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.on('error', function(err){
        console.log('Database error: ' + err);
    });

    db.once('open', function(err){
        if(err){
            console.log('Database could not be opend: ' + err);
            return;
        }

        console.log("Database up and running...");
    });

    user.seedInitialUsers();
    faq.seedInitialFAQs();
    question.seedInitialForumQuestions();
};
