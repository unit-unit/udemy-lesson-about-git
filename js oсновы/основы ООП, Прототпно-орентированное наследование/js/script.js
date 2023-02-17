let str = 'zxc';
// let strObj = new String(str); //(делаем копию строки) 
                            //при использовании методов строка становится обьектом
                            //вначале строку обворачивает в обьект, потом использует метод(в нашем случае String)
console.log(typeof(str));
console.log(typeof(strObj));


const car = {
    color: 'white',
    wheels: 4,
    logo: 'yes'
};
console.log(car);

const myCar = {
    color: 'blue'
};
//берем car как прототип для myCar. myCar наследует все свойства от car
// myCar.__proto__ = car; // старый метод, уже НЕ ИСПОЛЬЗУЮТ 
// console.log(myCar.logo); //проверяем по лого

// Современный метод
Object.setPrototypeOf(myCar, car); // указываем в первом прототип, вторым кого устанавливаем прототипом

console.log(myCar.logo);

//еще метод прототиного наследования 
const friendCar = Object.create(car);//сделали наследование
console.log(friendCar.color); //проверяем работу