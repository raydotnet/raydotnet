
window.onload=function(){setTimeout(showZero,1000)};

function showZero(){
    let lineZero = document.querySelector(".line0");
    lineZero.style.visibility = "visible"
}

function hideZero(){
    let lineZero = document.querySelector(".line0");
    lineZero.style.visibility = "hidden";
    let music = document.querySelector("audio");
   music.play();
   let gameContainer = document.querySelector(".gamecontainer");
   gameContainer.style.backgroundImage = "url(../backgrounds/ball.gif)";
   setTimeout(changeBg,6000)
   let recipe = document.querySelector(".recipecontainer");
   recipe.classList.add("animation");
}

function changeBg() {
    let gameContainer = document.querySelector(".gamecontainer");
    gameContainer.style.backgroundImage = "url(../img/empty.png)";
    setTimeout(showOne,3000);


}

function showOne(){
            
            
        let lineOne = document.querySelector(".line1");
        lineOne.style.visibility = "visible";
        setTimeout(showTwo, 4000);
        function showTwo(){
            let lineTwo = document.querySelector(".line2");
            lineTwo.style.visibility = "visible";
            
            }
        setTimeout(showThree, 9000);
       function showThree(){
                let lineThree = document.querySelector(".line3");
                lineThree.style.visibility="visible";
        }
        setTimeout(showNext, 11000);
        function showNext(){
            let nextButton = document.querySelector(".next");
            nextButton.style.visibility = "visible";
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

function openEnding(){
    window.open("../ending/ending.html", "_self");
}
