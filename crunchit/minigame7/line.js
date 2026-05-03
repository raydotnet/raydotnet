let seconds = 60; 
let timer = null; 
function updateTimer() {

}

function startTimer() {
    if (timer === null) {
timer = setInterval (()=> {
    seconds--; 
    document.querySelector(".time").textContent = seconds;
if (seconds <= 0) {
    stopTimer();
}

}, 1000)}
    

   
}

window.onload = startTimer();

function stopTimer(){
        clearInterval(timer);
        timer = null;
        let fail = document.querySelector(".failcontainer");
        fail.style.visibility = "visible";
        fail.style.zIndex = 20;
        document.addEventListener("click", playVideo);
        
     function playVideo()
{
    if (fail.style.visibility = "visible")
    {
let video = document.querySelector(".gif");
    video.style.visibility = "visible";
    video.play();
    video.style.zIndex = 21;
    let videoContainer = document.querySelector(".gifcontainer");
    videoContainer.style.zIndex = 21;
    setTimeout(reload, 2000)
    
function reload() {
        if (video.style.visibility="visible"){
        window.open("line.html", "_self");
        }
}}
    }

}

let canvas= document.querySelector("canvas");
canvas.width = 1100;
canvas.height = 560;
let ctx = canvas.getContext("2d");
canvas.style.imageRendering = "pixelated";
ctx.imageSmoothingEnabled = false;



let spriteObject = 
{
    width: 40,
    height: 64,
    frameWidth: 40,
    frameHeight: 64,
    frameX: 0,
    frameY: 0,
}

let sprite = Object.create(spriteObject);
sprite.x = 517;
sprite.y = 260;

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src= "../sprites/front2.png";
image.style.zIndex="3";
let Xspeed = 0;
let Yspeed = 0;
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

window.addEventListener("keydown", function(e) {
   switch(e.key)
   {
    case "ArrowUp": 
        moveUp = true;
        break;
    case "ArrowDown": 
        moveDown = true;
        break;
    case "ArrowLeft": 
        moveLeft = true;
        break;
    case "ArrowRight": 
        moveRight = true;
        break;
   }
}, false);

window.addEventListener("keyup", function(e) {
   switch(e.key)
   {
    case "ArrowUp": 
        moveUp = false;
        break;
    case "ArrowDown": 
        moveDown = false;
        break;
    case "ArrowLeft": 
        moveLeft = false;
        break;
    case "ArrowRight": 
        moveRight = false;
        break;
   }
}, false);

function loadHandler()
{
    update();
}

function update()
{
    window.requestAnimationFrame(update, canvas);
    sprite.x += Xspeed;
    sprite.y += Yspeed;

    if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = -3;
        image.src="../bluesprites/blueback.png";
    }
     if(moveUp && !moveDown)
    {
        Xspeed = 0;
        Yspeed = -3;
        image.src="../bluesprites/blueback.png";
    }
    
    
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src="../bluesprites/blueleft.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src="../bluesprites/blueleft.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = 3;
        Yspeed = 0;
        image.src="../bluesprites/blueright.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = 3;
        Yspeed = 0;
        image.src="../bluesprites/blueright.png";
    }
    if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Yspeed = 0;
        image.src="../bluesprites/bluefront.png";
    }
     if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        image.src="../bluesprites/bluefront.png";
    }

       if(moveLeft && !moveRight && moveUp && !moveDown)
  {
    Xspeed = -2;
    Yspeed = -2;
    image.src="../bluesprites/blueback.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 2;
    Yspeed = -2;
    image.src="../bluesprites/blueback.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -2;
    Yspeed = 2;
    image.src="../bluesprites/bluefront.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 2;
    Yspeed = 2;
    image.src="../bluesprites/bluefront.png";
  } 
  if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 3;
        image.src="../bluesprites/bluefront.png";
    }

    if(sprite.x < 0)
    {
        sprite.x = 0;
    }

    if(sprite.y < 0)
    {
        sprite.y = 0;
    }
    if(sprite.x + sprite.width > canvas.width)
    {
        sprite.x = canvas.width- sprite.width;
    }
    if(sprite.y + sprite.height > canvas.height)
    {
        sprite.y = canvas.height - sprite.height;
    }
       
    render();
}  

ctx.strokeStyle = "#241d75";
      ctx.lineWidth = 20;


function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.moveTo(sprite.x + 10, sprite.y + 52);
    ctx.lineTo(sprite.x + 30, sprite.y + 52);
    ctx.stroke(); 

    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

  


}






var image = new Image();
image.src = "../sprites/back2.png";
var image = new Image();
image.src = "../sprites/left2.png";
var image = new Image();
image.src = "../sprites/right2.png";


let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".six");



     function nopeOne(){
            
            one.style.visibility = "visible";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            
    }

    function nopeTwo(){
            
            one.style.visibility = "hidden";
            two.style.visibility = "visible";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            
    }

    function nopeThree(){
            
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "visible";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            
    }

    function nopeFour(){
            
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "visible";
            five.style.visibility = "hidden";
            
    }

    function nopeFive(){
            
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "visible";
            
    }

    function showOne(){
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            
        clearInterval(timer);
        timer = null;  
        let lineOne = document.querySelector(".line1");
        lineOne.style.visibility = "visible";
        setTimeout(showTwo, 30000);
        function showTwo(){
            let lineTwo = document.querySelector(".line2");
            lineTwo.style.visibility = "visible";
            
            }
        setTimeout(showThree, 60000);
       function showThree(){
                let lineThree = document.querySelector(".line3");
                lineThree.style.visibility="visible";
        }
}

function hideOne(){
    let lineOne =document.querySelector(".line1");
    lineOne.style.visibility="hidden";
}

function hideTwo(){
    let lineTwo =document.querySelector(".line2");
    lineTwo.style.visibility="hidden";
}

function hideThree(){
    let lineThree =document.querySelector(".line3");
    lineThree.style.visibility="hidden";
}

function hideIntro(){
    let intro =document.querySelector(".intro");
    intro.style.visibility="hidden";
}
