

document.addEventListener("DOMContentLoaded",start) 


function start(){

  library();
  cleanCV();
  validate();
  calculate();
}

function library(){ 
  var elem = document.getElementById("geneteBut");
const ballCreate = document.getElementById("ballCreate")
const ballC = document.getElementById("ballC")
const ballCalcul = document.getElementById("ballCalcul")
const submitBut = document.getElementById("submitBut")
const cleanCanvas = document.getElementById("cleanCanvas")
const stopGen = document.getElementById("stopGen")
const ballOutput = document.getElementById("ballOutput")
const stagetext = document.getElementById("stagetext")

let volume = 1;

elem.addEventListener("click", change)
cleanCanvas.addEventListener("click", cleanCV)
submitBut.addEventListener("click", validate)
}
function cleanCV(){
  const context = myCanvas.getContext('2d');
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
}



function validate(){ 

  // preventDefault
if (ballCalcul.value === ""){
  stagetext.innerText= ("no field value")
  stagetext.style.color = ("red")
  ballCalcul.style.border = ("red")

}
if(isNaN(ballCalcul.value)){
  stagetext.innerText= ("Please input a number")
  stagetext.style.color = ("red")
  ballCalcul.style.border = ("red")

}
else{
calculate();
// if volume number exceeds 94 - it will grow beyond 800px
if (volume > 397) {alert("it's too big!")
return
} 
generate();
}
}
function calculate(){
        const base = (ballCalcul.value*4) 
        const pieCalc = (base*3.14)/3 
    ballOutput.innerText= ("the Ball Volume is: " + pieCalc)
    return volume = pieCalc
    
}

function generate(){

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  let volume =  Math.floor(Math.random() * 397) + 1  
  var radius = volume;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#B7B4B5';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#757374';
  context.stroke();
 

}
// http://jsfiddle.net/67ct5sre/20/



function change(){
  


  var myVar = setInterval(generate, 100);

function myStopFunction() {
  clearInterval(myVar);
}


}
