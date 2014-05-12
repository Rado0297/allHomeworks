app.controller('PhoneListCtrl', function($scope, cachedPhones){
    $scope.phones = cachedPhones.query();
});