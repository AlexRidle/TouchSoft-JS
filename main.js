var position = 0;
var velocity = 1;

var currentSqr = 3;

let sqri0 = document.getElementById('sqri0');
let sqri1 = document.getElementById('sqri1');
let sqri2 = document.getElementById('sqri2');
let sqri3 = document.getElementById('sqri3');
let sqri4 = document.getElementById('sqri4');
let sqri5 = document.getElementById('sqri5');
let sqri6 = document.getElementById('sqri6');
var sqrText = [sqri0,sqri1,sqri2,sqri3,sqri4,sqri5,sqri6];
var sqrIndex = [-3, -2, -1, 0, 1, 2, 3];


let velOutput = document.getElementById('velocityOutput');
let posOutput = document.getElementById('positionOutput');

const btn1 = document.getElementById('dtn1');
const btn2 = document.getElementById('dtn2');

btn1.addEventListener('click', onBtn1Click);
btn2.addEventListener('click', onBtn2Click);

function onBtn1Click(e) {
    move();
    speedUp();
    showStats();
}

function onBtn2Click(e) {
    reverse();
    showStats();
}

function reverse(){
   if(velocity > 0){
       velocity = -1;
   } else {
        velocity = 1;
   }
}

function speedUp(){
    velocity *= 2;
}

function showStats(){
    velOutput.innerHTML = "Speed: " + velocity;
    posOutput.innerHTML = "Position: " + position;
    for(var i=0; i<7; i++){
        sqrText[i].innerHTML = sqrIndex[i];
    }
}

function changeIndex(){
    sqrIndex[i] = position;
    var num = 0;
    for(var i=currentSqr; i>=0; i--){
        sqrIndex[i] = position + num; 
        num--;
    }
    num = 0;
    for(var i=currentSqr; i<=6; i++){
        sqrIndex[i] = position + num; 
        num++;
    }
}
function setClassName(){
    sqrText.forEach(el => {
        if(el.classList.contains('current-square')) {
            el.classList.remove('current-square')
            el.classList.add('default-square')
        }
    });
    sqrText[currentSqr].classList.toggle('current-square')
}

function moveForward(){
    currentSqr = 6;
    setClassName();
}

function moveBackward(){
    currentSqr = 0;
    setClassName();
}

function setSqr(){
    currentSqr += velocity;
    setClassName();
    
}

function move(){
    position += velocity;
    setRover();
}

function setRover(){
    if(position > sqrIndex[6]){
        moveForward();
        changeIndex();
    }else if(position < sqrIndex[0]){
        moveBackward();
        changeIndex();
    }else{
        setSqr();
    }
}

showStats();