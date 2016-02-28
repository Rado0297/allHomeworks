app.controller('MainCtrl', function($scope){
	$scope.sayHello = function() {
		$scope.greeting = 'Hello, Angular $scope test done!';
	};

	$scope.logInParse = function(){
		$scope.test = 'Test';
	}

});