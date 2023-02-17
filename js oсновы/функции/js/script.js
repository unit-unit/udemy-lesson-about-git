const arr = [1, 2, 3, 4];
arr.pop(); // удаляет последний элемент
arr.push(19); // добавляет в конец элемент
//split делает массив
//join перевод массива в строку
//sort сортировка (сортирует все как строки) --- 
// чтобы сортировать числа нужно использовать функцию(сложная тема с алгоритмами)
console.log(arr);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


//плюс этого метода что можно использовать break и continue
for(let k of arr){
    console.log(k);
}


//Метод forEach() выполняет функцию callback один раз для 
//каждого элемента, находящегося в массиве в порядке возрастания. 
arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


//сформировать массив на основании строк
const str = prompt(`введите через запятую продукты которые вам нужны:`);
const products = str.split(", ");
console.log(products);

//с массива сделать строку и указать разделитель
console.log(products.join('; '));

// метод сортировки (по алфивиту хорошо сортирует)( с цифрами есть особенности)
//сортирует все как СТРОКИ (поэтому числа сортирует как строки)
products.sort();
console.log(products);

const num = [5, 1, 21, 99, 100];
num.sort();
console.log(num);

//отсортировать числа с помощью функции
function compareNum(a, b) {
    return a - b;
}
num.sort(compareNum);
console.log(num);