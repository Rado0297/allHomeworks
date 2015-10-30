var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app){
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/users/:id', controllers.users.getUserById);

    app.get('/partials/:partialArea/:partialName', function(req, res){
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName);
    });


    //For pages,which find components of figures
    app.get('/partials/:partialArea/:partialName/:partialName1', function(req, res){
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName + '/' + req.params.partialName1);
    });



    app.get('/partials/:partialArea/:partialName/:partialName1/:partialName2', function(req, res){
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName + '/' + req.params.partialName1 + '/' + req.params.partialName2);
    });

    app.get('/partials/:partialArea/:partialName/:partialName1/:partialName2/:partialName3', function(req, res){
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName + '/' + req.params.partialName1 + '/' + req.params.partialName2 + '/' + req.params.partialName3);
    });
    //end of "For pages,which find components of figures"


    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/api/*', function(req, res){
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res){
        res.render('index', {currentUser: req.user});
    });
}