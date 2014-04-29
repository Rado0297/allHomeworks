var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';

<<<<<<< HEAD
var port = process.env.PORT || 3030;
=======
var port = 3030;
>>>>>>> f14c05e9bff2b56e794a700d730ae4e66086354c

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');

app.use(bodyParser());

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: function(str, path){
            return stylus(str).set('filename', path);
        }
    }
));

app.get('/partials/:partialName', function(req, res){
    res.render('partials/' + req.params.partialName);
})

app.use(express.static(__dirname + '/public'));

<<<<<<< HEAD
if(env == 'development'){
    //for local database and development purpose
    mongoose.connect('mongodb://localhost/meanstackapp');
}
else{
    mongoose.connect('mongodb://admin:radoDeveloper0297@ds043997.mongolab.com:43997/meanstackapp');
}

=======
mongoose.connect('mongodb://localhost/meanstackapp');
>>>>>>> f14c05e9bff2b56e794a700d730ae4e66086354c
var db = mongoose.connection;

db.once('open', function(err){
    if(err){
        console.log('Database could not be opend: ' + err);
        return;
    }

    console.log("Database up and running...");
})

db.on('error', function(err){
    console.log('Database error: ' + err);
})


//for testing purpose
var messageSchema = mongoose.Schema({
   message: String
});

var Message = mongoose.model('Message', messageSchema);
var messageFromDatabase;

Message.remove({}).exec(function(err){
    if(err){
        console.log('Messages could not be cleared: ' + err);
        return;
    }

    Message.create({message: 'Hi from Mongoose!'})
        .then(function(model){
            messageFromDatabase = model.message;
        });
});


app.get('*', function(req, res){
    res.render('index', {message: messageFromDatabase});
})

app.listen(port);

console.log("Server is running on port: " + 3030);