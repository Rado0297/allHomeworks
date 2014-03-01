function createBike(){
	var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
	ctx.fillStyle = "rgb(144,202,215)";
	ctx.strokeStyle = "rgb(51,125,143)";
	ctx.lineWidth = 5;
//Two tires
	ctx.beginPath();
	ctx.arc(191, 340, 90, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(540, 340, 90, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.stroke();
//Кръгът за педалите
	ctx.beginPath();
	ctx.arc(350, 340, 25, 0, 2 * Math.PI, false);
	ctx.stroke();
//frame
	ctx.moveTo(330, 320);
	ctx.lineTo(310, 300);
	ctx.moveTo(370, 360);
	ctx.lineTo(390, 380);
	ctx.stroke();
//Sticks
	ctx.moveTo(540, 340);
	ctx.lineTo(510, 110);
	ctx.lineTo(580, 50);
	ctx.moveTo(510, 110);
	ctx.lineTo(420, 130);
	ctx.stroke();
// four lines for making frame
	ctx.moveTo(350, 340);
	ctx.lineTo(191, 340);
	ctx.lineTo(305, 210);
	ctx.lineTo(520, 210);
	ctx.lineTo(350, 340);
	ctx.lineTo(275, 150);
	ctx.moveTo(315, 150);
	ctx.lineTo(235, 150);
	ctx.stroke(); 
}