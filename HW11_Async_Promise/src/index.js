const getRandomChinese = (length) => {
    
    let str ='';
    const step = 0;
    let sign = Date.now().toString().slice(-5);
    return new Promise((resolve) => {
                    while (length > step){
                        length--;
                str = String.fromCharCode(sign);
            }
setTimeout(() => resolve(str), 1500 );
    }) 
}

getRandomChinese(4).then(result =>{
    document.getElementById('demo').innerHTML = result;
})