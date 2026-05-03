let seconds = 30; 
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
        window.open("piano.html", "_self");
        }
}}
    }

}



let red = document.querySelector(".red");
    red.style.visibility="hidden";
let orange = document.querySelector(".orange");
    orange.style.visibility="hidden";
let yellow = document.querySelector(".yellow");
    yellow.style.visibility="hidden";
let green = document.querySelector(".green");
    green.style.visibility="hidden";
let blue = document.querySelector(".blue");
    blue.style.visibility="hidden";
let violet = document.querySelector(".violet");
    violet.style.visibility="hidden";
let grey = document.querySelector(".grey");
    grey.style.visibility="hidden";
let redTwo = document.querySelector(".red2");
    redTwo.style.visibility="hidden";
let orangeTwo = document.querySelector(".orange2");
    orangeTwo.style.visibility="hidden";
let yellowTwo = document.querySelector(".yellow2");
    yellowTwo.style.visibility="hidden";
let greenTwo = document.querySelector(".green2");
    greenTwo.style.visibility="hidden";


document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "a")
    {
        
        red.style.visibility = "visible";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#fffeab";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "s")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "visible";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#fffeab";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "d")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "visible";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#fffeab";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "f")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "visible";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#fffeab";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "g")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "visible";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#fffeab";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "h")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "visible";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#fffeab";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "j")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "visible";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#fffeab";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "k")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "visible";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#fffeab";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "l")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "visible";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#fffeab";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === ";")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "visible";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#fffeab";
        greenTwo.style.visibility = "hidden";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#ffffff";
    }
    
     });

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "'")
    {
        
        red.style.visibility = "hidden";
            let c = document.querySelector(".C");
            c.style.backgroundColor="#ffffff";
        orange.style.visibility = "hidden";
            let d = document.querySelector(".D");
            d.style.backgroundColor="#ffffff";
        yellow.style.visibility = "hidden";
            let e = document.querySelector(".E");
            e.style.backgroundColor="#ffffff";
        green.style.visibility = "hidden";
            let f = document.querySelector(".F");
            f.style.backgroundColor="#ffffff";
        blue.style.visibility = "hidden";
            let g = document.querySelector(".G");
            g.style.backgroundColor="#ffffff";
        violet.style.visibility = "hidden";
            let A = document.querySelector(".A");
            A.style.backgroundColor="#ffffff";
        grey.style.visibility = "hidden";
            let B = document.querySelector(".B");
            B.style.backgroundColor="#ffffff";
        redTwo.style.visibility = "hidden";
            let highC = document.querySelector(".highC");
            highC.style.backgroundColor="#ffffff";
        orangeTwo.style.visibility = "hidden";
            let highD = document.querySelector(".highD");
            highD.style.backgroundColor="#ffffff";
        yellowTwo.style.visibility = "hidden";
            let highE = document.querySelector(".highE");
            highE.style.backgroundColor="#ffffff";
        greenTwo.style.visibility = "visible";
            let highF = document.querySelector(".highF");
            highF.style.backgroundColor="#fffeab";
    }
    
     });

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let ten = document.querySelector(".ten");

     function nopeOne(){
        if (red.style.visibility = "visible") {
            
            one.style.visibility = "visible";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
    
     }

     function nopeTwo(){
        if (orange.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "visible";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
        
     }

     function nopeThree(){
        if (yellow.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "visible";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
       
     }

     function nopeFour(){
        if (green.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "visible";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
     }

     function nopeFive(){
        if (violet.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "visible";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
        
     }

     function nopeSix(){
        if (grey.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "visible";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
        
     }

     function nopeSeven(){
        if (redTwo.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "visible";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
        
     }

     function nopeEight(){
        if (orangeTwo.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "visible";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        }
        
     }

     function nopeNine(){
        if (yellowTwo.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "visible";
            ten.style.visibility = "hidden";
        }
        
     }

     function nopeTen(){
        if (greenTwo.style.visibility = "visible") {
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "visible";
        }
     }

     function showOne(){
        clearInterval(timer);
        timer = null;
            one.style.visibility = "hidden";
            two.style.visibility = "hidden";
            three.style.visibility = "hidden";
            four.style.visibility = "hidden";
            five.style.visibility = "hidden";
            six.style.visibility = "hidden";
            seven.style.visibility = "hidden";
            eight.style.visibility = "hidden";
            nine.style.visibility = "hidden";
            ten.style.visibility = "hidden";
        let lineOne = document.querySelector(".line1");
        lineOne.style.visibility = "visible";
        setTimeout(showTwo, 3000);
        function showTwo(){
            let lineTwo = document.querySelector(".line2");
            lineTwo.style.visibility = "visible";
            
            }
        setTimeout(showThree, 9000);
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