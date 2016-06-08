app.controller('smallRadiusInRightAngledTrCtrl', function($scope){
	var canvas = document.getElementById('smallRadiusRightAgngledTrDraw');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
	
// Stroked triangle
		ctx.beginPath();
		ctx.strokeStyle = "#ffffff";
		ctx.fillStyle = "#ffffff";
		//circle line
		ctx.arc(177,87,37,0,2*Math.PI);
		//center of circle
		ctx.fillRect(177,87,1,1);
		//small radius to hypotenuse
		ctx.moveTo(177,87);
		ctx.lineTo(177,126);
		ctx.strokeRect(170,117,7,7);
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px Arial";
		ctx.fillText("r", 185, 115);
		ctx.stroke();
		ctx.beginPath();
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px Arial";
	//side a tag
		ctx.fillText("a", 225, 75);
	//side b tag
		ctx.fillText("b", 95, 75);
	//side c tag
		ctx.fillText("c", 145, 150);
	//lines of triangle
		ctx.moveTo(45, 125);
		ctx.lineTo(190, 35);
		ctx.lineTo(245, 125);
		ctx.closePath();
		ctx.strokeStyle = "#ffffff"
		ctx.stroke();
	}

	$scope.smallRadiusInRightAngledTr = function() {
		var a = parseFloat(document.getElementById('str-a').value),
			b = parseFloat(document.getElementById('str-b').value),
			c = parseFloat(document.getElementById('str-c').value),
			smallRadius = document.getElementById("smallRadiusInRightAngledTr"),
			r;

		if (isNaN(a) || isNaN(b) || isNaN(c)) {
	        smallRadius.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
	    }
	    else {
	        if (a <= 0 || b <= 0 || c <= 0) {
	            smallRadius.innerHTML = ("<strong class='text-danger'>Страните трябва да са положителни числа !</strong>");
	        }
	        else if ((Math.pow(c, 2) - (Math.pow(a, 2) + Math.pow(b, 2))) != 0) {
	        	smallRadius.innerHTML = (
	                "<strong class='text-danger'>Въведените страни не са на правоъгълен триъгълник!</strong>");
	        }
	        else {
				r = (a + b - c)/2;
	            smallRadius.innerHTML = (
	                "Заместваме въведените стойности във формулата </br>" + "r = (a + b - c)/2</br>" +
	                "От тук следва,че радиусът на вписаната окръжност е:</br>" +
	                " r = (a + b - c)/2 = (" + a + " + " + b + " - " + c + ")/2 = " + r);   
	        }
	    }
	}
});