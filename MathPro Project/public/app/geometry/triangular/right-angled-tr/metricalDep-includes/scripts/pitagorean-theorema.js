//caculate hypotenuse from two cathetus
function hypotenuse() {
	var strA = document.getElementById("katet-a").value,
        a = parseFloat(strA),
        strB = document.getElementById("katet-b").value,
        b = parseFloat(strB),
        hypotenuse = document.getElementById("hypotenuse"),
        cOnSecondDegree,
        isInt;

    if (isNaN(a) || isNaN(b)) {
        hypotenuse.innerHTML = ("<strong class='text-danger'>Катетите трябва да са числа !</strong>");
    }
    else {
        if (a <= 0 || b <= 0) {
            hypotenuse.innerHTML = ("<strong class='text-danger'>Катетите трябва да са положителни числа !</strong>");
        }
        else {
        	cOnSecondDegree = Math.pow(a, 2) + Math.pow(b, 2);
        	if (Math.sqrt(cOnSecondDegree) % 1 === 0) {
        		hypotenuse.innerHTML = (
                "Заместваме въведените стойности във формулата </br>" + "c² = a² + b².</br>" +
                "От тук следва,че хипотенузата на триъгълника е:</br>" +
                "c² = a² + b² = " + Math.pow(a, 2) + " + " + Math.pow(b, 2) + " = " + (a*a + b*b) + "</br>" +
                "След коренуване следва, че: c = " + Math.sqrt(cOnSecondDegree));
        	}
        	else {
        		hypotenuse.innerHTML = (
                "Заместваме въведените стойности във формулата </br>" + "c² = a² + b².</br>" +
                "От тук следва,че хипотенузата на триъгълника е:</br>" +
                "c² = a² + b² = " + Math.pow(a, 2) + " + " + Math.pow(b, 2) + " = " + (a*a + b*b) + "</br>" +
                "След коренуване следва, че: c = √" + cOnSecondDegree);
        	}
            
        }
    }

	var canvas = document.getElementById('metricalDepCanvas-hypotenuse');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
	
// Stroked triangle
		ctx.beginPath();
		ctx.fillStyle = "#ffffff";
		ctx.font = "20px Arial";
		ctx.fillText("90⁰",170,65);
	//side a tag
		ctx.font = "30px Arial";
		ctx.fillText("a", 225, 75);
	//side b tag
		ctx.font = "30px Arial";
		ctx.fillText("b", 95, 75);
	//side c tag
		ctx.font = "30px Arial";
		ctx.fillText("c", 145, 150);
	//lines of triangle
		ctx.moveTo(45, 125);
		ctx.lineTo(190, 35);
		ctx.lineTo(245, 125);
		ctx.closePath();
		ctx.strokeStyle = "#ffffff"
		ctx.stroke();
	}
}