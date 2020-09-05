 
const boxes = document.querySelectorAll('.box');
let stoped = false;
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
    if (stoped) {
        boxes.forEach(color => {
            color.style.background = getRandomColor();
        });
        setInterval(generateBlocksInterval, 1000);
}
}

btn1.addEventListener('click', generateBlocks);
btn2.addEventListener('click', function() {
    btn2.innerText = "STOP";
    if (stoped) {
        stoped = false;
        btn2.innerText = "Generate blocks interval";
    }
    else{
        stoped = true;
         generateBlocksInterval();
    }
});





