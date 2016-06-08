app.controller('roundCtrl', function($scope){
	$scope.roundArea = function() {
		
		var radius = parseFloat(document.getElementById("radiusOfCircle").value),
			roundArea = document.getElementById("roundArea"),
			S; //L = PI*R^2

		if (isNaN(radius)) {
			roundArea.innerHTML = ("<strong class='text-danger'>Радиусът трябва да е число!</strong>");
		}
		else {
			if (radius <= 0) {
				roundArea.innerHTML = ("<strong class='text-danger'>Радиусът трябва да е положително число!</strong>");
			}
			else {
				pi = 3.14;
				S = pi*Math.pow(radius, 2);
				roundArea.innerHTML = (
					"Лицето на кръг се намира по формулата S = π*r² </br>" +
					"Където π ≈ 3.14, а 'r' е радиусът на кръга.</br>" +
					"След заместване с въведената стойност за радиуса получаваме: </br>" +
					"S = pi*r² = " + pi + "*" + radius + "² = " + pi + "*" + Math.pow(radius, 2) + " = " + S);
			}
		}
	}
});