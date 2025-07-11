// импорт модуля Person
import { Person } from "./person.js";

// модуль Worker расширяет класс Person
export class Worker extends Person {
    #rate = 1000;
    #days = 0;

    // в конструкторе принимаем Имя Фамилию дату рождения и должность
    constructor(firstName, lastName, birthDay, position) {
        // Имя Фамилию и дату рождения передаем в конструктор класса Person
        super(firstName, lastName, birthDay);
        this.position = position;
    };

    // сеттер ставки за день, если ставка меньше 1000, выводим ошибку, ставку не меняем
    set rate(value) {
        if (value > 1000) {
            this.#rate = value;
        } else {
            console.log('ставка в день не корректна');
        };
    };

    // геттер ставки за день
    get rate() {
        return this.#rate;
    };

    // метод для добавления рабочих дней, может использоваться многократно как для добавления дней, так и для их списания,
    // напаример штрафы
    addDays(day) {
        if (day) {
            // берем текущую дату
            const today = new Date();
            // находим количество дней в текущем месяце
            const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
            this.#days += day;
            // проверка поля количества рабочих дней, если дней больше чем дней в текущем месяце,
            // записываем в поле количество дней в месяце, если в поле отрицательное число, записываем 0
            if (this.#days > daysInMonth) {
                this.#days = daysInMonth;
            } else if (this.#days < 0) {
                this.#days = 0;
            };
        };
    };

    // метод выводит заработок в текущем месяце
    getSalary() {
        // находим текущий месяц
        const currentMonth = new Date().getMonth() + 1;
        // находим месяц рождения работника
        const birthMonth = +this.birthDay.split('-')[1];
        // если день рождения рабоника в текущем месяце, добавляем бонус 10%
        if (currentMonth === birthMonth) {
            return this.#rate * this.#days + this.#rate * this.#days * 0.1;
        } else {
            return this.#rate * this.#days;
        };
    };

    // метод принимает массив работников и выводит работника/работников, кто отработал больше всех
    static whoWorkedMore(workers) {
        console.log('Больше всех отработали:');
        // делаем копию массива, что бы не менять оригинальный
        const brig = [...workers];
        // сортируем массив по убыванию, и берем первый(максимальный) элемент, фильтруем по полученному максимальному значению
        brig.sort((a, b) => b.#days - a.#days)
            .filter(person => brig[0].#days === person.#days)
            .forEach(person => console.log(` ${person.getFullName()}. Количество рабочих дней - ${person.#days}`));
    };

    // метод принимает массив работников и выводит самого младшего работника/работников 
    static whoIsYounger(workers) {
        console.log('Самые младшие:');
        // делаем копию массива, что бы не менять оригинальный
        const brig = [...workers];
        // добавляем поле age для удобства сортировки и поиска
        brig.forEach(person => person.age = parseInt(person.getAge()));
        // сортируем массив по возрастанию, и берем первый(минимальный) элемент, фильтруем по полученному минимальному значению
        brig.sort((a, b) => a.age - b.age)
            .filter(person => brig[0].age === person.age)
            .forEach(person => console.log(` ${person.getFullName()}. Возраст - ${person.getAge()}`));
    };
}