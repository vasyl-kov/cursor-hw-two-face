
//   let n = +prompt('Будь ласка введіть ціле число N');
//   let m = +prompt('Будь ласка введіть ціле число M');
// const question = confirm(`Чи потрібно пропускати парні числа \n TRUE – потрібно \n FALSE – не потрібно`);
// let totalCount = 0;


// if (Number.isInteger(n)==false) {
//     let n = +prompt('Ви ввели не ціле число N або символ, будь ласка введіть ціле число');
//   } else if (n===0) {
//     let m = +prompt('Ви ввели не ціле число M або символ, будь ласка введіть ціле число');
//   }


// if (question === true) {
// for (i = n; i <= m; i++){
//   if (i % 2 !== 0){
    
//     totalCount += i;

//   } 
// }
// }else {
//   for (i = n; i <= m; i++){
//     totalCount += i;
// }
// }

// console.log(`Число N=${n} \nЧисло M=${m}.\nЧи потрібно пропускати парні числа ${question} \n ${totalCount}`);


let totalCount = 0;

let n = +prompt(`Введіть ціле число N.`);
while(!Number.isInteger(n) || n == ""){
    alert (`Це не є ціле число або рядок пустий, спробуйте ще раз`)
    n = +prompt(`Введіть ціле число N.`);
}
let m = +prompt(`Введіть ціле число M більше за N`);
while(!Number.isInteger(m) || m == "" || m<=n){
    alert (`Це не є ціле число, рядок пустий або вказане число менше за N, спробуйте ще раз`)
    m = +prompt(`Введіть ціле число M більше за N`);
}

const question = confirm(`Чи потрібно пропускати парні числа \n TRUE – потрібно \n FALSE – не потрібно`);

if (question === true) {
for (i = n; i <= m; i++){
  if (i % 2 !== 0){
    
    totalCount += i;

  } 
}
}else {
  for (i = n; i <= m; i++){
    totalCount += i;
}
}

console.log(`Число N=${n} \nЧисло M=${m}.\nЧи потрібно пропускати парні числа - ${question}\nСума від N до M дорівнює - ${totalCount}`);