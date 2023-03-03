const user = {
    name: 'Alex',
    surname: 'Doe',
    birthday: '20.20.20',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
};
console.log(user);

// console.log(typeof(Object.keys(user)[0])); //обращаемся к первому ключу и узнаем тип данных


//////////////////////////////////////////////////
const shops = [
    {shoes: 400},
    {tShirt: 200},
    {shorts: 40},
];
//Ключи Обьектами не могут  быть и вот здесь приходит MAP
//MAP называются специфичиские структуры  данных которые 
//        очень похожи  на обьект, только у них  вместо свойств может
//        использоваться и обьект и массив и функция

const budget = [500,500,500];

const map = new Map(); //у Map есть свои методы
console.log(map.set(shops[0], budget[0])); //проверяем хватает ли бюджета для конкретного магазина
//проверяем с помощью цикла сразу все магазины и их бюджеты
shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});


console.log(map); // мы видим что теперь обьект в обьекте, а не как было обьект в массиве
console.log(map.get(shops[0]));
console.log(map.has(shops[0])); //проверить существует ли обьект
// map.delete(key);   -  удалить
// map.clear(); - очистить
// map.size; - колличество элементов на данный момент 
// map.keys(); - перебор
// map.values
// map.entries


//перебрать map 
for (let shop of map.keys()){
    console.log(shop);
}

//создать map из обьекта можно  при помощи map.enteries
const userMap = new Map(Object.entries(user));
console.log(userMap);

//Главные отличия у Map  и object
//1. У карт ключи могут быть чем угодно, у обьектов только  могут быть строки
//2. порядок свой в  картах  такой в каком мы их добавляли
//3. при создании карты ничего не будет  содержаться
//4. карты более легко  перебрать