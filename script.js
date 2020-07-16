// 1. Code runs as you type: edit message
let priceApple = 15.678;
let priceMango = 123.965;
let priceBanana = 90.2345;

 console.log("The most expensive product is" + " " + Math.max(priceApple, priceMango, priceBanana));
 console.log("The cheapest product is" + " " + Math.min(priceApple, priceMango, priceBanana));


 let totalSum = priceApple + priceBanana + priceMango;
 console.log("Total amount for products" + " " + totalSum);



let totalSumWithoutBalance = Math.trunc(priceApple) + Math.trunc(priceMango) + Math.trunc(priceBanana);
console.log("Total amount for products without balance" + " " + totalSumWithoutBalance);

 



console.log(Math.round(totalSumWithoutBalance/100)*100);

console.log(totalSumWithoutBalance%2 === 0);

console.log("client paid 500 and received of change" + " " + (500 - totalSum) + " " + "from 500");


console.log("Average price of products"+ " " + Math.round((totalSum/3)*100)/100);


let sale = Math.random()*100;
console.log(Math.round(sale) + "%");




console.log("Total amount for products" + " " + (Math.round(totalSum*100)/100) + "," + "client got a discount" + " " + Math.round(sale) + "%" + " " + "and paid" + " " + (Math.round((Math.round(totalSum*100)/100)* Math.round(sale)/100)) + " " + "less" + "," + "the cost is" + " " + Math.round(totalSum)/2);
console.log("Net profit" + " " + (Math.round(totalSum/2)-(Math.round((Math.round(totalSum*100)/100)* Math.round(sale)/100)))); 