// CONST
var STARNUM = 1000;
var WINDOW_WIDTH = window.outerWidth;
var WINDOW_HEIGHT = window.outerHeight;
var STARSIZE = 2;
var SPEED = 1;
var RATIO = WINDOW_HEIGHT / WINDOW_WIDTH;

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
	
	// CREO LE STELLE
	var i = 0;
	while (i < STARNUM)
	{
		var star = {
			x: Math.random() *  WINDOW_WIDTH,
			y: Math.random() * WINDOW_HEIGHT
		}
		starList[i] = star;
		i += 1;
	}
	
	// CREO IL CIELO
	ctx.fillStyle('rgb(0,0,0)');
	ctx.fillRect(0, 0, canvas.style.width, canvas.style.height);
	setTimeout(draw(), 30);
	setTimeout(update(), 30);
}

function update() {
	var star = starList[updateIndex];
	var center = {x: WINDOW_WIDTH / 2, y: WINDOW_HEIGHT / 2};
	// ALLONTANO LA STELLA DAL CENTRO
	if(star.x < center.x) star.x -= SPEED; else star.x += SPEED;
	if(star.y < center.y) star.y -= SPEED * RATIO; else star.y += SPEED * RATIO;
	updateIndex += 1;
	if (updateIndex == 1000) updateIndex = 0;
}

function draw()
{
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		ctx.fillStyle('rgb(255,255,255)');
		var star = starList[drawIndex];
		ctx.fillRect(star.x, star.y, STARSIZE, STARSIZE);
		drawIndex += 1;
		if (drawIndex = 1000) drawIndex = 0;
	}
}
