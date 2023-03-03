let user = {
    name: 'Ivan',
};

// let map = new Map();
// map.set(user,'data');
// // user = null;

// console.log(map.keys());

//weakMap - слабая карта, в ней ключами могут быть только обьекты
// let map = new WeakMap(); //главное отличие weakMap это то что он понимает что user был удален 
// map.set(user,'data');
// user = null;

// console.log(map.has(user)); //выдает false, так как слабая карта поняла что user удален

///////////////////////
//пример WeakMap
////////////////////

let cache = new WeakMap();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name :'Elena'};
let qq = {name :'aalex'};

cacheUser(lena);
cacheUser(qq);

lena = null;
console.log(cache.has(lena));
console.log(cache.has(qq));

//WeakSet - можем добавлять только обьекты
//add, has, delete

let messages = [
    {text: 'hello', from: 'john'},
    {text: 'world', from: 'doe'},
    {text: 'again', from: 'august'},
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);
messages.shift(); 
console.log(readMessages.has(messages[0])); //получаем true, это означает что находится в структуре данных weakset

