'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');
// console.log(boxesQuery); //NodeList узлы
// console.log(boxesGet);   //HTMLCollection элементы
// //По разному сформировваны структуры и querySelectorAll имеет методы 
// //из-за этого можно работать с ними 


// //есть  живые и статические  коллекции 

// boxesQuery[0].remove();
// boxesGet[0].remove();

// console.log(boxesQuery); //получаем состояние элементов на момент вызова команды(ОНА СТАТИЧНА)
// console.log(boxesGet);   //отслеживает все изменения в DOM дереве и  дает текущий результат(ОНА ЖИВАЯ)

//проверить текущее состояние в массиве 
console.log(Array.from(boxesGet)); //получаем массив

boxesQuery.forEach(box => {
    if(box.matches('.test')){
        console.log('we found box with class text');
        console.log(box); //выводим конкретный бокс
    }
});

console.log(boxesQuery[0].closest('.wrapper')); //ищем первый бокс и  с помощью клозест ищем ближайнего родителя
