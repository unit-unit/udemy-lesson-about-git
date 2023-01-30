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
    }
};


personalPlanPeter.showAgeAndLangs = function(){
    const {languages} = personalPlanPeter.skills;
    console.log(languages);
    return `Мне ${this.age} и я владею языками: ${this.skills.languages}`;
};
console.log(personalPlanPeter.showAgeAndLangs());