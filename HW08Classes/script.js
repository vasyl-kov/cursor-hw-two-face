const student = new Student({
    university: 'КНУ ім. Тараса Шевченка, м.Київ',
    yearsEnrollment: 2014,
    fullName: 'Василь Кольцов',
});
console.log('student: ', student.getInfo());

console.log('student: ', student.marks);
student.marks = 5;
console.log('student: ', student.marks);

console.log('student: ', student.getAverageMark());
console.log(student.dissmis());
console.log('student: ', student.getInfo());

console.log(student.marks);
console.log( student.recover());
console.log(student.marks);





const budgetStudent = new BudgetStudent({
    university: 'НАУ',
    yearsEnrollment: 2019 ,
    fullName: 'Джон Сіна',
});

console.log(budgetStudent);
// console.log('budgetStudent: ', budgetStudent.;



