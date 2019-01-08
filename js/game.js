// paddle size and move speed
var paddleWidth = 60;
var paddleHeight = 240;
var paddleSpeed = 16;

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

function addEventListeners() {
	window.addEventListener('keydown', function(keycode) {
		if (keycode.code === 'ArrowUp' || keycode.code === 'KeyW') {
			paddlePlayer.moveUp = true;
			// console.log('up');
		}
		if (keycode.code === 'ArrowDown' || keycode.code === 'KeyS') {
			paddlePlayer.moveDown = true;
			// console.log('down');
		}
	});

	window.addEventListener('keyup', function(keycode) {
		if (keycode.code === 'ArrowUp' || keycode.code === 'KeyW') { paddlePlayer.moveUp = false; }
		if (keycode.code === 'ArrowDown' || keycode.code === 'KeyS') { paddlePlayer.moveDown = false; }
	});
}

function movePlayer() {
	if (paddlePlayer.moveUp) {
		paddlePlayer.y -= paddlePlayer.speed;
	} else if (paddlePlayer.moveDown) {
		paddlePlayer.y += paddlePlayer.speed;
	}
}

function moveEnemy() {
	paddleEnemy.moveUp = false;
	paddleEnemy.moveDown = false;
	if (ball.y + ballHeight < paddleEnemy.y + paddleEnemy.height / 2) {
		paddleEnemy.moveUp = true;
	} else if (ball.y > paddleEnemy.y + paddleEnemy.height / 2) {
		paddleEnemy.moveDown = true;
	}
	
	if (paddleEnemy.moveUp) {
		paddleEnemy.y -= paddleEnemy.speed;
	} else if (paddleEnemy.moveDown) {
		paddleEnemy.y += paddleEnemy.speed;
	}
}

function containPaddles() {
	// top
	paddlePlayer.y = Math.max(0, paddlePlayer.y);
	// bottom
	paddlePlayer.y = Math.min(gameHeight - paddlePlayer.height, paddlePlayer.y);

	paddleEnemy.y = Math.max(0, paddleEnemy.y);
	paddleEnemy.y = Math.min(gameHeight - paddleEnemy.height, paddleEnemy.y);
}

var scorePlayer = {
	elem: document.querySelector('.score-player'),
	value: 0
};

var scoreEnemy = {
	elem: document.querySelector('.score-enemy'),
	value: 0
};

function init () {
	addEventListeners();
	loop();
}

function loop () {
	requestAnimationFrame(loop);
	update();
	render();
}

function update () {
	moveBall();
	movePlayer();
	moveEnemy();
	containBall();
	containPaddles();
	checkCollisions();
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