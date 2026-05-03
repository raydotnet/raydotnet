

window.onload=function(){setTimeout(showZero,1000)};

function showZero(){
    let lineZero = document.querySelector(".line0");
    lineZero.style.visibility = "visible"
}

function hideZero(){
    let lineZero = document.querySelector(".line0");
    lineZero.style.visibility = "hidden";
    setTimeout(showOne, 1000);
    let music = document.querySelector("audio");
   music.play();
}

function showOne(){
            
            
        let lineOne = document.querySelector(".line1");
        lineOne.style.visibility = "visible";
        setTimeout(showTwo, 4000);
        function showTwo(){
            let lineTwo = document.querySelector(".line2");
            lineTwo.style.visibility = "visible";
            
            }
        setTimeout(showThree, 7000);
       function showThree(){
                let lineThree = document.querySelector(".line3");
                lineThree.style.visibility="visible";
        }
        setTimeout(showNext, 10000);
       function showNext(){
                let next = document.querySelector(".next");
                next.style.visibility="visible";
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

function openTutorial(){
    window.open("../tutorial/tutorial.html", "_self");
}