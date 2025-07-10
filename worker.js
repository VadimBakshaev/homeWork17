import { Person } from "./person.js";

export class Worker extends Person {
    #rate = 1000;
    #days = 0;
    constructor(firstName, lastName, birthDay, position) {
        super(firstName, lastName, birthDay);
        this.position = position;
    };
    set rate(value) {
        if (value > 1000) {
            this.#rate = value;
        } else {
            console.log('this rate uncorrected');
        };
    };
    get rate() {
        return this.#rate;
    };
    addDays(day) {
        if (day) {
            const today = new Date();
            const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
            this.#days += day;
            if (this.#days > daysInMonth) {
                this.#days = daysInMonth;
            };
        };
    };
    getSalary() {
        const currentMonth = new Date().getMonth;
        const birthMonth = +this.birthDay.split('-')[1];
        if (currentMonth === birthMonth) {
            return this.#rate * this.#days + this.#rate * this.#days * 0.1;
        } else {
            return this.#rate * this.#days;
        };
    };
    static whoWorkedMore(workers){
        
    }
}