var x=3;
var y=20;
var moveRigth=true;
var moveLeft=false;
var moveUp=false;
var moveDown=true;
var write = (function (){
		function write(){
			var ctx=document.getElementsByTagName("canvas")[0].getContext("2d");
			ctx.fillStyle="black";
			ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
			ctx.beginPath();
			ctx.strokeStyle="yellowgreen";
			ctx.lineWidth=10;
			ctx.arc(x,y,5, 0, 2 * Math.PI, false);
			ctx.stroke();
			if(x===ctx.canvas.width - 6){
				moveLeft=true;
				moveRigth=false;
			}
			else if(x===6){
				moveLeft=false;
				moveRigth=true;
			}
			if(y===ctx.canvas.height - 6){
				moveUp=true;
				moveDown=false;
			}
			else if(y===6){
				moveUp=false;
				moveDown=true;
			}
			if(moveUp){
				y--;
			}
			else if(moveDown){
				y++;
			}
			if(moveRigth){
				x++;
			}
			else if(moveLeft){
				x--;
			}
		}
		return write;
	}());
	var t1=new Timer(7);
	t1.subscribe(function (){write ();});
	t1.start();