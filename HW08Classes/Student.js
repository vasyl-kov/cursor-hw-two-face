

class Student {
    /*
    У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
    */
    constructor(options) {
        this.university = options.university;
        this.yearsEnrollment = options.yearsEnrollment;
        this.fullName = options.fullName;
        this._marks = [5, 4, 4, 5];
        this.student = 1;
    }

    /*
     Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    */
    getInfo() {
        return this.student ? `Студент ${2020 - this.yearsEnrollment}-го курсу ${this.university}, ${this.fullName}` : `A student with such a key "${this.fullName}" was dismissed`;
    }

    /*
    Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    */

    get marks() {
        return this.student ? this._marks : `A student with such a key "${this.fullName}" was dismissed`;
    }


    /*
    Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    */

    set marks(x) {
        return this.student ? this._marks.push(x) : `A student with such a key "${this.fullName}" was dismissed`;
    }


    /*
    Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    */

    getAverageMark() {
        const sum = this._marks.reduce((acc, el) => {
            return acc += el;
        });
        return sum / this._marks.length;
    }



    /*
    Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    */

    dissmis() {
        return this.student = 0;
    }

    /*
     Створіть метод this.recover, який дозволить поновити студента
    */

    recover() {
        return this.student = 1;
    }



}

/*
Створіть новий клас BudgetStudent, який повністю наслідує клас Student
*/

class BudgetStudent extends Student {
    constructor(options) {
        super(options)
        this.scholarShip = 1400;
        const unit = setInterval(() => { this.getScholarship() }, 1000);
    }


    /*
    Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
    */
    getScholarship() {
        if (this.student && this.getAverageMark() >= 4) {
            console.log(`${this.fullName} отримав ${this.scholarShip} грн. стипендії.`);
        } else {
            console.log(` Середня оцінка успішності студента ${this.fullName} вийшла ${this.getAverageMark()}, яка меньше за 4.0, тому він не отримує стипендію`);
        }
    }
}

