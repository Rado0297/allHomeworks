app.controller('UserDetailsCtrl', function($scope, $routeParams, UsersResource){


    $scope.users = UsersResource.query().get({id: $routeParams.id});


    //$scope.user = UsersResource.get({id: $routeParams.id});


    //$scope.user = (function(collection){
    //    collection.forEach(function(user){
    //        if(user._id === $routeParams.id){
    //            $scope.user = user;
    //        }
    //    });
    //});
});