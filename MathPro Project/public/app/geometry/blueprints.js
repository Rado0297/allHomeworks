app.controller('BlueprintsCtrl', function($scope){
	$scope.hideBlueprint = function() {
		document.getElementById("blueprints").style.display = "none";

		document.getElementById("showBlueprint").style.display = "block";		
	}

	//shows draft of trinagule for perimeter
	$scope.perimeterDraft = function () {
		document.getElementById("blueprints").style.display = "block";

		document.getElementById("showBlueprint").style.display = "none";

		var canvas = document.getElementById('canvas');
		if (canvas.getContext){
			var context = canvas.getContext('2d');

			context.beginPath();

			context.fillStyle = "#ffffff";
			context.font = "30px Arial";
			context.fillText("a", 170, 90);

			context.fillStyle = "#ffffff";
			context.font = "30px Arial";
			context.fillText("b", 80, 80);

			context.fillStyle = "#ffffff";
			context.font = "30px Arial";
			context.fillText("c", 110, 150);
			
			context.moveTo(45,125);
			context.lineTo(150,45);
			context.lineTo(170,125);
			context.closePath();
			context.strokeStyle = "#ffffff";
			context.stroke();
		}

	}
});