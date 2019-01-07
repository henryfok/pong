// window size
var gameWidth = 1280;
var	gameHeight = 720;

// paddle size and move speed
var paddleWidth = 60;
var	paddleHeight = 240;
var	paddleSpeed = 16;

var scoreMax = 5;

var paddlePlayer = {
	// default player1 paddle position data
	elem: document.querySelector('.paddle-player'),
	x: 0,
	y: gameHeight / 2 - paddleHeight / 2,
	width: paddleWidth,
	height: paddleHeight,
	speed: paddleSpeed,
	moveUp: false,
	moveDown: false
};

var paddleEnemy = {
	// default player2 paddle position data
	elem: document.querySelector('.paddle-enemy'),
	x: gameWidth - paddleWidth,
	y: gameHeight / 2 - paddleHeight / 2,
	width: paddleWidth,
	height: paddleHeight,
	speed: paddleSpeed,
	moveUp: false,
	moveDown: false
};

var scorePlayer = {
	elem: document.querySelector('.score-player'),
	value: 0
};

var scoreEnemy = {
	elem: document.querySelector('.score-enemy'),
	value: 0
};

function init () {
	loop();
}

function loop () {
	requestAnimationFrame(loop);
	update();
	render();
}

function update () {
	moveBall();
	containBall();
}

function render () {
	paddlePlayer.elem.style.transform =
		'translate(' + paddlePlayer.x + 'px, ' + paddlePlayer.y + 'px)';

	paddleEnemy.elem.style.transform =
		'translate(' + paddleEnemy.x + 'px, ' + paddleEnemy.y + 'px)';

	ball.elem.style.transform =
		'translate(' + ball.x + 'px, ' + ball.y + 'px)';

	scorePlayer.elem.innerHTML = scorePlayer.value;
	scoreEnemy.elem.innerHTML = scoreEnemy.value;
}

init();