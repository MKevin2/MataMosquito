var altura = 0
var largura = 0

function Responsividade(){

altura = window.innerHeight;
largura = window.innerWidth;

//console.log(largura, altura);
}
Responsividade();

function posRandom(){

var posX = Math.floor(Math.random()*largura)-90;
var posY = Math.floor(Math.random()*altura)-90;

posX = posX < 0?0: posX;
posY = posY < 0?0: posY;
console.log(posX, posY)

var Mosquito = document.createElement('img');
Mosquito.src="img/mosca.png";
document.body.appendChild(Mosquito);
Mosquito.className = 'mosq01';
Mosquito.style.left = posX + 'px';
Mosquito.style.top = posY + 'px';
Mosquito.style.position = 'absolute';
}