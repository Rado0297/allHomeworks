app.controller('FAQsListCtrl', function($scope, FAQsResource){
    $scope.faqs = FAQsResource.query();
});