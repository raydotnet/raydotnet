let seconds = 0; 
let timer = null; 
function updateTimer() {

}

function startTimer() {
    if (timer === null) {
timer = setInterval (()=> {
    seconds++; 
    document.querySelector(".time").textContent = seconds;
if (seconds >= 300) {
    stopTimer();
}

}, 1000)}
    

   
}

window.onload = startTimer();

function stopTimer(){
        clearInterval(timer);
        timer = null;
        let lineOne = document.querySelector(".line1");
        lineOne.style.visibility = "visible";
        setTimeout(showTwo, 4000);
        function showTwo(){
            let lineTwo = document.querySelector(".line2");
            lineTwo.style.visibility = "visible";
            
            }
        setTimeout(showThree, 8000);
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






const container = document.querySelector('.gridcontainer')
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')

let draw = false

function toggleGrid(){
container.classList.toggle('nogrid')
let xo = document.querySelector('.xo')
xo.classList.toggle('no')
if (xo.innerHTML === 'o') {
    xo.innerHTML = 'x'
}
else {
    xo.innerHTML = 'o'
}
}

function populate(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('grid')

        div.addEventListener('mouseover', function(){
            
            if(!draw) return;
            div.style.backgroundColor = color.value;
        })

       div.addEventListener('click', function(){
    draw = false
    div.style.backgroundColor = color.value;
})

        container.appendChild(div)
    }
}

window.addEventListener('mousedown', function(){
    draw = true
})



window.addEventListener('mouseup', function(){
    draw = false
})

function reset(){
    container.innerHTML= ''
    populate(size)
}

resetBtn.addEventListener('click', reset)


sizeEl.addEventListener('change', function(){
    size = sizeEl.value
    reset()
})

populate(size)


function hideIntro(){
    let intro =document.querySelector(".intro");
    intro.style.visibility="hidden";
}