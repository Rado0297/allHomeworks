app.controller('PhoneDetailsCtrl', function($scope, $routeParams, cachedPhones){
    $scope.phone = cachedPhones.query().$promise.then(function(collection){
        collection.forEach(function(phone){
            if(phone._id === $routeParams.id){
                $scope.phone = phone;
            }
        });
    });
});