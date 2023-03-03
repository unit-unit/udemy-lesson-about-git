'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block'); 

console.log(block);  // получаем null, так как элемента block нет в html

// console.log(block.textContent); //дальше код не работает, так как тут в консоли ошибка
//для того чтобы избежать  такого  поведения часто в проблемных местах используют условие


//ПРИМЕР НОМЕР ОДИН
// if(block){ // если блок true тогда выводим консоль
//     console.log(block.textContent);
// }
// console.log(1+2);

//ПРИМЕР НОМЕР  ДВА
//Оператор опциональной цепочки  ?.   проверяет есть ли  значение, если оно undefined или null то возвращает undefined
console.log(block?.textContent); //получаем undefined
console.log(1+2);


//Максимальная польза от оператора ?. когда мы работаем с данными 
const userData =  {
    name : 'Ivan',
    age: null,
    say: function(){
        console.log('hello');
    }
};
userData.hello?.(); //пробуем вызвать несущестующий метод, чтобы не было ошибки
//неудобый способ проверки есть ли оперделнные ключ
// if(userData && userData.skills && userData.skills.js){ 
// console.log(userData.skills.js);
// }

//удобный способ с помощью оператора
console.log(userData.skills?.js);