// модуль Person
export class Person {
    #birthDay = '';

    // в конструкторе принимаем Имя Фамилию и дату рождения
    constructor(firstName, lastName, birthDay) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
    };

    // геттер даты рождения
    get birthDay() {
        return this.#birthDay;
    };

    // сеттер даты рождения, проверяет корректность даты, если не проходит проверку, выводит
    // ошибку, поле даты остается пустым
    set birthDay(date) {
        if (/^\d{2}-\d{2}-\d{4}$/.test(date)) {
            this.#birthDay = date;
        } else {
            console.error('Не верный формат даты рождения');
        };
    };

    // метод возвращает Имя Фамилию в одной стороке
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    };

    // метод возвращает возраст в корректном склонении
    getAge() {
        // если поле пустое, возвращаем null
        if (!this.#birthDay) return null;
        const [day, month, year] = this.#birthDay.split('-').map(Number);
        const today = new Date();
        const monthDiff = today.getMonth() + 1 - month;
        let age = today.getFullYear() - year;
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) age--;
        if (age % 10 === 1) {
            return age + ' год';
        } else if (2 <= age % 10 && age % 10 <= 4) {
            return age + ' года';
        } else {
            return age + ' лет';
        };
    };
}