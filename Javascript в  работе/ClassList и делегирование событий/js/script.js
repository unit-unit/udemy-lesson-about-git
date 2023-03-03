const btns = document.querySelectorAll('button');
console.log(btns[0].classList.length); // узнам колличество классом у элемента
console.log(btns[0].classList.item(0)); //получаем 1й класс, первой кнопки 
console.log(btns[0].classList.add('red')); //добавили класс к первой кнопке
console.log(btns[0].classList.remove('blue')); //удалили класс по имени
console.log(btns[0].classList.toggle('blue')); //проверяем есть ли класс blue, если нету то добавляем,
//                                                                             если есть то удаляем

//провеяем через условие наличие класса у кнопки
console.log(btns[1].classList.add('blast')); //добавляем второй кнопке класс blast

if(btns[1].classList.contains('blast')){ //проверяем есть ли класс бласт у второй кнопки
    console.log('class "blast"');
}


///////////////////
//первый способ
btns[0].addEventListener('click', ()=> {      //делаем событие клик на первую кнопку
    if(!btns[1].classList.contains('red')){   //проверяем если у второй кнопки нет класс red то:
        btns[1].classList.add('red');         //мы его добавляем
    } else {                                  //если класс red есть
        btns[1].classList.remove('red');      //то мы его удаляем
    }
});
//второй способ
btns[0].addEventListener('click', ()=> {      
    btns[2].classList.toggle('purple');       //тогле делает то что мы делали в 1м способе
});

//////////////////////////////////////////////
//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ///////////////////////
//////////////////////////////////////////////

const wrapper = document.querySelector('.btn-block');
wrapper.addEventListener('click',(event) => {
    console.log(event.target);
    if(event.target && event.target.classList.contains('red')){ // еще есть вариант event.target.matches('button.red')
        console.log('Hello');
    }
});

//создадим новую кнопку чтобы проверить работает ли делегирование
const newBtn = document.createElement('button');
newBtn.classList.add('red');
wrapper.append(newBtn); //обращаемся к wrapper и говорим вставить кнопку в конце 