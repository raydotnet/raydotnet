




let seconds = 1123; 
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
        window.open("../index.html", "_self");
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
canvas.style.backgroundImage = "../backgrounds/housebase.png";


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
sprite.y = 300;
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src= "../sprites/front2.png";
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
        invisibleBananaPeel();
        invisibleBananaPeelTwo();
        invisibleBananaPeelThree();
        invisibleBananaPeelFour();
        invisibleBananaPeelFive();
        invisibleBananaPeelSix();
        invisibleBananaPeelSeven();
        invisibleBananaPeelEight();
        invisibleBananaPeelNine();
        invisibleBananaPeelTen();
        break;
    case "ArrowDown":  
        moveDown = true;
        invisibleBananaPeel();
        invisibleBananaPeelTwo();
        invisibleBananaPeelThree();
        invisibleBananaPeelFour();
        invisibleBananaPeelFive();
        invisibleBananaPeelSix();
        invisibleBananaPeelSeven();
        invisibleBananaPeelEight();
        invisibleBananaPeelNine();
        invisibleBananaPeelTen();
        break;
    case "ArrowLeft": 
        moveLeft = true;
        invisibleBananaPeel();
        invisibleBananaPeelTwo();
        invisibleBananaPeelThree();
        invisibleBananaPeelFour();
        invisibleBananaPeelFive();
        invisibleBananaPeelSix();
        invisibleBananaPeelSeven();
        invisibleBananaPeelEight();
        invisibleBananaPeelNine();
        invisibleBananaPeelTen();
        break;
    case "ArrowRight": 
        moveRight = true;
        invisibleBananaPeel();
        invisibleBananaPeelTwo();
        invisibleBananaPeelThree();
        invisibleBananaPeelFour();
        invisibleBananaPeelFive();
        invisibleBananaPeelSix();
        invisibleBananaPeelSeven();
        invisibleBananaPeelEight();
        invisibleBananaPeelNine();
        invisibleBananaPeelTen();
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
        image.src="../sprites/back2.png";
    }
     if(moveUp && !moveDown)
    {
        Xspeed = 0;
        Yspeed = -3;
        image.src="../sprites/back2.png";
    }
    
    
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src="../sprites/left2.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src="../sprites/left2.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = 3;
        Yspeed = 0;
        image.src="../sprites/right2.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = 3;
        Yspeed = 0;
        image.src="../sprites/right2.png";
    }
    if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Yspeed = 0;
        image.src="../sprites/front2.png";
    }
     if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        image.src="../sprites/front2.png";
    }

       if(moveLeft && !moveRight && moveUp && !moveDown)
  {
    Xspeed = -2;
    Yspeed = -2;
    image.src="../sprites/back2.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 2;
    Yspeed = -2;
    image.src="../sprites/back2.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -2;
    Yspeed = 2;
    image.src="../sprites/front2.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 2;
    Yspeed = 2;
    image.src="../sprites/front2.png";
  } 
  if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 3;
        image.src="../sprites/front2.png";
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

    //collision 
        //walls
    if (sprite.y <= 66){
        sprite.y = 66;
    }
        //bedroom wall
    if ((sprite.x >= 588) && (sprite.x <= 600) && (sprite.y >= 0) && (sprite.y <= 92)) {
        sprite.x = 588;
    }
    if ((sprite.x >= 620) && (sprite.x <= 634) && (sprite.y >= 0) && (sprite.y <= 92)) {
        sprite.x = 634;
    }
    if ((sprite.x >= 588) && (sprite.x <= 634) && (sprite.y >= 92) && (sprite.y <= 96)) {
        sprite.y = 96;
    }
        //bluethroom wall
    if ((sprite.x >= 430) && (sprite.x <= 440) && (sprite.y >= 0) && (sprite.y <= 92)) {
        sprite.x = 440;
    }
    if ((sprite.x >= 396) && (sprite.x <= 410) && (sprite.y >= 0) && (sprite.y <= 92)) {
        sprite.x = 396;
    }
    if ((sprite.x >= 396) && (sprite.x <= 440) && (sprite.y >= 92) && (sprite.y <= 96)) {
        sprite.y = 96;
    }
        //kitchen wall
    if ((sprite.x >= 588) && (sprite.x <= 600) && (sprite.y >= 150) && (sprite.y <= 436)) {
        sprite.x = 588;
    }
    if ((sprite.x >= 620) && (sprite.x <= 634) && (sprite.y >= 150) && (sprite.y <= 436)) {
        sprite.x = 634;
    }
    if ((sprite.x >= 588) && (sprite.x <= 634) && (sprite.y >= 436) && (sprite.y <= 440)) {
        sprite.y = 440;
    }
        //living room wall 
    if ((sprite.x >= 430) && (sprite.x <= 440) && (sprite.y >=150) && (sprite.y <= 360)) {
        sprite.x = 440;
    }
    if ((sprite.x >= 396) && (sprite.x <= 410) && (sprite.y >= 150) && (sprite.y <= 360)) {
        sprite.x = 396;
    }
    if ((sprite.x >= 396) && (sprite.x <= 440) && (sprite.y >= 360) && (sprite.y <= 366)) {
        sprite.y = 366;
    }

        //bluethroom
    if ((sprite.x >= 0) && (sprite.x <= 434) && (sprite.y >= 66) && (sprite.y <= 86)) {
        sprite.y = 86;
    }
    if ((sprite.x >= 0) && (sprite.x <= 434) && (sprite.y >= 138) && (sprite.y <= 150)) {
        sprite.y = 138;
    }
    if ((sprite.x >= 0) && (sprite.x <= 80) && (sprite.y >= 86) && (sprite.y <= 138)) {
        sprite.x = 80;
    }

        //bedroom
    if ((sprite.x >= 600) && (sprite.x <= 1100) && (sprite.y >= 66) && (sprite.y <= 86)) {
        sprite.y = 86;
    }
    if ((sprite.x >= 600) && (sprite.x <= 880) && (sprite.y >= 138) && (sprite.y <= 150)) {
        sprite.y = 138;
    }
    if ((sprite.x >= 881) && (sprite.x <= 1100) && (sprite.y >= 144) && (sprite.y <= 150)) {
        sprite.y = 144;
    }
    if ((sprite.x >= 930) && (sprite.x <=1100) && (sprite.y >= 86) && (sprite.y <=138)) {
        sprite.x = 930;
    }

        //living room
    if ((sprite.x >= 0) && (sprite.x <= 434) && (sprite.y >= 330) && (sprite.y <= 340)) {
        sprite.y = 340;
    } 
    if ((sprite.x >= 0) && (sprite.x <= 390) && (sprite.y >= 460) && (sprite.y <= 560)) {
        sprite.y = 460;
    } 
    
    if ((sprite.x >= 0) && (sprite.x <= 32) && (sprite.y >= 330) && (sprite.y <= 560)) {
        sprite.x = 32;
    } 
    
        //kitchen
    if ((sprite.x >= 600) && (sprite.x <= 1100) && (sprite.y >= 330) && (sprite.y <= 340)) {
        sprite.y = 340;
    }
    if ((sprite.x >= 640) && (sprite.x <= 700) && (sprite.y >= 462) && (sprite.y <= 560)) {
        sprite.y = 462;
    }
    if ((sprite.x >= 701) && (sprite.x <= 800) && (sprite.y >= 478) && (sprite.y <= 560)) {
        sprite.y = 478;
    }
    if ((sprite.x >= 801) && (sprite.x <= 1100) && (sprite.y >= 426) && (sprite.y <= 560)) {
        sprite.y = 426;
    }

    if ((sprite.x >= 1038) && (sprite.x <= 1100) && (sprite.y >= 340) && (sprite.y <= 400)) {
        sprite.x = 1038;
    }

    if ((sprite.x >= 620) && (sprite.x <= 668) && (sprite.y >= 340) && (sprite.y <= 426)) {
        sprite.x = 668;
    }

        //safe table 

    if ((sprite.x >= 468) && (sprite.x <= 469) && (sprite.y >= 66) && (sprite.y <= 89)) {
        sprite.x = 469;
           
    }

    if ((sprite.x >= 470) && (sprite.x <= 570) && (sprite.y <= 90)) {
            sprite.y = 90;
        }


    //front/behind gregs
    
    if (sprite.y >= 420) {
    greenDesign.src = "../img/empty.png";
    }
    else {
        greenDesign.src = "../sprites/greendesign.png";
    }

    if (sprite.y >= 450) {
    drawingGreg.src = "../img/empty.png";
    }
    else {
        drawingGreg.src = "../sprites/drawinggreg.png";
    }

    if (sprite.y >= 400) {
    pleasantGreg.src = "../img/empty.png";
    }
    else {
        pleasantGreg.src = "../sprites/pleasantgreg.png";
    }

   
    //invisible banana peel



 
    //dialogue

    if ((sprite.x >= 420) && (sprite.x <= 600) && (sprite.y >= 380) && (sprite.y <= 560))
    {
        let textone = document.querySelector(".text1");
        textone.style.visibility = "visible";
    }
    else 
        { 
        let textone = document.querySelector(".text1");
        textone.style.visibility = "hidden";
        }

    if ((sprite.x >= 280) && (sprite.x <= 420) && (sprite.y >= 420) && (sprite.y <= 560))
    {
        let texttwo = document.querySelector(".text2");
        texttwo.style.visibility="visible";
        document.querySelector(".yellowhover").addEventListener("click", openDraw);
    }
    else {
        let texttwo = document.querySelector(".text2");
        texttwo.style.visibility="hidden";
    }

     if ((sprite.x >= 20) && (sprite.x <= 160) && (sprite.y >= 400) && (sprite.y <= 540))
    {
        let textthree = document.querySelector(".text3");
        textthree.style.visibility="visible";
        document.querySelector(".greenhover").addEventListener("click", showthreePointFive);
        function showthreePointFive() 
        {
         let threePointFive = document.querySelector(".text3point5");
            threePointFive.style.visibility = "visible";
            threePointFive.style.zIndex = "6";
            textthree.style.zIndex="3";
            document.querySelector(".greenhover2").addEventListener("click", openWheel);
        }       
        }
        else {
            let textthree = document.querySelector(".text3");
            textthree.style.visibility = "hidden";
            textthree.style.zIndex="3"
            let threePointFive = document.querySelector(".text3point5");
            threePointFive.style.visibility = "hidden";
            threePointFive.style.zIndex="3";

        }

       if ((sprite.x >= 196) && (sprite.x <= 336) && (sprite.y >= 50) && (sprite.y <= 190))
    {
        let textfour = document.querySelector(".text4");
        textfour.style.visibility="visible";
        document.querySelector(".bluehover").addEventListener("click", showfourPointThree);
        function showfourPointThree() 
        {
         let fourPointThree = document.querySelector(".text4point3");
            fourPointThree.style.visibility = "visible";
            fourPointThree.style.zIndex="6";
            textfour.style.zIndex="3";
            document.querySelector(".bluehover2").addEventListener("click", showfourPointSix);
            function showfourPointSix() 
            {
             let fourPointSix = document.querySelector(".text4point6");
             fourPointSix.style.visibility = "visible";
             fourPointSix.style.zIndex="6";
             fourPointThree.style.zIndex="3";
                textfour.style.zIndex="3";
                document.querySelector(".bluehover3").addEventListener("click", openBlue);
            } 
        }
    }
    else {
        let textfour = document.querySelector(".text4");
        textfour.style.visibility="hidden";
        textfour.style.zIndex="6"
            let fourPointThree = document.querySelector(".text4point3");
            fourPointThree.style.visibility = "hidden";
            fourPointThree.style.zIndex="4";
            let fourPointSix = document.querySelector(".text4point6");
            fourPointSix.style.visibility = "hidden";
            fourPointSix.style.zIndex="3";
            
    }

       if ((sprite.x >= 750) && (sprite.x <= 890) && (sprite.y >= 50) && (sprite.y <= 190))
    {
        let textFive = document.querySelector(".text5");
        textFive.style.visibility = "visible";
        document.querySelector(".purplehover").addEventListener("click", showfivePointFive);
        function showfivePointFive() 
        {
         let fivePointFive = document.querySelector(".text5point5");
            fivePointFive.style.visibility = "visible";
            fivePointFive.style.zIndex = "6";
            textFive.style.zIndex="3";
            document.querySelector(".purplehover2").addEventListener("click", openLoad);
        }       
        }
        else {
            let textFive = document.querySelector(".text5");
            textFive.style.visibility = "hidden";
            textFive.style.zIndex="3"
            let fivePointFive = document.querySelector(".text5point5");
            fivePointFive.style.visibility = "hidden";
            fivePointFive.style.zIndex="3";

        }

       if ((sprite.x >= 930) && (sprite.x <= 1070) && (sprite.y >= 60) && (sprite.y <= 200))
    {
        let textEight = document.querySelector(".text8");
        textEight.style.visibility = "visible";
        document.querySelector(".greyhover").addEventListener("click", showeightPointThree);
        function showeightPointThree() 
        {
         let eightPointThree = document.querySelector(".text8point3");
            eightPointThree.style.visibility = "visible";
            eightPointThree.style.zIndex="6";
            textEight.style.zIndex="3";
            document.querySelector(".greyhover2").addEventListener("click", showeightPointSix);
            function showeightPointSix() 
            {
             let eightPointSix = document.querySelector(".text8point6");
             eightPointSix.style.visibility = "visible";
             eightPointSix.style.zIndex="6";
             eightPointThree.style.zIndex="3";
                textEight.style.zIndex="3";
                document.querySelector(".greyhover3").addEventListener("click", showeightPointNine);
                 function showeightPointNine(){
            let eightPointNine = document.querySelector(".text8point9");
             eightPointNine.style.visibility = "visible";
             eightPointNine.style.zIndex="6";
             eightPointSix.style.zIndex="3";
             eightPointThree.style.zIndex="3";
                textEight.style.zIndex="3";
                document.querySelector(".greyhover4").addEventListener("click", openKeyboard);
            }
            } 
            
        }       
        }
        else {
            let textEight = document.querySelector(".text8");
            textEight.style.visibility = "hidden";
            textEight.style.zIndex="6"
            let eightPointThree = document.querySelector(".text8point3");
            eightPointThree.style.visibility = "hidden";
            eightPointThree.style.zIndex="5";
            let eightPointSix = document.querySelector(".text8point6");
            eightPointSix.style.visibility = "hidden";
            eightPointSix.style.zIndex="4";
            let eightPointNine = document.querySelector(".text8point9");
            eightPointNine.style.visibility = "hidden";
            eightPointNine.style.zIndex="3";

        }

       if ((sprite.x >= 660) && (sprite.x <= 800) && (sprite.y >= 360) && (sprite.y <= 440))
    {
        let textsix = document.querySelector(".text6");
        textsix.style.visibility="visible";
        document.querySelector(".lightorangehover").addEventListener("click", openTimer);
    }
    else {
        let textsix = document.querySelector(".text6");
        textsix.style.visibility="hidden";
    }

       if ((sprite.x >= 930) && (sprite.x <= 1070) && (sprite.y >= 410) && (sprite.y <= 520))
    {
        let textseven = document.querySelector(".text7");
        textseven.style.visibility="visible";
        document.querySelector(".orangehover").addEventListener("click", showsevenPointFive);
        function showsevenPointFive() 
        {
         let sevenPointFive = document.querySelector(".text7point5");
            sevenPointFive.style.visibility = "visible";
            sevenPointFive.style.zIndex = "6";
            textseven.style.zIndex="3";
            document.querySelector(".orangehover2").addEventListener("click", openPiano);
        }       
        }
        else {
            let textseven = document.querySelector(".text7");
            textseven.style.visibility = "hidden";
            textseven.style.zIndex="3"
            let sevenPointFive = document.querySelector(".text7point5");
            sevenPointFive.style.visibility = "hidden";
            sevenPointFive.style.zIndex="3";

        }

        if ((sprite.x >= 470) && (sprite.x <= 570) && (sprite.y >= 0) && (sprite.y <= 110)) {
            let pressA = document.querySelector(".pressa");
            pressA.style.visibility = "visible";
        }
        else {
            let pressA = document.querySelector(".pressa");
            pressA.style.visibility = "hidden";
        } 
        
   
  
    render();
}  

let notSlipped = true;
let notSlippedTwo = true;
let notSlippedThree = true;
let notSlippedFour = true;
let notSlippedFive = true;
let notSlippedSix = true;
let notSlippedSeven = true;
let notSlippedEight = true;
let notSlippedNine = true;
let notSlippedTen = true

function invisibleBananaPeel() {
    //peel 1
    if((sprite.x >= 620) && (sprite.x <= 750) && (sprite.y >= 70) && (sprite.y <= 200) && (notSlipped == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlipped = false;
        if (!notSlipped) return;
    }

    else if ((sprite.x >= 620) && (sprite.x <= 750) && (sprite.y >= 70) && (sprite.y <= 200) && (notSlipped == false)) {
        return
    }
}

function invisibleBananaPeelTwo(){

    //peel 2
    if((sprite.x >= 840) && (sprite.x <= 970) && (sprite.y >= 50) && (sprite.y <= 180) && (notSlippedTwo == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedTwo = false;
        if (!notSlippedTwo) return;
    }

    else if ((sprite.x >= 840) && (sprite.x <= 970) && (sprite.y >= 50) && (sprite.y <= 180) && (notSlippedTwo == false)) {
        return
    }

}

function invisibleBananaPeelThree(){

    //peel 3
    if((sprite.x >= 480) && (sprite.x <= 610) && (sprite.y >= 50) && (sprite.y <= 180) && (notSlippedThree == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedThree = false;
        if (!notSlippedThree) return;
    }

    else if ((sprite.x >= 480) && (sprite.x <= 610) && (sprite.y >= 50) && (sprite.y <= 180) && (notSlippedThree == false)) {
        return
    }
}

function invisibleBananaPeelFour(){

    //peel 4
    if((sprite.x >= 70) && (sprite.x <= 200) && (sprite.y >= 70) && (sprite.y <= 200) && (notSlippedFour == true))
    {
        
        window.open("../invisiblebluenanapeel/invisiblebluenanapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedFour = false;
        if (!notSlippedFour) return;
    }

    else if ((sprite.x >= 70) && (sprite.x <= 200) && (sprite.y >= 70) && (sprite.y <= 200) && (notSlipped == false)) {
        return
    }
}

function invisibleBananaPeelFive(){

    //peel 5
    if((sprite.x >= 660) && (sprite.x <= 790) && (sprite.y >= 420) && (sprite.y <= 550) && (notSlippedFive == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedFive = false;
        if (!notSlippedFive) return;
    }

    else if ((sprite.x >= 660) && (sprite.x <= 790) && (sprite.y >= 420) && (sprite.y <= 550) && (notSlippedFive == false)) {
        return
    }
}

function invisibleBananaPeelSix(){
    //peel 6
    if((sprite.x >= 60) && (sprite.x <= 190) && (sprite.y >= 380) && (sprite.y <= 510) && (notSlippedSix == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedSix = false;
        if (!notSlippedSix) return;
    }

    else if ((sprite.x >= 60) && (sprite.x <= 190) && (sprite.y >= 380) && (sprite.y <= 510) && (notSlippedSix == false)) {
        return
    }
}

function invisibleBananaPeelSeven(){

    //peel 7
    if((sprite.x >= 190) && (sprite.x <= 320) && (sprite.y >= 310) && (sprite.y <= 440) && (notSlippedSeven == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedSeven = false;
        if (!notSlippedSeven) return;
    }

    else if ((sprite.x >= 190) && (sprite.x <= 320) && (sprite.y >= 310) && (sprite.y <= 440) && (notSlippedSeven == false)) {
        return
    }

}

function invisibleBananaPeelEight(){

    //peel 8
    if((sprite.x >= 760) && (sprite.x <= 890) && (sprite.y >= 300) && (sprite.y <= 430) && (notSlippedEight == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedEight = false;
        if (!notSlippedEight) return;
    }

    else if ((sprite.x >= 760) && (sprite.x <= 890) && (sprite.y >= 300) && (sprite.y <= 430) && (notSlippedEight == false)) {
        return
    }

}

function invisibleBananaPeelNine() {

    //peel 9
    if((sprite.x >=480) && (sprite.x <= 610) && (sprite.y >= 360) && (sprite.y <= 490) && (notSlippedNine == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedNine = false;
        if (!notSlippedNine) return;
    }

    else if ((sprite.x >= 480) && (sprite.x <= 610) && (sprite.y >= 360) && (sprite.y <= 490) && (notSlippedNine == false)) {
        return
    }
    
}

function invisibleBananaPeelTen() {

    //peel 9
    if((sprite.x >=380) && (sprite.x <= 510) && (sprite.y >= 200) && (sprite.y <= 330) && (notSlippedTen == true))
    {
        
        window.open("../invisiblebananapeel/invisiblebananapeel.html");
        moveUp = false;
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        notSlippedTen = false;
        if (!notSlippedTen) return;
    }

    else if ((sprite.x >= 380) && (sprite.x <= 510) && (sprite.y >= 200) && (sprite.y <= 330) && (notSlippedTen == false)) {
        return
    }
    
}




//NOTE PUT FUNCTIONS FOR OPENING MINIGAMES HERE AKA OUTSIDE OF THE UPDATE FUNCTION

function openLoad(){
                window.open("../minigame1/loading.html");
            }

function openKeyboard(){
                window.open("../minigame5/minigame5.html");
            }

function openBlue(){
                window.open("../minigame7/line.html");
            }

function openPiano(){
                window.open("../minigame6/piano.html");
            }

function openWheel(){
                window.open("../minigame4/wheelspin.html");
            }

function openTimer(){
                window.open("../minigame3/timer.html");
            }

function openDraw(){
                window.open("../minigame2/pixelart.html");
            }
            
            
            
            
         




    
 

 

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "a")
    {
        let safe = document.querySelector(".safecontainer");
        safe.style.visibility="visible";
        let pressL = document.querySelector(".pressl");
        pressL.style.visibility="visible";
    }
   
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "l")
    {
        let pressA = document.querySelector(".pressa");
            pressA.style.visibility = "hidden";
        let safe = document.querySelector(".safecontainer");
        safe.style.visibility="hidden";
        let pressL = document.querySelector(".pressl");
        pressL.style.visibility="hidden";
        let nope = document.querySelector(".nope");
        nope.style.visibility="hidden";
    }
   
     });

function writeNumbers(el){
    let txt = document.getElementById("screen");
    let number = el.innerHTML; 
    txt.value = txt.value + number;
    let nope = document.querySelector(".nope");
        nope.style.visibility="hidden";
}


function enter(){
    let txt = document.getElementById("screen");
    if (txt.value === "203471") {
        window.open("../victory/victory.html", "_self");
        let nope = document.querySelector(".nope");
        nope.style.visibility="hidden";
    }
    else {
        let nope = document.querySelector(".nope");
        nope.style.visibility="visible";
    }
}

let housebase = new Image();
housebase.src = "../backgrounds/housebase.png";

let livingkitchen = new Image();
livingkitchen.src = "../backgrounds/livingkitchen.png";    

let blueBlueman = new Image();
blueBlueman.src = "../sprites/blueblueman.png";

let drawingGreg = new Image();
drawingGreg.src = "../sprites/drawinggreg.png";

let eyesGreg = new Image();
eyesGreg.src = "../sprites/eyesgreg.png";

let greenDesign = new Image();
greenDesign.src = "../sprites/greendesign.png";

let pianoGreg = new Image();
pianoGreg.src = "../sprites/pianogreg.png";

let pleasantGreg = new Image();
pleasantGreg.src = "../sprites/pleasantgreg.png";

let sadGreg = new Image();
sadGreg.src = "../sprites/sadgreg.png";

let shockedGreg = new Image();
shockedGreg.src = "../sprites/shockedgreg.png";

function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

   ctx.drawImage(
        housebase,
        0, 0, 1100, 560,
    );

    

    ctx.drawImage(
        sadGreg,
        0, 0, 1100, 560,
    );
    
    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

     

    ctx.drawImage(
        blueBlueman,
        0, 0, 1100, 560,
    );

    ctx.drawImage(
        eyesGreg,
        0, 0, 1100, 560,
    );

    ctx.drawImage(
        greenDesign,
        0, 0, 1100, 560,
    );

    ctx.drawImage(
        drawingGreg,
        0, 0, 1100, 560,
    );

    ctx.drawImage(
        pianoGreg,
        0, 0, 1100, 560,
    );

    ctx.drawImage(
        pleasantGreg,
        0, 0, 1100, 560,
    );

    

    ctx.drawImage(
        shockedGreg,
        0, 0, 1100, 560,
    ); 


}


function hideIntro() {
let intro = document.querySelector(".intro");
intro.style.visibility = "hidden";
 let music = document.querySelector("audio");
   music.play();
}



var image = new Image();
image.src = "../sprites/back2.png";
var image = new Image();
image.src = "../sprites/left2.png";
var image = new Image();
image.src = "../sprites/right2.png";