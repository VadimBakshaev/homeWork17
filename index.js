import { Worker } from "./worker.js";

const data = [
    'Иван Иванов 02-02-1998 работник',
    'Сидор Сидоров 18-07-1985 работник',
    'Петр Петров 30-09-1989 работник',
    'Андрей Андреев 12-04-1997 работник',
    'Василий Васильев 19-11-2000 работник',
    'Сергей Сергеев 30-12-2002 работник',
    'Александр Александров 05-06-2005 работник',
    'Вася Пупкин 01-01-1994 бригадир'
];

// const worker1 = new Worker('Иван', 'Иванов', '02-02-1998', 'работник');
// const worker2 = new Worker('Сидор', 'Сидоров', '18-07-1985', 'работник');
// const worker3 = new Worker('Петр', 'Петров', '30-09-1989', 'работник');
// const worker4 = new Worker('Андрей', 'Андреев', '12-04-1997', 'работник');
// const worker5 = new Worker('Василий', 'Васильев', '19-11-2000', 'работник');
// const worker6 = new Worker('Сергей', 'Сергеев', '30-12-2002', 'работник');
// const worker7 = new Worker('Александр', 'Александров', '05-06-2005', 'работник');
// const worker8 = new Worker('Вася', 'Пупкин', '01-01-1994', 'бригадир');

// const workers = [worker1,worker2,worker3,worker4,worker5,worker6,worker7,worker8];

const workers = data.map(item => { return new Worker(...item.split(' ')) });

function setWorkDays(brig) {
    brig.forEach(element => {
        element.addDays(Math.floor(Math.random() * 32));
    });
};


setWorkDays(workers);
console.log(workers);