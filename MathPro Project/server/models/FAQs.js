//require mongoose module
var mongoose = require('mongoose');

//Make faq schema - all properties that faq's object has
var faqSchema = mongoose.Schema({
    question: String,
    answer: String
});

//declarate object FAQ,which use model of faq schema
var FAQ = mongoose.model('FAQ', faqSchema);

module.exports.seedInitialFAQs = function(){
    //checks is there any FAQs in the database
    FAQ.find({}).exec(function(err, collection){
        //if there is error with something throw error
        if(err){
            console.log('Cannot find FAQs: ' + err);
            return;
        }

        //if database is empty this make some example question
        if(collection.length === 0){
            var question;
            var answer;

            FAQ.create({question:'Каква е формулата за Питагорова теорема?', answer:'Формулата е c^2 = a^2 + b^2'});
            FAQ.create({question:'Какво е ъглополовяща?', answer:'Права, разделяща един ъгъл на два равни ъгъла, чийто сбор е равен на стойността на първоначалния ъгъл.'});
            FAQ.create({question:'Къде се намира центъра на описана окръжност около триъгълник?', answer:'Намира се на пресечната точка на симетралите.'});
        }
    });
};