window.onload=function(){setTimeout(showZero,1000)};

function showZero(){
    let lineZero = document.querySelector(".line0");
    lineZero.style.visibility = "visible";
}

function hideZero(){
    let lineZero = document.querySelector(".line0");
    lineZero.style.visibility = "hidden";
    let music = document.querySelector("audio");
   music.play();
}