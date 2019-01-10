var gameMusic = document.getElementById("gameMusic");
// var wallHit = document.getElementById("wallHitSound");
// var paddleHit = document.getElementById("paddleHitSound");

// theme music
function playMusic() {
	gameMusic.load();
	gameMusic.volume = "0.5";
	gameMusic.loop = true;
	gameMusic.play();
}

function lowerVolMusic() {
	gameMusic.volume = "0.25";
}

function raiseVolMusic() {
	gameMusic.volume = "0.5";
}

// init ball
function playInitBallSound() {
	var sound = document.createElement("audio");
	sound.src = "snd/InitBallSound.ogg";
	sound.volume = "0.5";
	sound.addEventListener("ended", function() {
		document.removeChild(this);
	}, false);
	sound.play();
}

// wall hit
function playWallHitSound() {
	var sound = document.createElement("audio");
	sound.src = "snd/WallHitSound.ogg";
	sound.volume = "0.5";
	sound.addEventListener("ended", function() {
		document.removeChild(this);
	}, false);
	sound.play();
}

// paddle hit
function playPaddleHitSound() {
	var sound = document.createElement("audio");
	sound.src = "snd/PaddleHitSound.ogg";
	sound.volume = "0.5";
	sound.addEventListener("ended", function() {
		document.removeChild(this);
	}, false);
	sound.play();
}

// player score
function playPlayerScoreSound() {
	var sound = document.createElement("audio");
	sound.src = "snd/PlayerScoreSound.ogg";
	sound.volume = "0.5";
	sound.addEventListener("ended", function() {
		document.removeChild(this);
	}, false);
	sound.play();
}

// enemy score
function playEnemyScoreSound() {
	var sound = document.createElement("audio");
	sound.src = "snd/EnemyScoreSound.ogg";
	sound.volume = "0.5";
	sound.addEventListener("ended", function() {
		document.removeChild(this);
	}, false);
	sound.play();
}

// player win
function playPlayerWinSound() {
	var sound = document.createElement("audio");
	sound.src = "snd/PlayerWinSound.ogg";
	sound.volume = "0.5";
	sound.addEventListener("ended", function() {
		document.removeChild(this);
	}, false);
	sound.play();
}

// enemy win
function playEnemyWinSound() {
	var sound = document.createElement("audio");
	sound.src = "snd/EnemyWinSound.ogg";
	sound.volume = "0.5";
	sound.addEventListener("ended", function() {
		document.removeChild(this);
	}, false);
	sound.play();
}