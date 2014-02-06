/// <reference path="_reference.js" />

var renderers = (function () {

	var headDomElement = document.createElement("div");
	headDomElement.style.backgroundColor = "black";
	headDomElement.style.border = "1px solid black";
	headDomElement.style.position = "absolute";

	var partDomElement = document.createElement("div");
	partDomElement.style.backgroundColor = "red";
	partDomElement.style.border = "1px solid black";
	partDomElement.style.position = "absolute";

	var drawSnake = function (canvas, snake) {
		for (var i = 0; i < snake.parts.length; i++) {
			drawSnakePart(canvas, snake.parts[i]);
		}
	};

	var drawSnakePart = function (canvas, part) {
		var ctx = canvas.getContext("2d");
		if (part instanceof snakes.HeadSnakePartType) {
			ctx.fillStyle = "black";
			ctx.strokeStyle = "black";
		} else if (part instanceof snakes.SnakePartType) {
			ctx.fillStyle = "orange";
			ctx.strokeStyle = "black";
		}
		var position = part.getPosition();
		ctx.fillRect(position.x, position.y, part.size, part.size);
		ctx.strokeRect(position.x, position.y, part.size, part.size);
	}
	var drawFood = function (canvas, food) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "green";
		var position = food.getPosition();
		ctx.fillRect(position.x, position.y, food.size, food.size);
		ctx.strokeStyle = "black";
		ctx.strokeRect(position.x, position.y, food.size, food.size);
	};
	var drawWall = function (canvas, wall) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "black";
		var position = wall.getPosition();
		ctx.fillRect(position.x, position.y, wall.size, wall.size);
		ctx.strokeStyle = "black";
		ctx.strokeRect(position.x, position.y, part.size, part.size);
	};

	function CanvasRenderer(selector) {
		if (selector instanceof HTMLCanvasElement) {
			this.canvas = selector;
		} else if (typeof selector === "String" ||
			typeof selector === "string") {
			this.canvas = document.querySelector(selector);
		}
	}

	CanvasRenderer.prototype = {
		draw: function (obj) {
			if (obj instanceof snakes.SnakeType) {
				drawSnake(this.canvas, obj);
			} else if (obj instanceof snakes.SnakePartType) {
				drawSnakePart(this.canvas, obj);
			} else if (obj instanceof snakes.FoodType) {
				drawFood(this.canvas, obj);
			} else if (obj instanceof snakes.WallType) {
				drawWall(this.canvas, obj);
			}
		},
		clear: function () {
			var ctx = this.canvas.getContext("2d");
			var w = this.canvas.width;
			var h = this.canvas.height;
			ctx.clearRect(0, 0, w, h);
		},
		getDimensions: function () {
			return {
				minWidth: 0,
				maxWidth: this.canvas.width,
				minHeight: 0,
				maxHeight: this.canvas.height
			};
		}
	};

	function DomRenderer(selector) {
		if (selector instanceof HTMLElement) {
			this.holder = selector;
		} else if (typeof selector === "String" ||
			typeof selector === "string") {
			this.holder = document.querySelector(selector);
		}
		this.holder.style.position = "relative";
		this.clear();
	}

	DomRenderer.prototype = {
		draw: function (gameObj) {
			if (gameObj instanceof snakes.SnakeType) {
				this.drawSnake(gameObj);
			} else if (gameObj instanceof snakes.HeadSnakePartType) {
				this.drawHeadSnakePart(gameObj);
			} else if (gameObj instanceof snakes.SnakePartType) {
				this.drawSnakePart(gameObj);
			}
		},
		drawSnake: function (snake) {
			debugger;
			for (var i = 0; i < snake.parts.length; i += 1) {
				this.draw(snake.parts[i]);
			}
		},
		drawHeadSnakePart: function (headPart) {
			var headPartElement = headDomElement.cloneNode(true),
				headPosition = headPart.getPosition();
			headPartElement.style.width = headPart.size;
			headPartElement.style.height = headPart.size;
			headPartElement.style.left = headPosition.x;
			headPartElement.style.top = headPosition.y;
			this.holder.appendChild(headPartElement);
		},
		drawSnakePart: function (part) {
			var partElement = partDomElement.cloneNode(true),
				position = part.getPosition();
			partElement.style.width = part.size + "px";
			partElement.style.height = part.size + "px";
			partElement.style.left = position.x + "px";
			partElement.style.top = position.y + "px";
			this.holder.appendChild(partElement);
		},
		clear: function () {
			while (this.holder.firstChild) {
				this.holder.removeChild(this.holder.firstChild);
			}
		},
		getDimensions: function () {
			var computedStyle = window.getComputedStyle(this.holder);
			return {
				minWidth: 0,
				maxWidth: parseInt(computedStyle.width),
				minHeight: 0,
				maxHeight: parseInt(computedStyle.height)
			};
		}
	};

	return {
		getCanvas: function (selector) {
			return new CanvasRenderer(selector);
		},
		getDom: function (selector) {
			return new DomRenderer(selector);
		}
	};
}());