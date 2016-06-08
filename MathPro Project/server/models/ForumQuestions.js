//require mongoose module
var mongoose = require('mongoose');

//Make faq schema - all properties that faq's object has
var questionSchema = mongoose.Schema({
    question: String,
    answer: String,
    author: String,
    data: String
});

//declarate object FAQ,which use model of faq schema
var forumQuestion = mongoose.model('forumQuestion', questionSchema);

module.exports.seedInitialForumQuestions = function(){
    //checks is there any FAQs in the database
    forumQuestion.find({}).exec(function(err, collection){
        //if there is error with something throw error
        if(err){
            console.log('Cannot find FAQs: ' + err);
            return;
        }

        //if database is empty this make some example question
        if(collection.length === 0){
            var question;
            var answer;

            forumQuestion.create({question:'Каква е формулата за Питагорова теорема?', answer:'Формулата е c^2 = a^2 + b^2'});
            forumQuestion.create({question:'Какво е ъглополовяща?', answer:'Права, разделяща един ъгъл на два равни ъгъла, чийто сбор е равен на стойността на първоначалния ъгъл.'});
            forumQuestion.create({question:'Къде се намира центъра на описана окръжност около триъгълник?', answer:'Намира се на пресечната точка на симетралите.'});
            forumQuestion.create({question:'Test 1', answer:'TEST 1'});
            forumQuestion.create({question:'Test 2', answer:'TEST 2'});
            forumQuestion.create({question:'Test 3', answer:'TEST 3'});
        }
    });
};