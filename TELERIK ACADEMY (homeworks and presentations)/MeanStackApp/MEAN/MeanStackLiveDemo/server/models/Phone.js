var mongoose = require('mongoose');

var phonesSchema = mongoose.Schema({
    title: String,
    featured: Boolean,
    published: Date,
    tags: [String]
});

var Phone = mongoose.model('Phone', phonesSchema);

module.exports.seedInitialPhones = function(){
    Phone.find({}).exec(function(err, collection){
        if(err){
            console.log('Cannot find phones: ' + err);
            return;
        }


        if(collection.length === 0){
            Phone.create({title: 'Nokia 3310', featured: true, published: new Date('4/30/2012'), tags: ['featured', 'phone']});
            Phone.create({title: 'Nokia Lumia 900', featured: false, published: new Date('6/4/2013'), tags: ['smart', 'phone']});
            Phone.create({title: 'Nokia 3510', featured: true, published: new Date('4/30/2012'), tags: ['featured', 'phone']});
            Phone.create({title: 'Samsung Galaxy S5', featured: false, published: new Date('4/30/2014'), tags: ['smart', 'phone']});
            Phone.create({title: 'Nokia s dve fener4e', featured: true, published: new Date('4/30/2012'), tags: ['featured', 'phone']});
            Phone.create({title: 'Nokia Lumia 610', featured: false, published: new Date('4/4/2013'), tags: ['smart', 'phone']});
            Phone.create({title: 'Nokia Lumia 710', featured: false, published: new Date('5/4/2013'), tags: ['smart', 'phone']});
            Phone.create({title: 'Nokia 1208', featured: true, published: new Date('4/30/2012'), tags: ['featured', 'phone']});
            Phone.create({title: 'HTC One mini', featured: false, published: new Date('3/12/2014'), tags: ['smart', 'phone']});
        }
    });
};