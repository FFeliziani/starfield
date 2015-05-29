// CONST
var STARNUM = 1000;
var WINDOW_WIDTH = window.outerWidth;
var WINDOW_HEIGHT = window.outerHeight;
var STARSIZE = 2;

// VAR
var starList = null;
var canvas = null;
var ctx = null;
var index = 0;
	
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
}

function draw()
{
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		ctx.fillStyle('rgb(255,255,255)');
		var star = starList[index];
		ctx.fillRect(star.x, star.y, STARSIZE, STARSIZE);
		index += 1;
		if (index = 1000) index = 0;
	}
}