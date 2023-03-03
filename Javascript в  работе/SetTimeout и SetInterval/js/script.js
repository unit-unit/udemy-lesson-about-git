const timerId = setTimeout((text) => {
    console.log(text);
},2000, 'hello');

//////////////
// function logger(){
//     console.log('text');
// }

const anotherTimer = setTimeout(logger, 2500);

///Сбросить setTimeout
clearInterval(timerId);

//делаем setInterval если кликнули по кнопке и останавливаем
const btn = document.querySelector('button');
let timer;
let i = 0;
btn.addEventListener('click', ()=>{
    timer = setInterval(logger, 2000); //каждые 2 секунды будет срабатывать интервал
});


function logger(){
    if(i === 3){ //три раза отработает и остановиться 
        clearInterval(timer); //останавливаем интервал
    }
    console.log('text');
    i++;
}

///рекурсивный вызов setTimeout
let k = 0;
let id = setTimeout(function log () {
        console.log('hello');
        id = setTimeout(log, 500); //рекурсия нужна для того чтобы мы строго ждали выполнения функции, 
                                //а потом только срабатывал таймаут
}, 500);
//В этом и отличие рекурсии, что она четко устанавливает рамки. Это нужно для того
//                                                              чтобы если сама функция 'тяжелая' мы ее дожидалис


/////////////////////////////////
///////Реализовываем анимацию////
/////////////////////////////////

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame(){
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);