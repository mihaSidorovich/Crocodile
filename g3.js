document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="hantr.png" id="hantr" width="120px">');
let hantr = document.getElementById('hantr');
hantr.style.position = "fixed";
hantr.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="pizza.png" id="pizza" width="100px">');
let pizza = document.getElementById('pizza');
pizza.style.position = "fixed";
pizza.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="scoreObj"></div');
let scoreObj = document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 32 +"pt";
let score=0;
scoreObj.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="helloText">start</div');
let helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = "centre";
helloText.style.fontSize = 32+"pt";

let enterListener = function(event){startGame(event)};
document.addEventListener("keydown",enterListener);

let mouseListener = function(event) {mouseMoveFunction(event)};
//document.addEventListener("mousemove", mouseListener);

spawnPizza();

function mouseMoveFunction(event){
	hantr.style.left = event.clientX - 60 +'px';
	hantr.style.top = event.clientY - 30 +'px';
	checkCollision();
}
function spawnPizza() {
	pizza.style.left = Math.random()*(window.innerWidth - 100) + 'px';
	pizza.style.top = Math.random()*(window.innerHeight - 100) + 'px';
}
function checkCollision(){
	console.log();
	if (Math.sqrt(Math.pow(hantr.offsetLeft - pizza.offsetLeft,2) +Math.pow(hantr.offsetTop - pizza.offsetTop,2)) <80)
    {
     spawnPizza();
     score+=5;
     setScore(score);
        }
    }
    function setScore(scoreToSet){
    	scoreObj.innerHTML = scoreToSet;
    }
   function startGame(event){
   	if (event.keyCode ==13){
   		score = 0;
   		setScore(0);
   		helloText.style.display = 'none';
   		scoreObj.style.display = 'block';
   		pizza.style.display = 'block';
   		hantr.style.display = 'block';

   		document.removeEventListener('keydown', enterListener);
   		document.addEventListener("mousemove",mouseListener);

   		spawnPizza();
   	}
   }