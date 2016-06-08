app.controller('QuestionsListCtrl', function($scope, QuestionsResource){
    $scope.questions = QuestionsResource.query();
});