app.controller('AddFAQsCtrl', function($scope, FAQsResource){
    $scope.faqs = FAQsResource.query();

    $scope.addFAQs = function(){
    	//Check if the function is called
    	console.log("AddFAQsCtrl - added question!");
    }

    $scope.deleteFAQ = function(){
    	//Check if the function is called
    	console.log("AddFAQsCtrl - deleted question!");
    }
});