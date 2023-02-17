//TO STRING
// способы:
console.log(typeof(String(null))); //null становится string
console.log(typeof(String(4))); //4(number) становится string\
console.log(typeof(4 + "123")); //при сложении со  строкой, будет строка
// /////////////////////////////////////////////////

//TO NUMBER
// способы:
console.log(typeof(Number('4'))); 
console.log(typeof(+'5'));
console.log(typeof(parseInt("14px")));


//все что мы получаем от пользователя, значение всегда будет строка
let answ = +prompt("what is  your age?"); // пример как значение пользователя сразу переводить в  number
// ///////////////////////////////////////////////////

//TO BOOLEAN
// false - 0, '', null(абсолютное ничего), undefined(что-то без значения), 
//         NaN(спец значение числового типа)
// true - остальное

let switcher = null;

if(switcher) { // приходит false, условие не выполняется 
    console.log('working...');
}

switcher = 1;
if(switcher) { // приходит true, условие  выполняется 
    console.log('working...');
}


console.log(typeof(Boolean('4')));// получаем тип данных boolean
console.log(typeof(!!"123")); // !! превращает в boolean

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result);