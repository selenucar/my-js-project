/*
  FUNCTIONS:
  perform an action
  calsulate a value
  
*/
console.clear();

// creating function
function sum(){
  var num1 = 5;
  var num2 = 4;

//   return num1+num2;
  var total = num1+num2;
  return total;
}

// calling function
console.log(sum()); //9
// OR
const result = sum() + 10;
console.log(result); //19

// Creating a function
function square(s){
  return s*s;
}
// using the function
console.log(square(8));

// console.log(square()); // NaN --> Not a Number
//
console.log(square(3,4,true,'javascript')); // s=3, -> s*s -> Result = 9
//
const result1 = square(8)-1
console.log(result1); // 63


// function addNumbers(num1, num2, num3){
//   return num1 + num2 + num3;
// }
// console.log(addNumbers(2, 3, 4)); //9

// WE can assign DEFAULT  values in the function parameter
function addNumbers(num1=2, num2=3, num3=4){ // --> we assign default values
  return num1 + num2 + num3;
}
console.log(addNumbers());// 9 --> default value
console.log(addNumbers(1, 2, 3)); // --> overwriting : 1+2+3=6 (we did not use default value here)
console.log(addNumbers(5, 6)); // --> 5+6+4=15 ( 4 -> comes from default value

