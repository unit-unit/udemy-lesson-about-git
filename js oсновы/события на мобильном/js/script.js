//touchstart касание к элементу
//touchmove  при перемещенние пальца
//touchend оторвался  от элемента
//touchenter как только палец зашел на пределы элемента
//touchleave палец ушел за пределы элемента
//touchcancel палец вышел  за пределы экрана

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    box.addEventListener('touchstart',(e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches);
    });
    box.addEventListener('touchmove',(e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);  //отследить координаты
    });
    box.addEventListener('touchend',(e) => {
        e.preventDefault();

        console.log('touchend');
    });
});

//touches - список всех пальцев которые сейчас взаимодествуют с экраном
//targetTouches - все пальцы которые взаимодействуют с конкретным элементом
//changedTouches - список пальцев которые учавствуют с текущем событии