app.controller('circleCtrl', function($scope){
	$scope.circleLength = function() {
		
		var radius = parseFloat(document.getElementById("radiusOfCircle").value),
			circleLength = document.getElementById("circleLength"),
			L; //L = 2*PI*R

		if (isNaN(radius)) {
			circleLength.innerHTML = ("<strong class='text-danger'>Радиусът трябва да е число!</strong>");
		}
		else {
			if (radius <= 0) {
				circleLength.innerHTML = ("<strong class='text-danger'>Радиусът трябва да е положително число!</strong>");
			}
			else {
				pi = 3.14;
				L = 2*pi*radius;
				circleLength.innerHTML = (
					"Дължината на окръжност се намира по формулата L = 2*π*r </br>" +
					"Където π ≈ 3.14, а 'r' е радиусът на окръжността.</br>" +
					"След заместване с въведената стойност за радиуса получаваме: </br>" +
					"L = 2*π*r = 2*" + pi + "*" + radius + " = " + L);
			}
		}
	}
});