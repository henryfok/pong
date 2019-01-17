// window size
var gameWidth = 1280;
var gameHeight = 720;

// paddle size and move speed
var paddleWidth = 30;
var paddleHeight = 120;
var paddleSpeed = 16;

var paddlePlayer = {
	// default player1 paddle position data
	elem: document.querySelector('.paddle-player'),
	x: 0,
	y: gameHeight / 2 - paddleHeight / 2,
	width: paddleWidth,
	height: paddleHeight,
	speed: paddleSpeed,
	moveUp: false,
	moveDown: false,
	hasHit: false,
	charging: false,
	spikeCharge: 0
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
	moveDown: false,
	difficulty: 0.6,
	hasHit: false
};

function updatePaddlePOV() {
	var newPlayerPOV = scale(paddlePlayer.y, 0, (gameHeight - paddleHeight), -20, 120);
	var newEnemyPOV = scale(paddleEnemy.y, 0, (gameHeight - paddleHeight), -20, 120);
	paddlePlayer.elem.style.perspectiveOrigin = '200% ' + newPlayerPOV + '%';
	paddleEnemy.elem.style.perspectiveOrigin = '-100% ' + newEnemyPOV + '%';

}

function dischargeSpike() {
	paddlePlayer.spikeCharge = 0;
	document.querySelector('.spike-charge').style.transform = 'scaleX(' + paddlePlayer.spikeCharge + ')';
}