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
    console.log(+n.toString().split('').sort().reverse().join(''));
    //toString  числа переводим в строку
    //split     возвращает новый массив "1", "5", "3"
    //sort      сортируем массив 
    //reverse   переворачиваем массив
    //join      обьединяем все элемента в строку
    return +n.toString().split('').sort().reverse().join('');
    
}  
tt(number);

// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

const arrTelephone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
  const codeNumbers = numbers.slice(0, 3).join('').toString();
  const firstPartOfTel = numbers.slice(3, 6).join('').toString();
  const secondPartOfTel = numbers.slice(6, 10).join('').toString();
  return `(${codeNumbers})  ${firstPartOfTel}- ${secondPartOfTel}`;
}
createPhoneNumber(arrTelephone);

// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123];

const arrayOfNumAndStr = [1,2,'aasf','1','123',123];
// function filterList(l) {
//   // Return a new array with the strings filtered out
//   const newArray = [];
//   for(let i of l){
//     if (typeof(i) === 'number'){
//     newArray.push(i);
//     }
//   }
//   return newArray;
// }

function filterList(l) {
  // Return a new array with the strings filtered out
  return l.filter(function(v){
    return typeof v == 'number';
  });
}

filterList(arrayOfNumAndStr);

// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built 
// with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c){
  if(a+b>c && a+c>b && b+c>a){
  return true;
  } else{
    return false;
  }
}

// Given an array of ones and zeroes, convert the equivalent binary value 
// to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
const arrBinary = [1, 0, 0, 1];
const binaryArrayToNumber = arr => {
  
  console.log(parseInt(arr.join(""), 2));
  return parseInt(arr.join(""), 2);
// let mnoj=[1];
// for (let i=1; i<arr.length; i*2){

// }

};
binaryArrayToNumber(arrBinary);

// Pete likes to bake some cakes. He has some recipes and ingredients.
//  Unfortunately he is not good in maths. Can you help him to find out,
//   how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available
//  ingredients (also an object) and returns the maximum number of cakes 
//  Pete can bake (integer). For simplicity there are no units for the amounts 
//  (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
//  Ingredients that are not present in the objects, can be considered as 0.


// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1},
//{flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
//{sugar: 500, flour: 2000, milk: 2000});
const cake = {flour: 500, sugar: 200, eggs: 1};
const recipeCake = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

function cakes(recipe, available) {

  //через массивы includes можно  узнать есть ли все ингридиенты
  const keyRecipe = Object.keys(recipe);
  const keyRecipeCake = Object.keys(available);
  for(let key of keyRecipeCake){
    console.log(key);
  }
  // return
}
cakes(cake, recipeCake);

//попробовать map



// A child is playing with a ball on the nth floor of a tall building. 
// The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces
//  (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window 
// (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer,
//  otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball 
// is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  let count = 0;
    if(h <= 0 || window > h || (bounce <= 0 || bounce >=1)){
      console.log('-1');
      return -1;
    } else {
      for(let i = 0; h > window; i++){
        h = h * bounce;
        console.log(i);
        count=count +2;
      }
      console.log(count);
      return count - 1;
    }
  }
bouncingBall(3, 0.66, 1.5);


// You are going to be given an array of integers. Your job is to take that array 
// and find an index N where the sum of the integers to the left of N is equal to 
// the sum of the integers to the right of N. If there is no index that would make 
// this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the
//  3rd position of the array, the sum of left side of the 
//  index ({1,2,3}) and the sum of the right side of the index
//   ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because 
// at the 1st position of the array, the sum of left side of the index 
// ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index 
// of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be 
// any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right 
// of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.


function findEvenIndex(arr) {
  let sum = 0;
  //Code goes here!
  for(let i = 1; i < arr.length; i++){
    sum += arr[i];
    console.log(sum);
    if(sum == 0){
      console.log(arr[0]);
      return arr[0];
    }
  }
}
findEvenIndex([1,2,3,4,3,2,1]);