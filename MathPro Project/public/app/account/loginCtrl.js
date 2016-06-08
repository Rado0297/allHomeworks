app.controller('LoginCtrl', function($scope, $location, notifier, identity, auth){
    $scope.identity = identity;

    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                notifier.success('Влизането успешно!');
            }
            else{
                notifier.error('Грешен никнейм или парола!');
            }
        });
    }

    $scope.logout = function(){
        auth.logout().then(function(){
            notifier.success('Излязохте успешно!');
            if($scope.user){
                $scope.user.username = '';
                $scope.user.password = '';
            }
            $location.path('/');
        });
    }
});