 
const boxes = document.querySelectorAll('.box');

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
    setInterval(() => {
        boxes.forEach(color => {
            color.style.background = getRandomColor();
        })
    }, 1000);
}


btn1.addEventListener('click', generateBlocks);
btn2.addEventListener('click', generateBlocksInterval);





