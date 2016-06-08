//get usersController and exort it for use
var usersController = require('../controllers/usersController');
var faqsController = require('../controllers/faqsController');
var questionsController = require('../controllers/questionsController')

module.exports = {
    users: usersController,
    faqs: faqsController,
    questions: questionsController
}