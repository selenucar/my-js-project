/*
Sread Operator(... operator)
Spread operator is used to spread out data from arrays, objects or functions
... is used in front of the arrays
We can use spread operator:
1. functions calls
2. array literals
3. objects literals
*/

console.clear()

// 1. functions
var minNum = Math.min(45,32,19,100,25);
console.log(minNum); // 19.  because data is spread out. 5 different items

const tempratures = [45,32,19,100,25];
minNum = Math.min(tempratures)
console.log(minNum); // NAN Because tempratures is one single argument

// usong spread operator
minNum = Math.min(...tempratures);// same as Math.min(45,32,19,100,25);
console.log(minNum); //19

//We can use spread operator with strings
const favActors=["Jim", "Angelina", "Jack"]
console.log(favActors); // ["Jim", "Angelina", "Jack"]
console.log(...favActors); //"Jim", "Angelina", "Jack"

//
const myFavNumber = "8145941";
console.log(Math.min(myFavNumber)); //8145941
console.log(Math.min(...myFavNumber)); //1
//We can pass strings directly in functions with spread operator
console.log(Math.max(..."234521234720")); //7




//WARM UP QUESTION:
//write a code that return a random item from the array


let myArray=[3,10,'java','usa','javascript','dallas']


let randomItem = myArray[Math.floor(Math.random()*myArray.length)] 

console.log(randomItem);