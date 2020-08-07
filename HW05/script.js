/*
1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа,
max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] */

getRandomArray = (length, max, min) => [...new Array(length)]
.map(() => Math.round(Math.random() * (max-min)+ min));


console.log('getRandomArray: ', getRandomArray(15,1,100));


/*2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2 */ 

getModa = (...numbers) => {
  return ((numbers.sort((a, b) =>
  (numbers.filter(v => v === a).length) - (numbers.filter(v => v ===b).length))).pop());
}

console.log('getModa: ', getModa(6,1.5, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


/*3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4*/

getAverage = (...numbers) => {
  
  const num = numbers.filter(el=> Number.isInteger(el));
  const total = num.reduce((acc, elem) => acc +=elem);
  return total / num.length
}

console.log('getAverage: ', getAverage(6, 1.5, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


  /*4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3 */
 
getMedian = (...numbers) => {
  const numb = numbers.filter(el => Number.isInteger(el));
  const mid = Math.floor(numb.length/2);
  numb.sort((a,b) => a-b);
  return numb.length % 2  !==0 ? numb[mid] : (numb[mid - 1] + numb[mid])/2;
  
  
}
console.log('getMedian: ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/*5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

filterEvenNumbers = (...numbers) => {
  return numbers.filter(el => el % 2===1); 
}

console.log('filterEvenNumbers: ', filterEvenNumbers(1, 2, 3, 4, 5, 6,7,8,9,10));
 /*6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */

countPositiveNumbers  = (...numbers) => {
  return numbers.filter(el => el > 0).length;
  
}
console.log('countPositiveNumbers: ', countPositiveNumbers(1, -2, 3, -4, -5, 6));
/* 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

getDividedByFive = (...numbers) => {
  return numbers.filter(el => el % 5 ===0);
}

console.log('getDividedByFive: ', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
