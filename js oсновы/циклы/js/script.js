let num = 50;
while (num <= 60){
    console.log(num);
    num++;
}

let newNum = 40;
do{
    console.log(newNum);
    newNum++;
} while (newNum <=50);

let oldNum = 30;
for(let i = 0; i <= 10; i++){
    console.log(oldNum);
    oldNum++;
}

//task 1
for(let i = 5; i <= 10; i++){
    console.log(i);
}

//task 2
let sum = 20;
for(let i = 1; sum >= 10; i--){
    console.log(sum);
    sum--;
    if(sum === 13) {
        break;
    }
}
// task 3
for (let i = 2; i <= 10; i=i+2){
    console.log(i);
}
//task 4
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let someNum = 3;
do {
    console.log(someNum);

} while(someNum < 16);

