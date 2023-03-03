// Nullish  -  оператор нулевого слияния
//нужен для работы с false и NaN
'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h}px`;
    elem.style.width = `${w}px`;
    elem.innerHTML = (h  ??  200) * (w ?? 200); //выводим площадь div 
}

changeParams(box, newHeight, newWidth);

let userName = 0;
console.log(userName ?? 'User'); //если будет  Null или undefined 
                                //  будет вовращен второй результат
                                //но если false или NaN  то вернет false или NaN

///поэтому если мы напишем функцию где const newHeight = 0; То наш  див изчезнет
// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }

// changeParams(box, newHeight, newWidth);