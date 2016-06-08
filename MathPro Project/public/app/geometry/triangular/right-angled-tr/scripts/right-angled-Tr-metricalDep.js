function metricalDep1() {
	var strA = document.getElementById("str-a").value,
        a = parseFloat(strA),
        strB = document.getElementById("str-b").value,
        b = parseFloat(strB),
        strC = document.getElementById("str-c").value,
        c = parseFloat(strC),
        //get paragraph, which is for solution of h*c=a*b
        metricalDep1 = document.getElementById("metricalDep1"),
        height;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        metricalDep1.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
    }
    else {
        if (a <= 0 || b <= 0 || c <= 0) {
            metricalDep1.innerHTML = ("<strong class='text-danger'>Страните трябва да са положителни числа !</strong>");
        }
        else if ((Math.pow(c, 2) - (Math.pow(a, 2) + Math.pow(b, 2))) != 0) {
        	metricalDep1.innerHTML = (
                "<strong class='text-danger'>Въведените страни не са на правоъгълен триъгълник!</strong>");
        	
        	var canvas = document.getElementById('metricalDepCanvas');
			if (canvas.getContext){
				var ctx = canvas.getContext('2d');
        		ctx.clearRect(0, 0, canvas.width, canvas.height);
        	}
        }
        else {
            var canvas = document.getElementById('metricalDepCanvas');
			if (canvas.getContext){
				var ctx = canvas.getContext('2d');
			
		// Stroked triangle
				ctx.beginPath();
				ctx.fillStyle = "#ffffff";
				ctx.font = "30px Arial";
			//side a tag
				ctx.fillText("a", 225, 75);
			//side b tag
				ctx.fillText("b", 95, 75);
			//side c tag
				ctx.fillText("c", 145, 150);
			//height tag - h
				ctx.fillText("h", 165, 95);
			//lines of triangle
				ctx.moveTo(45, 125);
				ctx.lineTo(190, 35);
				ctx.lineTo(245, 125);
				ctx.closePath();
			//draw height to hypotenuse of triangular
				ctx.moveTo(190, 35);
				ctx.lineTo(190, 125);
				ctx.strokeStyle = "#ffffff"
				ctx.stroke();
			}
            height = (a * b) / c;
            metricalDep1.innerHTML = (
                "Заместваме въведените стойности във формулата </br>" + "h*c = a*b.</br>" +
                "От тук следва,че височината на триъгълника е:</br>" +
                " h=(a*b)/c= (" + a + "*" + b + ")/" + c + " = " + height);   
        }
    }

/*	console.log(window.screen.availHeight);
	console.log(window.screen.availWidth);

	var metricalDepCanvasTest = document.getElementById("metricalDepCanvas");

	metricalDepCanvasTest.style.width = window.screen.availWidth;
	metricalDepCanvasTest.style.height = window.screen.availHeight;*/
}
