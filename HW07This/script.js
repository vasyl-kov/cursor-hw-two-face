const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


/* 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
 Функція повинна викликатись через call та працювати з даними через this */

function getMyTaxes(salary) {
return Math.floor(this.tax * salary) + '$';
}
console.group('get taxes in country');
console.log(getMyTaxes.call(ukraine, 1700));
console.log(getMyTaxes.call(latvia, 1500));
console.log(getMyTaxes.call(litva, 1400));
console.groupEnd();


/* 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). 
Функція повинна викликатись через call та працювати з даними через this */
function getMiddleTaxes (country) {
  return Math.floor(this.tax*this.middleSalary) + '$';
  
}
console.group('Middle taxes in country');
console.log('getMiddleTaxes: ', getMiddleTaxes.call(ukraine));
console.log('getMiddleTaxes: ', getMiddleTaxes.call(latvia));
console.log('getMiddleTaxes: ', getMiddleTaxes.call(litva));
console.groupEnd();

/* 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). 
Функція повинна викликатись через call та працювати з даними через this */

function getTotalTaxes(country) {
 return Math.floor(this.tax*this.middleSalary*this.vacancies) + '$';
}
console.group('Total taxes in country');
console.log('getTotalTaxes: ', getTotalTaxes.call(ukraine));
console.log('getTotalTaxes: ', getTotalTaxes.call(latvia));
console.log('getTotalTaxes: ', getTotalTaxes.call(litva));
console.groupEnd();


/*4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes; */

function getMySalary(country) {
 setInterval(()=> {
   const salary = Math.floor(Math.random()* (2000-1500)+1500);
   const taxes = this.tax*salary;
   console.log({salary,taxes, profit: salary - taxes});
  }, 10000);
}
getMySalary.call(ukraine);
