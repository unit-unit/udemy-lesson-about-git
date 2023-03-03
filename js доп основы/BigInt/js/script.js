console.log(Number.MAX_SAFE_INTEGER); //максимальное число

//если нам приходится использовать число больше максимального, то используем
//BigInt

const bigInt = 12333333123123123123213213213213n; //ставим в конце букву n, указывая что это число больше максимального 

const sameBigint = BigInt(12333333123123123123213213213213); // с помощью команды

console.log(typeof(bigInt)); //тип данных BigInt

// console.log(21n + 5); //нельзя смешивать данные bigInt и другие 


let oneBigint = 1n;
let num = 2;
console.log(oneBigint + BigInt(num)); // получаем тип данных BigInt и результат 3n
console.log(Number(oneBigint) + num); //получаем тип данных Number
