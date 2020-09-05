const boxes = document.querySelectorAll('.box');
let timer;
const btn1 = document.getElementById('btn_1');
const btn2 = document.getElementById('btn_2');

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function generateBlocks() {
        boxes.forEach(color => {
            color.style.background = getRandomColor();
        })
}



function generateBlocksInterval() { 
   return generateBlocks();
}

btn1.addEventListener('click', generateBlocks);
btn2.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(generateBlocksInterval, 1000);
        btn2.innerText = "STOP";     
    }
    else{
        btn2.innerText = "Generate blocks interval";
        timer = clearInterval(timer);
    }
});





