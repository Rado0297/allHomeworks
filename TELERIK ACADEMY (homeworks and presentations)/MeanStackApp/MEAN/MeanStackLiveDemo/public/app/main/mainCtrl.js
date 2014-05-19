app.controller('MainCtrl', function($scope, cachedPhones){
    $scope.phones = cachedPhones.query();
});