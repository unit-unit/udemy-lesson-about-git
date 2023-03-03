'use strict';

const user =  {
    name: 'alex',
    surname: 'Doe',
    // birtday: '02.02.1922',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
};

//Флаги:
//writable  - если этот параметр будет стоять  в позиции  true, то свойства в обьекте можно будет изменить
                                                     //ecли false, то будет только для чтения
                                                
//enumerable - если true, то свойства будут перечисляться  в циклах
//              если false, то циклы будут  игнорировать

//configurable  - если true, то свойства  можно удалить, а атрибуты изменить
//               если false

console.log(Object.getOwnPropertyDescriptor(user, 'name')); // получаем в консоль все флаги

//изменения параметров 
Object.defineProperty(user, 'name',{writable: false}); //меняем на false, теперь  мы не может редоктировать user

// user.name = 'john'; попытались изменить получили ошибку

//создаем новый параметр через defineProperty
Object.defineProperty(user, 'city', {value: 'NY'}); //создали новой свойство
console.log(Object.getOwnPropertyDescriptor(user, 'city'));

//создадим свойство через defineProperty и устанавливаем  - 
// true для enumerable и configureble(так как изначалено они бы стояли в false)
Object.defineProperty(user, 'birthday', {value: prompt('Your birthday date?'), enumerable: false, configurable: true});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

for (let key in user){
    console.log(key);
}


//теперь чтобы у нас в переборе не было метода showMyPublicData
Object.defineProperty(user, 'showMyPublicData',{enumerable: false});
for (let key in user){
    console.log(key);
}

//configurable если установить false то уже нельзя будет редактировать это значение

//КАК РАБОАТЬ  СРАЗУ С НЕСКОЛЬКИМИ СВОЙСТВАМИ defineProperties

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

//Еще полезные методы 
// Object.freeze(); - жестко замораживает обьект, нельзя добавлять удалять имзенять свойства
// Object.seal(); - нельзя  добавлять  свойства и устанавливет false.НО WRITABLE не  трогается
// Object.preventExtensions(); - нельзя  добавлять новые свойства к  обьекту


//полезный  метод
// Object.is - определяет является ли два значения одинаковыми 

//часто используемые:
// Object.keys -  получае массив ключей обьекта
// Object.values - получаем массив значений обьекта
// Object.entries - возращает  массив, который будет состоять из массивов [['name', 'alex'],['surname', 'Doe']]
