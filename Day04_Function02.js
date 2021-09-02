/*
  FUNCTIONS:
  perform an action
  calsulate a value
**/
console.clear();

// calling the function we create below
add(2,5);//7

// declaring function
function add(x,y){
  console.log(x+y);
}

add(4,6); // 10

// function = keyword, add = name of the function
// we can create function with no name 
//--> called anonymous  function and put in a variable
//--> the function does not have name to call we assign it to sum
var sum = function(x,y){ 
  console.log(x+y)
}
// calling the function
sum(7,8);//15

// sum(7,8)+5; --> we cannot add 5 next to "sum(7,8)" because it is a function
sum(); // NaN
sum(7,8,100); //15

//create anonymous function with 3 params
//then put result in a variable named total
//call the fucntiomn to print the result

var total = function (a,b,c){
  console.log(a+b+c);
}
total(1,2,3);

