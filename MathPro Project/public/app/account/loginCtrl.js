app.controller('LoginCtrl', function($scope, $location, notifier, identity, auth){
    $scope.identity = identity;

    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                notifier.success('Successful login!');
            }
            else{
                notifier.error('Username/password is not valid');
            }
        });
    }

    $scope.logout = function(){
        auth.logout().then(function(){
            notifier.success('Successful logout');
            if($scope.user){
                $scope.user.username = '';
                $scope.user.password = '';
            }
            $location.path('/');
        });
    }

    $scope.parse = function(user){
        //log in user
        Parse.User.logIn("admin", "admin", {
          success: function(user) {
            // Do stuff after successful login.
            var loggedUser = true;

            console.log(user + " is now logged in !");
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            console.log(error);
          }
        });
    }
});