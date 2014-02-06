(function () {
	'use strict';
	var canvasElement = document.getElementById("snake-canvas"),
		domHolderElement = document.getElementById("snake-holder"),
		startButton = document.getElementById("start-game-btn"),
		stopButton = document.getElementById("stop-game-btn"),
		rendererTypeRadios = document.getElementsByName("renderers[]"),
		canvasRenderer = renderers.getCanvas(canvasElement),
		domRenderer = renderers.getDom(domHolderElement),
		game = games.get(canvasRenderer);
	stopButton.disabled = true;

	document.getElementById("renderer-type-radios").addEventListener("click", function (ev) {
		var target = ev.target;
		if (target.value === "canvas") {
			game.changeRenderer(canvasRenderer);
		} else if (target.value === "dom") {
			game.changeRenderer(domRenderer);
		}
	});

	document.addEventListener("keydown", function (ev) {
		var keyCode = ev.keyCode;
		if (keyCode === 20 || keyCode === 32) {
			if (game.getState() === "running") {
				performGameStop();
			} else {
				performGameStart();
			}
		}
	});

	function performGameStart() {
		game.start();
		startButton.disabled = true;
		stopButton.disabled = false;
		for (var i = 0, len = rendererTypeRadios.length; i < len; i += 1) {
			rendererTypeRadios[i].disabled = true;
		}
	}

	function performGameStop() {
		game.stop();
		startButton.disabled = false;
		stopButton.disabled = true;
		for (var i = 0, len = rendererTypeRadios.length; i < len; i += 1) {
			rendererTypeRadios[i].disabled = false;
		}
	}

	startButton.addEventListener("click", function (ev) {
		performGameStart();
	});

	stopButton.addEventListener("click", function () {
		performGameStop();
	});
}());