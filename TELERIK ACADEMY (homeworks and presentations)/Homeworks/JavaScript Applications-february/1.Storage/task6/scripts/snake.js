var SnakeFy = (function () {
    var gamecanvas = document.getElementById('snakeGame');
    var currentScores = document.getElementById('score');
    var hightScoreElement = document.getElementById('top10');
    var blockSize = 10;
    var width = gamecanvas.clientWidth;
    var hight = gamecanvas.clientHeight;
    var ctx = gamecanvas.getContext('2d');
    var applesNum = 5;
    var playerScore = 0;
    var numberOfTopResults = 10;
    var forGamePlay;

    var startGame = function () {
        ctx.clearRect(0, 0, width, hight);
        playerScore = 0;
        var snakePlayer = new Snake(6, 40, 20);
        var snakeBody = snakePlayer.getSnakeBody();
        updateTopScores();
        snakeControlSystem(snakePlayer);
        var gameElements = [];
        gameElements['snake'] = snakePlayer;
        gameElements['apples'] = [];
        for (var i = 0; i < applesNum; i++) {
            gameElements['apples'].push(generateApple());
        }
        clearInterval(forGamePlay);
        forGamePlay = setInterval(function () {
            clearBoard();
            drawElements([snakePlayer.head], 'green');
            drawElements(snakeBody, 'black');
            drawElements(gameElements['apples'], 'red');
            snakePlayer.move();
            detectCollision(gameElements);
            playerScore++;
            updateScore();
        }, 100);
    }

    var endGame = function () {
        clearInterval(forGamePlay);
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

        for (var i = 0; i < numberOfTopResults; i++) {
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

    var Snake = function (startLength, startX, startY) {
        this.head = new gameBlock(startX, startY);
        snakeBody = new Array(startLength - 1);
        for (var i = 0; i < startLength - 1; i++) {
            snakeBody[i] = new gameBlock(startX - blockSize * (i + 1), startY);
        }

        this.getSnakeBody = function () {
            return snakeBody;
        }

        this.direction = {
            x: 1,
            y: 0
        }

        this.move = function () {
            snakeBody.splice(snakeBody.length - 1, 1);
            snakeBody.unshift(new gameBlock(this.head.xPosition, this.head.yPosition));
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
        var snakeHead = gameElements['snake'].head;
        var snakeBody = gameElements['snake'].getSnakeBody();
        var apples = gameElements['apples'];
        var hitVerticalWall = (snakeHead.xPosition < 0 || snakeHead.xPosition > width);
        var hitHorizontalWall = (snakeHead.yPosition < 0 || snakeHead.yPosition > hight);
        if (hitVerticalWall || hitHorizontalWall) {
            endGame();
            return;
        }

        for (var i = 0; i < snakeBody.length; i++) {
            if (snakeHead.xPosition === snakeBody[i].xPosition && snakeHead.yPosition === snakeBody[i].yPosition) {
                endGame();
                return;
            }
        }

        for (var i = 0; i < apples.length; i++) {
            if (apples[i].xPosition === snakeHead.xPosition && apples[i].yPosition === snakeHead.yPosition) {
                var newTailX = snakeBody[snakeBody.length - 1].xPosition * 2 - snakeBody[snakeBody.length - 2].xPosition;
                var newTailY = snakeBody[snakeBody.length - 1].yPosition * 2 - snakeBody[snakeBody.length - 2].yPosition;
                snakeBody.push(new gameBlock(newTailX, newTailY));
                apples.splice(i, 1);
                apples.push(generateApple());
                playerScore += 20;
            }
        }
    }
//keyboard controls
    var snakeControlSystem = function (snake) {   
        document.onkeydown = function (event) {
            event = event || window.event;
            switch (event.keyCode) {
                //move left
                case 37:
                    if (snake.direction.x != 1 && snake.direction.y != 0) {
                        snake.direction.x = -1;
                        snake.direction.y = 0;
                    }
                    break;
                    //move up
                case 38:
                    if (snake.direction.x != 0 && snake.direction.y != 1) {
                        snake.direction.x = 0;
                        snake.direction.y = -1;
                    }
                    break;
                    //move right
                case 39:
                    if (snake.direction.x != -1 && snake.direction.y != 0) {
                        snake.direction.x = 1;
                        snake.direction.y = 0;
                    }
                    break;
                    //move down
                case 40:
                    if (snake.direction.x != 0 && snake.direction.y != -1) {
                        snake.direction.x = 0;
                        snake.direction.y = 1;
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