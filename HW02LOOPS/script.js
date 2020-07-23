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
       document.getElementById("demo").innerHTML = `<p>Число N=${n}</p>
        <p>Число M=${m}</p>
        <p>Чи потрібно пропускати парні числа - ${question}</p>
        <p>Сума від N до M дорівнює - ${totalCount}</p>`