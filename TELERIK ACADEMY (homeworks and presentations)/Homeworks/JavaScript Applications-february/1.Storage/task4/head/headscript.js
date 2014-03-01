function createHead(){
	var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
	ctx.fillStyle = "rgb(144,202,215)";
	ctx.strokeStyle = "rgb(34,84,95)";
	ctx.lineWidth = 5;
		// big circle
		ctx.beginPath();
		ctx.save();
		ctx.scale(1, 0.9);
		ctx.arc(300, 300, 110, 0, 2 * Math.PI, true);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
		//warning you must restore sizes before scale command
		ctx.restore();
		//parts of face
		//mouth
			ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 6;
			ctx.setTransform(1, 0.2, 0, 0.4, 0, 0);
			ctx.arc(270, 650, 40, 0, 2 * Math.PI, true);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		//nose
			ctx.beginPath();
			ctx.lineWidth = 4;
			ctx.moveTo(295,270);
			ctx.lineTo(270, 270);
			ctx.lineTo(295, 220);
			ctx.stroke();
			ctx.closePath();
		//eyes and their parts
			ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 5;
			ctx.scale(1, 0.6);
			ctx.arc(240, 400, 20, 0, 2 * Math.PI, true);
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.save();
			ctx.arc(330, 400, 20, 0, 2 * Math.PI, true);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
			ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 5;
			ctx.fillStyle = "rgb(34,84,95)";
			ctx.scale(0.3, 1);
			ctx.arc(1070, 400, 16, 0, 2 * Math.PI, true);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.save();
			ctx.arc(770, 400, 16, 0, 2 * Math.PI, true);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		// hat and her parts      
			ctx.fillStyle = "rgb(57,102,147)";
			ctx.strokeStyle = "rgb(0,0,0)";
			ctx.beginPath();
			ctx.lineWidth = 30;
			ctx.scale(1, 0.1);
			ctx.arc(1000, 2900, 400, 0, 2 * Math.PI, true);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		//rectangle
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = "rgb(57,102,147)";
			ctx.strokeStyle = "rgb(0,0,0)";
			ctx.lineWidth = 5;
			ctx.fillRect(245, 95, 110, 180);
			ctx.strokeRect(245, 95, 110, 180);
			ctx.closePath();
			ctx.restore();
		//other parts of head
			ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 15;
			ctx.fillStyle = "rgb(57,102,147)";
			ctx.strokeStyle = "rgb(0,0,0)";
			ctx.scale(1, 0.4);
			ctx.arc(300, 250, 51, 0, 2 * Math.PI, true);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.save();
			ctx.arc(300, 710, 52, 0, 2 * Math.PI, true);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			ctx.restore();
			ctx.beginPath();
			ctx.save();
			ctx.arc(300, 691, 52, 0, 2 * Math.PI, true);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
}