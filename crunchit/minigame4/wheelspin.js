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
        window.open("wheelspin.html", "_self");
        }
}}
    }

}


let wheel = document.querySelector('.wheel')
let spinbutton = document.querySelector('.spinbutton')
let value = Math.ceil(Math.random()*360)

spinbutton.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)"
    value += Math.ceil(Math.random()*3600)
    chance = Math.random()
    let no = document.querySelector(".nope");
        no.style.visibility = "hidden";
    
   
    if (chance <= .875){
        
        window.addEventListener('transitionend', () =>{
        let no = document.querySelector(".nope");
        no.style.visibility = "visible";
        });
    }
    
    if (chance >= .876) {
      
        window.addEventListener('transitionend', () =>{
        let no = document.querySelector(".nope");
        no.style.visibility = "hidden";
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
    


        });
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