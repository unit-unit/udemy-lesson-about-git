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

const {border, bg} = options.colors;
console.log(border);
// console.log(options.colors.border);

// delete options.colors.border;
// console.log(options);
// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
//     }
// }
// console.log(counter);

////OBJECT KEYS
console.log(Object.keys(options)); // получаем массив с ключами
console.log(Object.keys(options).length);// получаем колличество ключей