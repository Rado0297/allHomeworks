app.controller('ProfileCtrl', function($scope, $location, identity, auth){
    $scope.user = {
        firstName: identity.currentUser.firstName,
        lastName: identity.currentUser.lastName
    }

    $scope.update = function(user){
        auth.update(user).then(function(){
            $scope.firstName = user.firstName;
            $scope.lastName = user.lastName;
            $location.path('/');
        });
    }
});