function showFirstFunc() {
    console.log('hi');
}
showFirstFunc(); 

function ret() {
    let num = 50;

    return num;
}

const numFromRet = ret();
console.log(numFromRet);



let usd = 36;
let eur = 40;
let discount = 0.2;

function convert(amount, curr) {
    return curr * amount;
}
function promotion(result) {
    console.log(result * discount);
}

// convert(500, usd);
promotion(convert(500, usd));



function sayHello(name) {
    console.log(name);
    console.log("Привет, " + name + "!");
return "Привет, " + name + "!";
}
sayHello("paul");


function returnNeighboringNumbers(num) {
    console.log(num);
    console.log(num - 1, num, num +1);
return [num - 1, num, num +1];
}
returnNeighboringNumbers(7);




function getMathResult(a, b) {
    let string = '';
    if (typeof(b) !== 'number' || b <= 0) {
        return a;
    }
    for (let i =1; i <= a; i++){
        if (i === b){
            string += `${a * i}`;
        } else{
            string += `${a * i}---`;
        }
    }
    return string;
}
getMathResult(5, 3);