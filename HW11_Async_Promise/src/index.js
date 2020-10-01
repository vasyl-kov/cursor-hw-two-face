const getRandomChinese = (length) => {
    let str =[];
    const step = 0;
    let sign = Date.now().toString().slice(-5);
    return new Promise((resolve) => {
        
setTimeout(() => {
    while (length > step) {
        length--;
        str.push(String.fromCharCode(sign));
        resolve(str);
    }
}, length*50);
    }) 
}

getRandomChinese(4).then(result =>{
    document.getElementById('demo').innerHTML = result;
})