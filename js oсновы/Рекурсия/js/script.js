// пишем функцию возведения в степень  при помощи перебора

// function pow(x, y){
//     let result = 1;
//     for(let i = 0; i < y; i++){
//         result *= x;
//     }
//     console.log(result);
//     return result;
// }
// pow (2, 5); 
////////////////////////////////////////////////////////

// а теперь эта же функция только РЕКУРСИЯ
function pow(x, y){
    if(y === 1){
        return x;
    } else {
        return x * pow(x, y - 1); //функция запускается внутри себя но с уточнение y-1
    }
}
pow (2, 4); 

//Рекурсия состоит:
//база рекурсии
//шаг рекурсии
//глубина рекурсии  

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
let students = {
    js: [{
        name:'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html : {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],

        pro :[{
            name: 'Sam',
            progress: 10
        }]
    }
};
//При помощи перебора находим среднее значение progress 
function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;
    //Object.values - возвращает массив значений  с обьекта
    for(let course of Object.values(data)){
    //Array.isArray - вовращает true если обьект является массивом
        if(Array.isArray(course)){
            students += course.length; //считаем колличество студентов

            for(let i = 0; i < course.length; i++){
                total += course[i].progress; // находим значение progress
            }
        } else {
            //теперь нам надо получить значение с обьектов
            for(let subCourse of Object.values(course)){
                students += subCourse.length;

                for(let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress; // находим значение progress
                }
            }
        }
    }

    return total  / students;
}
console.log(getTotalProgressByIteration(students));
/////////////////МИНУС ЭТОГО ПРИМЕРА, что он рассчитан только на такую структура обьекта.


//ВАРИАНТ  С РЕКУРСИЕЙ 
function getTotalProgressByRecursion(data) {
    if(Array.isArray(data)) {                 // если массив 
        let total = 0;

        for(let i = 0; i < data.length; i++){
            total += data[i].progress; 
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for(let subData of Object.values(data)){ //делаем перебор обьекта, мы теперь знаем что тут будет только обьект
             const subDataArr = getTotalProgressByRecursion(subData); // каждый раз будет запускаться рекурсия и она
                                                                    //будет внутри себя запускаться пока она не дойдет 
                                                                    //до базы
             total[0] +=  subDataArr[0];
             total[1] +=  subDataArr[1];
             }
             
             return total;
        }
    }
const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);