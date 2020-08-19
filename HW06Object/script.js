const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];


/*1. Створіть функцію getSubjects(students[0] -> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */
const getSubject = (students) => {
    return Object.keys(students.subjects).map((word) => word.toUpperCase()[0] + word.slice(1).split('_').join(' '));
}
console.log(getSubject(students[0]));


/* 2. Створіть функцію getAverageMark(students[0]) -> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. 
Можна використовувати функції, написані у попередніх домашніх завданнях :)*/

const getAverageMark = (students) => {
    const marks = Object.values(students.subjects).flat();
    const sum = marks.reduce((acc, el) =>
        acc += el
    );
    return Math.floor((sum / marks.length) * 100) / 100;
}
console.log(getAverageMark(students[0]));

/*
3. Створіть функцію getStudentInfo(students[0]) -> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
*/


const getStudentInfo = (students) => {
    const studInfo = { course: students.course, name: students.name, averageMark: getAverageMark(students) }

    return studInfo;

}
console.log(getStudentInfo(students[0]));


/*
4. Ствроіть функцію getStudentsNames(students) -> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
*/

const getStudentsNames = (students) => {
    const nameStudent = students.map(function (students) {
        return students.name
    });
    return nameStudent.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });
}

console.log(getStudentsNames(students));

/*
5. Створіть функцію getBestStudent(students) -> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
*/

const getBestStudent = (students) => {
  const bestStudent =  students.map(name => ({
        ...name,
        averageMark: getAverageMark(name)
    })).sort((a, b) => 
        a.averageMark - b.averageMark ? -1 : 1
    );
    return JSON.stringify(bestStudent[0].name);
}

console.log(getBestStudent(students));


/*
6. Створіть функцію calculateWordLetters("тест") -> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.-->
*/


const calculateWordLetters = (word) => {
    let obj = {};
    const properties = word.split('');

    properties.forEach(function (keys) {
        if(keys in obj) {
           obj = { ...obj, [keys]: obj[keys] + 1 }
        } else {
           obj = { ...obj, [keys]: 1 }
        }
    });
    return JSON.stringify(obj);
} 


console.log(calculateWordLetters("тест"));

