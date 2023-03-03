const user = {
    name: 'Alex',
    surname: 'Doe',
    birthday: '20.20.20',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
};

for(const key in user){
    console.log(user[key]);
}

const arr = ['b', 'a', 'c'];

for(const key in arr){
    console.log(arr[key]);
}

const str = 'string';
for(const key in str){
    console.log(str[key]);
}

//FOR IN - перебирает не обязательно по порядку, поэтому   не рекомендуется его использовать
//          на массивах и строках

//FOR OF - если взять такой пример:
    // const arr = ['b', 'a', 'c'];

    // for(const key of arr){
    //     console.log(key); разница тут между for in получает  сам ключ
    //                                          for of получает  значение
    // }
//ТО 



//Как сделать обьект перебираемым через for of
const salaries = {
    ivan: 500,
    nastya: 1000,
    bogdan: 5000,
    sayHello: function(){
        console.log('hello');
    }
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.ivan,
        last: this.bogdan,

        next(){
            if(this.current < this.last){
                this.current = this.current + 500;
                return{done: false, value: this.current};
            }  else {
                return {done: true};
            }
        }
    };
};

for(let res of salaries){
    console.log(res);
}