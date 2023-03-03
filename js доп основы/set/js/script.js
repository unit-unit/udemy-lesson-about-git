const arr= ['alex', 'ana', 'joe', 'ana'];

//формируем новый сет
const set = new Set(arr);
console.log(set); //убрался дубль ana

set.add('ivan'); //добавился в сет
set.add('alex'); //алекс не добавился так как он дубль
console.log(set); // результат {'alex', 'ana', 'joe', 'ivan'}

//set.push('olya') пробигается по массиву 
// и добавляет только в том случае если такого значения нет

// set.delete(value); -удалять значение
// set.has(value); - проверять существует ли
// set.сlear(value); - очистить
// set size; размер сета

//перебор данных SET
// 1.вариант for of
for(let value of set){
    console.log(value);
}

set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
});

//set.entries
//set.keys
//set.values

function unique(arr){
    return  Array.from(new Set(arr)); // создаем массив из набора данных (массив пердается в set, 
                                    //в set избавляемся от дублирующих значений,
                                    //  формируем массив с уникальными значениями)
}
console.log(unique(arr));