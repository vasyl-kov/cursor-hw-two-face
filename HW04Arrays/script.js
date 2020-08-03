const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
    "Диференційне рівняння",
    "Теорія автоматів",
    "Алгоритми і структури даних"
];
const marks = [4, 5, 5, 3, 4, 5];


// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs(students) {
    const pairsStudent = [];
    const boys = students.filter(student => student[student.length -1] !== 'а');
    const girls = students.filter(student => student[student.length -1] === 'а');
    
    for (i = 0; i < boys.length; i++) {
        for (j = 0; j < girls.length; j++) {
            if (i === j) {
                pairsStudent.push([boys[i], girls[j]]);
            }
        }
    }
    return pairsStudent;
}

const pairs = getPairs(students);



// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function getThemes(pairs, themes) {
    let taskStudents = [];

    for (i = 0; i < pairs.length; i++) {
        pairs[i] = pairs[i].join(' і ');
        taskStudents.push(pairs[i] + ' - ' + themes[i]);
    }
    return taskStudents;
}

const pairsGetThemes = getThemes(pairs, themes);



// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function getMarks(students, marks) {
    let eachStudents = [];
    let marksForStudents = [];
    for (names of students) {
        let result = eachStudents.push(names);
    }

    for (i = 0; i < eachStudents.length; i++) {
        marksForStudents.push([eachStudents[i] + ': ' + marks[i]]);
    }
    return marksForStudents;
}

const studentsGetMarks = getMarks(students, marks);




// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.ceil(Math.random() * 5))
}

function getRandomMarks(pairsGetThemes,numbers) {
    let randomMarks = [];
    for (i = 0; i <pairsGetThemes.length; i++){
        randomMarks.push(pairsGetThemes[i] + ' : ' + numbers[i]);
    }
return randomMarks;
}

const studentsGetRandomMarks = getRandomMarks(pairsGetThemes,numbers);

console.log("Викладач розбив студентів на пари наступним чином:", pairs);
console.log('Теми для студентів', pairsGetThemes);
console.log('Оцінки за вивченний матеріал:', studentsGetMarks);
console.log('Викладач вирішив оцінити студентів випадковим чином:', studentsGetRandomMarks);


console.log('name students:', students);