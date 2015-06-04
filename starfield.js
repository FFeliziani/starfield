// CONST
var STARNUM = 1000;
var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;
var STARSIZE = 2;
var SPEED = 1;
var RATIO = WINDOW_HEIGHT / WINDOW_WIDTH;
var FUZZYNESS = 10;

// VAR
var starList = null;
var canvas = null;
var ctx = null;
var drawIndex = 0;
var updateIndex = 0;
	
function init() {
	// IMPOSTO IL CREATO
	canvas = document.getElementById('mainCanvas');
	$(canvas).prop("width", WINDOW_WIDTH);
	$(canvas).prop("height", WINDOW_HEIGHT);
	starList = new Array(STARNUM);
	if(canvas.getContext) {
		ctx = canvas.getContext('2d');
		// CREO LE STELLE
		var i = 0;
		while (i < STARNUM)
		{
			var star = {
				x: Math.random() *  WINDOW_WIDTH,
				y: Math.random() * WINDOW_HEIGHT
			};
			starList[i] = star;
			i += 1;
		}
		
		// CREO IL CIELO
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_WIDTH);
		setInterval(draw, 30);
		setInterval(update, 30);
	}
}

function update() {
	var center = { x: WINDOW_WIDTH / 2, y: WINDOW_HEIGHT / 2};
	while(updateIndex < STARNUM)
	{
		var star = starList[updateIndex];
		moveStar(star, center);
		restoreStar(star, center);
		updateIndex += 1;
	}
	updateIndex = 0;
}

function restoreStar(star, center)
{
	var fuzz = {
		x: (Math.random() * FUZZYNESS) - FUZZYNESS / 2,
		y: (Math.random() * FUZZYNESS) - FUZZYNESS / 2
	}
	if(star.x > WINDOW_WIDTH || star.x < 0 || star.y > WINDOW_HEIGHT || star.y < 0) {
		star.x = center.x + fuzz.x;
		star.y = center.y + fuzz.y;
	} 
}

function moveStar(star, center)
{
	// ALLONTANO LA STELLA DAL CENTRO
	// Cambio le coordinate col centro
	var x = star.x - center.x;
	var y = star.y - center.y;
	// Calcolo la lunghezza del vettore attuale
	var length = Math.sqrt(x * x + y * y);
	// Normalizzo il vettore
	var nx = x / length;
	var ny = y / length;
	// Aggiungo la velocità e riprendo il seno e coseno
	star.x += SPEED * nx;
	star.y += SPEED * ny;
}

function draw()
{	
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_WIDTH);
		ctx.fillStyle = 'rgb(255,255,255)';
		while(drawIndex < STARNUM)
		{
			var star = starList[drawIndex];
			ctx.fillRect(star.x, star.y, STARSIZE, STARSIZE);
			drawIndex += 1;
		}
		drawIndex = 0;
	}
}