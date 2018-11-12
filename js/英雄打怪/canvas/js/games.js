//画布
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//准备背景图片
var bgReady = false; //用来标识图片是否加载成功
var bgImage = new Image();
bgImage.onload = function (){
	bgReady = true;
};
bgImage.src = "img/background.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
}
heroImage.src = "img/hero.png";

var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
}
monsterImage.src = "img/monster.png";

//游戏对象
var hero = {
	speed:256, //每秒移动的像素
	x:0,
	y:0
};
var monster = {
	x:0,
	y:0
};
var monstersCaught = 0;

//处理用户输入
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
},false);

addEventListener("keyup", function (e){
	delete keysDown[e.keyCode];
},false);

//开始游戏
//当用户抓住一只怪物时开始新游戏
var reset = function () {
	hero.x = canvas.width/2;
	hero.y = canvas.height/2;
	
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

//更新对象
//更新对象属性
var update = function (modifier) {
	if (38 in keysDown) { //38 代表↑
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) {
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) {
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) {
		hero.x += hero.speed * modifier;;
	}
	
	if (
		hero.x <= (monster.x + 32) &&
		monster.x <= (hero.x + 32) &&
		hero.y <= (monster.y + 32) &&
		monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}
}
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage,0,0);
	}
	if (heroReady) {
		ctx.drawImage(heroImage,hero.x,hero.y);
	}
	if (monsterReady) {
		ctx.drawImage(monsterImage,monster.x,monster.y);
	}
	
	ctx.fillStyle = "rgb(250,250,250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monsterrs caught: " + monstersCaught, 32, 32);
};

var main = function () {
	var now = Date.now();
	var delta = now - then;
	
	update(delta / 1000);
	render();
	
	then = now;
	
	requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();


