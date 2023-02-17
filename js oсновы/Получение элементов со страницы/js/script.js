//получение элемента по ID.
const box =  document.getElementById('box');
console.log(box);

//получение по тэгу
const btns =  document.getElementsByTagName('button'); //получаем псевдомассив коллекцию 
                                                        // из всех элементов со страницы button
console.log(btns[4]); //btns получим все button, btns[4] получим 5 элемент из коллекции


const btnsSec =  document.getElementsByTagName('button')[1]; //получам из коллекцию под номером 2 button
console.log(btnsSec);

//по классу
const circle = document.getElementsByClassName('circle');
console.log(circle);

//ищем в определенном элементе
// const lastHeart =  wrapper.querySelector('.heart'[3]); //но сначала надо получить  wrapper
                                                            // const wrapper = document.querySelector('wrapper');
//  ///////////////////////////////////////////
// БОЛЕЕ СОВРЕМЕННЫЕ МЕТОДЫ ПОЛУЧЕНИЯ ЭЛЕМЕНТОВ


const hearts = document.querySelectorAll('.heart'); // в скобках () помещаем класс из css.
                                                // Обязательно ставим '.' перед классом
console.log(hearts); // получаем коллекцию 
//querySelectorAll имеет метод forEach
hearts.forEach(item => {
    console.log(item); //выводим с  помощью перебора forEach в консоль все элементы c псевдомассива hearts 
});

//получаем первый со страницы с классом 
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

// ///////////////////////////////////////////
//////////////////////ДЕЙСТВИЕ С ЭЛЕМЕНТАМИ///
// ///////////////////////////////////////////

// box.style.backgroundColor = 'purple'; //меняем стили через js
// box.style.width  = '500px';

btns[1].style.borderRadius = '50%';

// записать несколько стилей сразу
box.style.cssText = 'background-color: green; border-radius: 15%';


// Перебераем все элементы и добавляем стили
//Первый способ
// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = "aqua";
// }
// Второй способ
hearts.forEach(item =>{
    item.style.backgroundColor = "aqua";
});


// //////////////////////////
// СОЗДАЕМ ПЕРЕМЕННЫЕ НА ЛЕТУ

const  div  = document.createElement('div'); // элемент создан и он существует только внутри js
// const text = document.createTextNode('какой то текст');// текст появится на  у нас на стрнц (редко использ)
// console.log(text);

div.classList.add('black'); // добавили класс из css к новосозданному диву
document.body.append(div); // добавляем наш див на страницу body.append - конец body

document.querySelector('.wrapper').prepend(div);//при помощи querySelector указываем где будем вставллять div
// еще варианты поместить див
hearts[0].after(div);// есть  еще before

circle[0].remove(); //удалит первый кружочек 

hearts[0].replaceWith(btns[4]); // заменяем первое  сердце, кнопкой

// ///////////////////////////////
/////Устаревшие команды!!!!!!!!!!!
///////////////////////////////////
// wrapper.appendChild(div); тоже  самое что append
//wrapper.insertBefore(div, box); // в первую переменнгую что  вставляем, вторая перед чем
// wrapper.removeChild(hearts[1]); удалить элемент



//////////////////////////////
//////////Вписать текст
//первый вариант:
div.innerHTML = "<h3>Hello div</h3>"; // вписывает текст в div
//второй вариант:
btns[2].textContent = "<3"; //работает только с текстом html структура не подойдет <h3></h3> например

//встравляем определенный html код 
div.insertAdjacentHTML("beforebegin", '<h2>call</h2>'); //beforebegin перед элементом, 
                                                        //  afterbegin 
                                                        // аfterend после элементра 
                                                        // before end 