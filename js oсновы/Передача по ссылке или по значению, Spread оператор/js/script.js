let a = 5;
let b = a;

b = b + 5;
console.log(a);
console.log(b);


const obj = {
    a: 5,
    b: 1
};
// такое поведение называется передача по ссылке
const copy = obj; //передача copy идет по ссылки на obj

copy.a = 10; // обращаясь к копи.а мы на самом деле переписываем значение в obj
console.log(copy);
console.log(obj);


// копия(поверхсностная ) 1й СПОСОБ обьекта  
function copyOne(mainObj){
    let objCopy = {};

    for (let k in mainObj){
        objCopy[k] = mainObj[k];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 3,
    c:{
        x: 341,
        y: 1342
    }

};

const newNumbers = copyOne(numbers); //сделали клонирование обьекта, НО обьекты или массивы внутри остаются ссылками
                                                //(то есть, если менять что то внутри них будет меняться и родитель)
newNumbers.a = 10;
newNumbers.c.x = 4; 
console.log(numbers);
console.log(newNumbers);// видим что а изменилось только в новом, но изменение во
                        // вложенном обьекте повлияли на родиля(потому что это поверхсностная копия)

// 2й СПОСОБ object assign
//метод Object позволяет соединить несколько обьектов

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //передаем первый обьект в который мы хотим поместить, 
                                          //второй тот который  помещаем

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

//3й способ копируем массив
const arr = ['a', 'b', 'c'];
const newArr = arr.slice();
newArr[1] = 'change'; // измегяем одну переменную в новом массиве
console.log(arr);
console.log(newArr);

//4й способ Spread оператор
//это три точки перед именем переменной (или константы), внутри определения объекта. 

const video = ['youtube', 'vimeo', 'twitch'];
const socialMedia = ['facebook', 'instagram', 'beReal'];
const internet = [...video, ...socialMedia, 'apex', 'chrome'];
console.log(internet);
//создаем функцию которая будет при помощи спред оператора разкладывать массив
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const someNum = [55, 1, 99];
log(...someNum); // чтобы разложить массив на отдельные элементы


//клонируем при помощие spread
const array = ['a', 'tttt'];
const newArray = [...array];// клонируем при помощи спред оператора
console.log(newArray);

//клонируем object при помощи spread
const q = {
    one: 1,
    two: 2
};
const newQ = {...q};
console.log(newQ);