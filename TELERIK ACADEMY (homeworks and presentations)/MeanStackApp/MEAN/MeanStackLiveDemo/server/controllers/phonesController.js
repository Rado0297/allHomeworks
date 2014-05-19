var Phone = require('mongoose').model('Phone');

module.exports = {
    getAllPhones: function (req, res, next) {
        Phone.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Phones could not be loaded: ' + err);
            }

            res.send(collection);
        });
    },
    getPhoneById: function(req, res, next){
        Phone.findOne({_id: req.params.id}).exec(function(err, phone){
            if(err){
                console.log('Phone details could not be loaded: ' + err);
            }

            res.send(phone);
        });
    }
};