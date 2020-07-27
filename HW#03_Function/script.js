

//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {

    if (number == 0) {
        return 0;
    }
    else {
        return Math.floor(Math.max(number % 10, getMaxDigit(number / 10)));
    }
}




//Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл


function pow(x, y) {
    let result = x;
    for (i = 1; i < y; i++) {
        result *= x;
    }
    if (y == 0) {
        return result = 1;
    }
    else {

        return result;
    }
}



//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function capitalize(str) {  
    let CapitalizeWords = str[0].toUpperCase();  
    for ( i = 1; i <= str.length - 1; i++) {  
        let currentCharacter,  
            previousCharacter = str[i - 1];  
        if (previousCharacter && previousCharacter == ' ') {  
            currentCharacter = str[i].toUpperCase();  
        } else {  
            currentCharacter = str[i].toLowerCase();  
        }  
        CapitalizeWords = CapitalizeWords + currentCharacter;  
    }  
    return CapitalizeWords;  
} 



//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function calculatePercent(percent, num){
    let result = 0;
      return result = num - (((parseFloat(percent)  / 100) * num));
  }

//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function randomFromNtoM (n,m){ 
    n = parseInt(n);
    m = parseInt(m);
    return Math.ceil(Math.random()* (m-n)+n);
}



//Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetterInWord(letter, word) {
    let countLetter = 0;
    
    for ( i = 0; i < word.length; i++){
      
        if (letter === word[i].toLowerCase()){
          
            countLetter +=1;
        }
    }
    return countLetter;
    }






document.writeln(`Функція 1: результат ->${ getMaxDigit(1234567890)}`);
document.writeln(`Функція 2: результат ->${ pow(2,3)} \n`);
document.writeln(`Функція 3: результат ->${capitalize("VASYL kOLTsoV    sTUDENT")}`);
document.writeln(`Функція 4: результат ->${calculatePercent(19.5, 1000)}`);
document.writeln(`Функція 5: результат ->${randomFromNtoM(1, 1000)}`);
document.writeln(`Функція 6: результат ->${countLetterInWord("а", "Асталавіста")}`);