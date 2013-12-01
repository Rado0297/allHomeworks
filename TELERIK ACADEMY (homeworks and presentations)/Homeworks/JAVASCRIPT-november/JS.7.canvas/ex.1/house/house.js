function createHouse(){
	var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
	ctx.fillStyle = "rgb(151,91,91)";
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.lineWidth = 5;
//the wall
	ctx.fillRect(250, 250, 450, 330);
	ctx.strokeRect(253, 253, 450, 330);
//the roof
	ctx.beginPath();
	ctx.moveTo(251, 253);
	ctx.lineTo(465, 1);
	ctx.lineTo(704, 253);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
//windows
	ctx.beginPath();
	ctx.lineWidth = 50;
	ctx.moveTo(300, 300);
	ctx.lineTo(380, 300);
	ctx.moveTo(385, 300);
	ctx.lineTo(465, 300);
	ctx.moveTo(300, 355);
	ctx.lineTo(380, 355);
	ctx.moveTo(385, 355);
	ctx.lineTo(465, 355);
	ctx.stroke();
	ctx.moveTo(515, 300);
	ctx.lineTo(595, 300);
	ctx.moveTo(600, 300);
	ctx.lineTo(680, 300);
	ctx.moveTo(515, 355);
	ctx.lineTo(595, 355);
	ctx.moveTo(600, 355);
	ctx.lineTo(680, 355);
	ctx.stroke();
	ctx.moveTo(515, 445);
	ctx.lineTo(595, 445);
	ctx.moveTo(600, 445);
	ctx.lineTo(680, 445);
	ctx.moveTo(515, 500);
	ctx.lineTo(595, 500);
	ctx.moveTo(600, 500);
	ctx.lineTo(680, 500);
	ctx.stroke();
	ctx.closePath();
//chimney rectangle
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.fillRect(575, 70, 50, 135);
	ctx.strokeRect(575, 70, 50, 135);
	ctx.stroke();
	ctx.closePath();
//chimney ellipses (you must save before scale)
	ctx.lineWidth = 9;
	ctx.save();
//after scale command all figures will be scaled
	ctx.scale(0.95, 0.3);
	ctx.beginPath();
	ctx.arc(632, 230, 24, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.stroke();
	ctx.fillRect(585, 670, 80, 80);
	ctx.fill();
	ctx.closePath();
//Warning restore sizes before scale command
	ctx.restore();
//parts of the door
	//rectangle
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.strokeRect(325, 457, 124, 125);
	//the arc of the door
		ctx.save();
		ctx.scale(1, 0.6);
		ctx.beginPath();
		ctx.arc(387, 770, 62, 0, Math.PI, true);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	//line and two small circles at the door
		ctx.beginPath();
		ctx.moveTo(387, 423);
		ctx.lineTo(387, 580);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(367, 540, 7, 0, 2 * Math.PI, true);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.arc(407, 540, 7, 0, 2 * Math.PI, true);
		ctx.stroke();
}