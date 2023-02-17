// Задача:

// У вас есть небольшой кусочек данных о торговом центре, 
// которые записаны в объекте shoppingMallData. 
// Они содержат массив с данными о магазинах, 
// где указана длина и ширина помещения; высоту помещения; 
// стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough,
//  которая буде возвращать строку. Если бюджета хватает для отопления 
//  всего объема торгового центра - выводится 'Бюджета достаточно', 
//  если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, 
// которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, 
// так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, 
// даже если изменяется количество магазинов, 
// высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

let square = 0;
let money = 0;
let volume = 0;

function isBudgetEnough(data) {
    data.shops.forEach(function(shop){
        square += shop.width * shop.length;
    });
    volume = square * data.height;
    money  = volume * data.moneyPer1m3;
    console.log(money);
    if (money >= data.budget){
        console.log('Бюджета достаточно');
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
isBudgetEnough(shoppingMallData);


// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив 
// строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному 
// порядку.
//  Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й 
// элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. 
// Просто распишите логику действий строка за строкой.


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];


function sortStudentsByGroups(arr) {
    arr = arr.sort();
    let teamOne = arr.slice(0,3);
    let teamTwo = arr.slice(3,6);
    let teamThree = arr.slice(6,9);
    let otherPlayer = `Оставшиеся студенты: ${arr.slice(9, ).join(', ')}`;

    // otherPlayer.join(', ');
    if (arr.length > 9) {
        let result = [teamOne, teamTwo, teamThree, otherPlayer];
        console.log(result);
    return result;
    } else if(arr.length === 9){
        let result = [teamOne, teamTwo, teamThree, 'Оставшиеся студенты: -'];
        console.log(result);
        return result;
    }
}
sortStudentsByGroups(students);




// var myString = 'Привет, мир. Как дела?';
// var splits = myString.split(' ', 3);

// console.log(splits);

// var str = 'фывапролд';
// var strReverse = str.split('').reverse().join(','); // 'длорпавыф'
// console.log(strReverse);
// // split() возвращает массив, к которому применяются методы reverse() и join()