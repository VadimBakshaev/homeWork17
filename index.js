// импорт модуля Worker
import { Worker } from "./worker.js";

// база работников
const data = [
    'Иван Иванов 02-02-1998 работник',
    'Сидор Сидоров 12-07-1985 работник',
    'Петр Петров 30-09-1989 работник',
    'Андрей Андреев 12-04-1997 работник',
    'Василий Васильев 19-11-2000 работник',
    'Сергей Сергеев 30-12-2002 работник',
    'Александр Александров 05-06-2005 работник',
    'Вася Пупкин 01-01-1994 бригадир'
];

// создаем массив работников/экземпляров класса Worker  
const workers = data.map(item => { return new Worker(...item.split(' ')) });

// случайная генерация отработанных дней
function setWorkDays(brig) {
    brig.forEach(element => {
        element.addDays(Math.floor(Math.random() * 32));
    });
};
setWorkDays(workers);

// меняем ставку отдельным работникам
workers.find(person => person.position === 'бригадир').rate *= 2;
workers.find(person => person.lastName === 'Васильев').rate += 300;
workers[3].rate *= 1.5;

// выводим зарплату работников
workers.forEach(person => console.log(`${person.getFullName()} - ${person.getSalary()} рублей`));

// это просто для удобства, оригинальный массив
console.log(workers);

// Выясняем с помощью whoWorkedMore, кто из работников отработал больше всех дней за месяц.
Worker.whoWorkedMore(workers);
// Выясняем с помощью whoIsYounger, кто из работников самый младший.
Worker.whoIsYounger(workers);