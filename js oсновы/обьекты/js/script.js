// ОБЬЕКТЫ И ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТОВ ЕS6

const options = {
    name : 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
};
options.makeTest();

const {border, bg} = options.colors; //деструктуризация, вытащили с обьектра значения
console.log(border); // смотрим свойство которое вытащили, но только одно. Еще может глянуть bg
// console.log(options.colors.border); - достучаться через ключ  к значению
// delete options.colors.border; - удалить ключ и значение
////OBJECT KEYS
// console.log(Object.keys(options)); // получаем [массив] со всеми ключами obj options
// console.log(Object.keys(options).length);// получаем колличество ключей в  obj options


// Перебрать все свойства(ключи и значение) внутри обьекта 
for (let key in options){
    if (typeof(options[key]) === 'object'){ // проверяем есть ли в значених обьект
        for (let i in options[key]){        // делаем внутри перебор обьекта который нашли
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
    console.log(`свойство ${key} имеет значение ${options[key]}`);
    }
}

/// пробный обьект
const adress = {
    country : 'Ukraine',
    city : 'Odessa',
    street: 'Leontovich'
};
for (let k in adress){
    // console.log(k); ------- получаем ключ
    // console.log(adress[k]);  -------- получаем значение 
    console.log(`my ${k} is ${adress[k]}`);
}

console.log(Object.keys(adress));
console.log(Object.keys(adress).length);