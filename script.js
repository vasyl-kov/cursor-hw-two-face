let priceApple = 15.678;
let priceMango = 123.965;
let priceBanana = 90.2345;

 console.log("The most expensive product is" + " " + Math.max(priceApple, priceMango, priceBanana));
 console.log("The cheapest product is" + " " + Math.min(priceApple, priceMango, priceBanana));


 let totalSumm = priceApple + priceBanana + priceMango;
 console.log("Total amount for products" + " " + totalSumm);



let totalSumWithoutBalance = Math.trunc(priceApple) + Math.trunc(priceMango) + Math.trunc(priceBanana);
console.log("Total amount for products without balance" + " " + totalSumWithoutBalance);

console.log(Math.round(totalSumWithoutBalance)*100/100);