// window size
var gameWidth = 1280;
var gameHeight = 720;

// ball size and move speed
var ballWidth = 60;
var ballHeight = 60;
var ballSpeedStart = 16;
var ballSpeed = ballSpeedStart;

var ball = {
	// starting ball position and speed
	// vx : horizontal velocity
	// vy : vertical velocity
	elem: document.querySelector('.ball'),
	x: gameWidth / 2 - ballWidth / 2,
	y: gameHeight / 2 - ballHeight / 2,
	vx: ballSpeed,
	vy: ballSpeed,
	width: ballWidth,
	height: ballHeight
};

function moveBall() {
	// move ball location diagonally
	ball.x += ball.vx;
	ball.y += ball.vy;
}

function containBall() {
	if (ball.y <= 0) {
		// top wall of the ball hit the top border, reverse vertical velocity (down)
		ball.y = 0;
		ball.vy = -ball.vy;
	} else if (ball.y + ball.height >= gameHeight) {
		// bottom wall of the ball hit the bottom border, reverse vertical velocity (up)
		ball.y = gameHeight - ball.height;
		ball.vy = -ball.vy;
	}

	if (ball.x <= 0) {
		// left wall of the ball hit the left border, reverse horizontal velocity (right)
		scoreAddOne(scoreEnemy);
		// ball.ballSpeed += 1;
		resetBall();
		// ball.x = 0;
		// ball.vx = -ball.vx;
	} else if (ball.x + ball.width >= gameWidth) {
		// right wall of the ball hit the right border, reverse horizontal velocity (left)
		scoreAddOne(scorePlayer);
		// ball.ballSpeed += 1;
		resetBall();
		// ball.x = gameWidth - ball.width;
		// ball.vx = -ball.vx;
	}
}

function checkCollisions() {
	if (aabbCollisionDetect(ball, paddlePlayer)) {
		ball.x = paddlePlayer.x + paddlePlayer.width;
		ball.vx = -ball.vx;
	}

	if (aabbCollisionDetect(ball, paddleEnemy)) {
		ball.x = paddleEnemy.x - ball.width;
		ball.vx = -ball.vx;
	}
}

function resetBall() {
	ball.x = gameWidth / 2 - ballWidth / 2;
	ball.y = gameHeight / 2 - ballHeight / 2;
	ball.vx = 0;
	ball.vy = 0;
	setTimeout(function() {
		ball.vx = ballSpeed;
		ball.vy = ballSpeed;
	}, 1000);
}