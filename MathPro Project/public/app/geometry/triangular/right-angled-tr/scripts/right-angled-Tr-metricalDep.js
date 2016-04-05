function metricalDepDraw() {
	var canvas = document.getElementById('metricalDepCanvas');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
	
// Stroked triangle
		ctx.beginPath();
	//side a tag
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px Arial";
		ctx.fillText("a", 225, 75);
	//side b tag
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px Arial";
		ctx.fillText("b", 95, 75);
	//side c tag
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px Arial";
		ctx.fillText("c", 145, 150);
	//height tag - h
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px Arial";
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

/*	console.log(window.screen.availHeight);
	console.log(window.screen.availWidth);

	var metricalDepCanvasTest = document.getElementById("metricalDepCanvas");

	metricalDepCanvasTest.style.width = window.screen.availWidth;
	metricalDepCanvasTest.style.height = window.screen.availHeight;*/
}
