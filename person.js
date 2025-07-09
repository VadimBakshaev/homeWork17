export class Person {
    #birthDay = '';
    constructor(firstName, lastName, birthDay) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
    };
    get birthDay() {
        return this.#birthDay;
    };
    set birthDay(date) {
        if (/^\d{2}-\d{2}-\d{4}$/.test(date)) {
            this.#birthDay = date;
        } else {
            console.error('Не верный формат даты рождения');
        };
    };
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    };
    getAge() {
        if (!this.#birthDay) return null;
        const [day, month, year] = this.#birthDay.split('-').map(Number);
        const birthdate = new Date(year, month - 1, day);
        const today = new Date();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        let age = today.getFullYear() - birthdate.getFullYear();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) age--;
        if (age % 10 === 1) {
            return age + ' год';
        } else if (2 <= age % 10 <= 4) {
            return age + ' года';
        } else {
            return age + ' лет';
        };
    };
}