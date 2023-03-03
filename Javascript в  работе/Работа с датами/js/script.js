//работа с датами

//ситуации где их нужно применять:
//1.измерение время работы какой то функции
//2.для вывода текущей даты, времени
//3.для хранения времени создания или изменения какого то документа
'use strict';

// const now =  new Date(); //в переменную now записываем ткущую дату и время  
// console.log(now);

// const now =  new Date('2020-05-01'); //в аргумент вкладываем  дату, но  время будет 00:00:00
// console.log(now);

// const now =  new Date(2020, 5, 1,  20); //  результат 2020-06-01T18:00:00.000Z
// console.log(now);                        //  месяц идет с 0го месяца, а время учитывает часовой пояс


// const now =  new Date(0); //отсчет идет от 1970 года, 
// console.log(now);           //указывать  надо в мл сек. минус значение будет указывать время до 1970

const now =  new Date();
// основные методы Date, чтобы получать Get
console.log(now.getFullYear()); //получить год
console.log(now.getMonth()); //получаем 2 месяц - это февраль
console.log(now.getDate()); // день
//getHours getSeconds getMilliseconds
console.log(now.getDay()); //4 - это четверг

//еще два метода
console.log(now.getTimezoneOffset()); //получаем в минутах разницу в часовых поясах
console.log(now.getTime());// получаем  колличество мл сек от 1970года, можно получить с  этого числа дату.
                            // если поместить в  аргумент new Date('1677761003568')
///////////////////////////////////////////
///////////////////////////////////////////
//основные метода Set
console.log(now.setHours(40)); // устанавливаем часы  текущей даты
console.log(now);

//иногда попадает метод который такой же как const now =  new Date('2023-02-03');
const someNew = Date.parse('2023-02-03');
console.log(someNew);

////////////////////////////////////////////
//Вычеслить время выполнения задачи
let start = new Date(); //начало нашего скрипта в мс

for(let i = 0; i <  100000; i++){
    let some = i ** 3; //возводим в степень для  замедленяя выполнения
}

let end =  new Date(); //после того  как закончилось выполнение
console.log(`цикл отрбаотал за ${end - start}`); //вычесляем разницу