let count = 600;

const gameTimer = document.querySelector(".timercontainer");
let questionOne = document.querySelector(".one1");
let questionTwo = document.querySelector(".two2");
let questionThree = document.querySelector(".three3");
let questionFour = document.querySelector(".four4");
let questionFive = document.querySelector(".five5");

document.addEventListener("keydown", (event) => {
    if (event.key==="ArrowDown") {
        count--;
    }
    else if (event.key==="ArrowUp") {
        count++;
    }
    gameTimer.textContent = "00:" + count;

    if (count<= 0) {
        count = 0;
        gameTimer.textContent = "00:000";
    }
    if (count<= 99) {
        gameTimer.textContent = "00:0" + count;
    }
    if (count<= 9) {
        gameTimer.textContent = "00:00" + count;
    }

    if ((count <= 515) && (count >= 513)) {
        questionOne.style.visibility="visible";
    }
    else {
        questionOne.style.visibility="hidden";
    }

    if ((count <= 406) && (count >= 404)) {
        questionTwo.style.visibility="visible";
    }
    else {
        questionTwo.style.visibility="hidden";
    }

    if ((count <= 293) && (count >= 291)) {
        questionThree.style.visibility="visible";
    }
    else {
        questionThree.style.visibility="hidden";
    }

    if ((count <= 186) && (count >= 184)) {
        questionFour.style.visibility="visible";
    }
    else {
        questionFour.style.visibility="hidden";
    }

    if ((count <= 68) && (count >= 66)) {
        questionFive.style.visibility="visible";
    }
    else {
        questionFive.style.visibility="hidden";
    }

});

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
        window.open("timer.html", "_self");
        }
}}
    }

}


let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");



     function nopeOne(){
            
            one.style.visibility = "visible";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            
            
    }

    function nopeTwo(){
            
            one.style.visibility = "hidden";
            two.style.visibility = "visible";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            
            
    }

    function nopeThree(){
            
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "visible";
            four.style.visibility = "hidden";
            
            
    }

    function nopeFour(){
            
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "visible";
            
            
    }


    function showOne(){
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            clearInterval(timer);
        timer = null;
            
            
        let lineOne = document.querySelector(".line1");
        lineOne.style.visibility = "visible";
        setTimeout(showTwo, 6000);
        function showTwo(){
            let lineTwo = document.querySelector(".line2");
            lineTwo.style.visibility = "visible";
            
            }
        setTimeout(showThree, 12000);
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