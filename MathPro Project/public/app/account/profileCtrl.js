app.controller('ProfileCtrl', function($scope, $location, identity, auth, notifier){
    $scope.identity = identity;
    
    $scope.user = {
        firstName: identity.currentUser.firstName,
        lastName: identity.currentUser.lastName
    }

    $scope.update = function(user){
        auth.update(user).then(function(){
            $scope.firstName = user.firstName;
            $scope.lastName = user.lastName;
            $location.path('/');
            notifier.success('Промените са успешно направени!');
        });
    }
});