var wormify = (function () {
    var gamecanvas = document.getElementById('snakeGame');
    var currentScores = document.getElementById('score');
    var hightScoreElement = document.getElementById('top10');
    var blockSize = 10;
    var width = gamecanvas.clientWidth;
    var hight = gamecanvas.clientHeight;
    var ctx = gamecanvas.getContext('2d');
    var applesNum = 3;
    var playerScore = 0;
    var displayTopScore = 10;
    var gameLoopControl;

    var startGame = function () {
        ctx.clearRect(0, 0, width, hight);
        playerScore = 0;
        var playerWorm = new Worm(6, 40, 20);
        var wormBody = playerWorm.getWormBody();
        updateTopScores();
        keyboardControlWorm(playerWorm);
        var gameElements = [];
        gameElements['worm'] = playerWorm;
        gameElements['apples'] = [];
        for (var i = 0; i < applesNum; i++) {
            gameElements['apples'].push(generateApple());
        }
        clearInterval(gameLoopControl);
        gameLoopControl = setInterval(function () {
            clearBoard();
            drawElements([playerWorm.head], 'green');
            drawElements(wormBody, 'black');
            drawElements(gameElements['apples'], 'red');
            playerWorm.move();
            detectCollision(gameElements);
            playerScore++;
            updateScore();
        }, 100);
    }

    var endGame = function () {
        clearInterval(gameLoopControl);
        var pName = prompt('You hit wall an you are dead! Your result is: ' + playerScore + '. Please enter yo name:');
        if (pName === null) {
            pName = "unknown";
        }
        localStorage.setItem(playerScore, pName);
        updateTopScores();
    }

    var updateScore = function () {
        currentScores.innerText = 'Current score: ' + playerScore;
    }

    var updateTopScores = function () {
        clearTopScores();
        var sortedScores = Object.keys(localStorage).sort(function (a, b) {
            return b - a;
        });

        for (var i = 0; i < displayTopScore; i++) {
            var currentScore = sortedScores[i];
            if (currentScore && currentScore !== undefined) {
                var scoreDiv = document.createElement('div');
                scoreDiv.innerText = localStorage[currentScore] + ' : ' + currentScore;
                hightScoreElement.appendChild(scoreDiv);
            }
        }
    }

    var clearTopScores = function () {
        while (hightScoreElement.firstChild) {
            hightScoreElement.removeChild(hightScoreElement.firstChild);
        }
    }

    var clearBoard = function () {
        ctx.clearRect(0, 0, width, hight);
    }

    var generateApple = function () {
        var appleXPosition = Math.round((Math.random() * width - blockSize) / blockSize) * blockSize;
        var appleYPosition = Math.round((Math.random() * hight - blockSize) / blockSize) * blockSize;
        return new gameBlock(appleXPosition, appleYPosition);
    }

    var gameBlock = function (xPosition, yPosition) {
        if (xPosition % blockSize !== 0 || yPosition % blockSize !== 0) {
            throw new Error("The block coordinates must be within the canvas grid!");
        }

        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    var Worm = function (startLength, startX, startY) {
        this.head = new gameBlock(startX, startY);
        wormBody = new Array(startLength - 1);
        for (var i = 0; i < startLength - 1; i++) {
            wormBody[i] = new gameBlock(startX - blockSize * (i + 1), startY);
        }

        this.getWormBody = function () {
            return wormBody;
        }

        this.direction = {
            x: 1,
            y: 0
        }

        this.move = function () {
            wormBody.splice(wormBody.length - 1, 1);
            wormBody.unshift(new gameBlock(this.head.xPosition, this.head.yPosition));
            this.head.xPosition += this.direction.x * blockSize;
            this.head.yPosition += this.direction.y * blockSize;
        }
    }

    var drawElements = function (elements, color) {
        ctx.fillStyle = color;
        for (var i = 0; i < elements.length; i++) {
            ctx.fillRect(elements[i].xPosition, elements[i].yPosition, blockSize, blockSize);
        }
    }

    var detectCollision = function (gameElements) {
        var wormHead = gameElements['worm'].head;
        var wormBody = gameElements['worm'].getWormBody();
        var apples = gameElements['apples'];
        var hitVerticalWall = (wormHead.xPosition < 0 || wormHead.xPosition > width);
        var hitHorizontalWall = (wormHead.yPosition < 0 || wormHead.yPosition > hight);
        if (hitVerticalWall || hitHorizontalWall) {
            endGame();
            return;
        }

        for (var i = 0; i < wormBody.length; i++) {
            if (wormHead.xPosition === wormBody[i].xPosition && wormHead.yPosition === wormBody[i].yPosition) {
                endGame();
                return;
            }
        }

        for (var i = 0; i < apples.length; i++) {
            if (apples[i].xPosition === wormHead.xPosition && apples[i].yPosition === wormHead.yPosition) {
                var newTailX = wormBody[wormBody.length - 1].xPosition * 2 - wormBody[wormBody.length - 2].xPosition;
                var newTailY = wormBody[wormBody.length - 1].yPosition * 2 - wormBody[wormBody.length - 2].yPosition;
                wormBody.push(new gameBlock(newTailX, newTailY));
                apples.splice(i, 1);
                apples.push(generateApple());
                playerScore += 20;
            }
        }
    }
//keyboard controls
    var keyboardControlWorm = function (worm) {
        document.onkeydown = function (event) {
            event = event || window.event;
            switch (event.keyCode) {
                //move left
                case 37:
                    if (worm.direction.x != 1 && worm.direction.y != 0) {
                        worm.direction.x = -1;
                        worm.direction.y = 0;
                    }
                    break;
                    //move up
                case 38:
                    if (worm.direction.x != 0 && worm.direction.y != 1) {
                        worm.direction.x = 0;
                        worm.direction.y = -1;
                    }
                    break;
                    //move right
                case 39:
                    if (worm.direction.x != -1 && worm.direction.y != 0) {
                        worm.direction.x = 1;
                        worm.direction.y = 0;
                    }
                    break;
                    //move down
                case 40:
                    if (worm.direction.x != 0 && worm.direction.y != -1) {
                        worm.direction.x = 0;
                        worm.direction.y = 1;
                    }
                    break;
            }
        }
    }

    return {
        startGame: startGame,
        updateTopScores: updateTopScores
    }
})();