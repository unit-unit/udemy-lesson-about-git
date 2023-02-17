//первый способо посмотреть в html button 1
// лучше не использовать

// Второй способ тоже не актуальый
const mainHeader = document.querySelector('h1'); 
// console.log(mainHeader);

// mainHeader.onclick = function() { 
//     alert('click');
// };



// addEventListener и removeListener
//реакция на клик по элементу
mainHeader.addEventListener('click', () => {
    alert('click');
});

mainHeader.addEventListener('click', () => {
    alert('Second click');
});
// + этого метода что корректно работает несколько событий 


// наведение мышки на элемент
mainHeader.addEventListener('mouseenter',(e) => { // в функцию е -  это обьект события
    console.log(e); // смотрим что произошло с обьектом в консоли
    console.log(e.target); //показывает в консоли элемент на который  навели
    console.log('mouse on the h1');
});

//удаление элемента с страницы
const hearts = document.querySelectorAll('.heart'); // находим все элементы с классом heart
hearts[2].addEventListener('click', (e) =>  {       // обращаемся к 3му сердцую. делаем событие click
    e.target.remove();                              //e.target определяем элемент и remove его удаляет
});


const deleteElement = (e) => {   //создаем функция которая будет удалять элемент
    e.target.remove();
};
hearts[1].addEventListener('click', deleteElement); //обращаемя ко второму сердцу.ставим событие клик.
                                                    // вызываем функцию deleteElement

//вариант как можно использовать removeListener
const cirlesOne = document.querySelector('.circle');

let i = 0;
const oneClick = (e) => {
    console.log(e.target);
    i++;                         //после клика i растет на один
    if (i == 1){                 //как i равно одному. позволяет сделать чтобы один  раз выводился click
        cirlesOne.removeEventListener('click', oneClick); //удаляем оброботчик
    }
};

cirlesOne.addEventListener('click', oneClick);

//ВСПЛЫТИЕ СОБЫТИЙ 
//срабатывает сначала на самом вложенном элементе,  потом на родителе и дальше выше и выше



//ОТМЕНИТЬ СТАНДРАТНОЕ ПОВЕДЕНИЕ БРАУЗЕРА
const link = document.querySelector('a'); //находим ссылку

link.addEventListener('click', (e) => {  
    e.preventDefault();   // первым делом отменяем стандратное поведение браузера
    console.log(e.target); //s теперь мы не переходим по ссылки, а выполняем действие.Выводим в консоль выводим элемент
});


//Работь сразу с несколько элементами
const btns = document.querySelectorAll('button'); //получили все button
btns.forEach(btn =>{                              //делаем перебор. Где возращается каждая кнопка
    btn.addEventListener('click', oneClick,{once: true}); // once это опция которая будет происходит только раз
});