//ЕС 6 был введен новый тип данных  Symbol
//symbol нужен для  того чтобы  создавать уникальыне индификаторы
//symbol применять  к свойствам обьекта

const obj =  {
    name: 'Test',
};

let id = Symbol("id");
obj[id] = 1; //это обьекту назначаем новое свойство
console.log(obj[id]);

//если  создать  переменную с таким  же symbol  "id".
//  то первая и вторая переменные не равны.Так как символы УНИКАЛЬНЫ