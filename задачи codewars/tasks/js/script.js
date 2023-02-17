let string = 'abcdefg';

function solution(str){
    let result = [];
    for(let i = 0; i < str.length; i = i + 2){
      console.log(`${str[i]}${str[i+1]}`);
      result.push(`${str[i]}${!!str[i+1] ? str[i+1]:'_'}`); // 
    }
    console.log(result);
    return result;
  }
  solution(string);

//   Your task is to make a function that can take any non-negative integer 
//   as an argument and return it with its digits in descending order. 
//   Essentially, rearrange the digits to create the highest possible number.

let number = 153;
function tt(n){
    let result = 0;
    let arr = [];
    let numbersString = n.toString().sort;
    console.log(numbersString);
    // for(let i = 0; i < numbersString.length; i++){
    //   console.log(numbersString[i]);
    
    // }
    
}  
tt(number);