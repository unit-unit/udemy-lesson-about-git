// У вас есть готовый объект с данными. Разработчик Х
//  хочет написать часть функционала, но ему не хватает 
//  навыков. Выполните часть заданий за него.

// Задачи:

// 1) Напишите функцию showExperience, которая будет 
// приниматьв себя объект со всеми данными и возвращать
//  строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, 
// но не обязательно



// function showExperience(plan) {
//     let str = '';
//     for(let  key in plan){
//        if(typeof(plan[key]) === 'object'){
//         for (let i in plan[key]){ 
//             if(i === 'exp'){
//                 str = plan[key][i];
//                 console.log(plan[key][i]);
//             }
//         }
//        }
//     }
//     console.log(`"${str}"`);
//     return `${str}`;
// }

// showExperience(personalPlanPeter);

// 2) Напишите функцию showProgrammingLangs,
//  которая будет принимать в себя объект со всеми
//   данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"




// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return str;
// }
// showProgrammingLangs(personalPlanPeter);


// Причем функция должна работать вне зависимости 
// от количества языков. Если ни один не указан,
//  то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта 
// personalPlanPeter. При его вызове метод будет принимать
//  в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически
//  из объекта, а языки всегда в верхнем регистре 
//  (большими буквами). Если данные в объекте поменяются, 
//  то и сообщение тоже изменится.


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};


// 1) Напишите функцию showFamily, которая будет принимать 
// в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если 
// массив пустой, то выводится сообщение 'Семья пуста'
const faam = [];
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// family.forEach(showFamily);

function showFamily(arr) {
    let str = 'Семья состоит из: ';
    if (arr.length >0) {
     str += arr.join (' ');
     console.log(str);
     return str;
    } else {
        str = 'Семья пуста';
        console.log(str);
        return str;
    }
}

showFamily(faam);


// 2) напишите функцию standardizeStrings, 
// которая будет принимать в себя массив строк и 
// будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

// Это частая задача в реальности, так как от 
// пользователя нам могут прийти ответы в самых разных форматах. 
// В том числе и с разными буквами :) Поэтому нам нужно привести
//  строки в один формат для правильной работы.


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let i of arr){
        console.log(i.toLowerCase());
    }
}
standardizeStrings(favoriteCities);


// 3) Задача с собеседований. Напишите функцию reverse, 
// которая принимает в себя строку и возвращает эту строку в 
// обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит 
// не строка - вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';
const num = 0;

function reverse(str) {
   let newString = "";
   if (typeof(str) === 'string'){ 
        for(let i = str.length - 1; i >= 0; i--){
        newString += str[i];
        }
   console.log(newString);
   return newString;
    } else {
        return "Ошибка!";
    }
}

reverse(num);


// 4) Представьте такую реальную ситуацию. 
// У вас есть банкомат, который выдает деньги из двух разных банков 
// в разных валютах. Один банк основной с базовыми валютами, 
// второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, 
// которая принимает два аргумента: 
// первый - это массив со  всеми доступными валютами
//  из двух банков сразу (сейчас представим, что они не могут повторяться), 

// второй - необязательный аргумент, который указывает ту валюту,
//  которая сейчас закончилась в банкомате. 
//  Если массив в первом аргументе пустой -
//   то функция возвращает строку 'Нет доступных валют'. 
//   Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
//     Доступные валюты:
//     UAH
//     RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, 
// значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и 
// после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу
//  из двух банков, причем сначала baseCurrencies, 
//  потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = baseCurrencies.concat(additionalCurrencies);
const missingCurr = 'EUR';
const helpY = [];

function availableCurr(arr, missingCurr) {
    let str ='';
    if (arr.length == 0){
        console.log(`Доступные валюты:\nНет доступных валют`);
        return `Доступные валюты:\nНет доступных валют`;
    } else {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === missingCurr){
                continue;
            }
            str += `${arr[i]}\n`;
        }
        console.log(`Доступные валюты:\n${str}`);
        return `Доступные валюты:\n${str}`;
    }
}
availableCurr(helpY, missingCurr);

