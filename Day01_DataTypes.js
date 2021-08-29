console.clear();
/*
Primitive Data Type in JS
string, number, boolean, null, undefined
*/
var myName = 'javascript'
console.log(typeof(myName)); // "string"

var myName = "java"
console.log(typeof(myName)); //"string"

/*
Number literal:
we only have number data type. No int, double, byte,..
*/

var myNumber = 20;
console.log(typeof(myNumber)); // "number"

var myNumber = 20.9;
console.log(typeof(myNumber)); // "number"

var myNumber = 20/0;
console.log(myNumber); // Infinity
console.log(typeof(myNumber)); // "number"

var num1 = 20+'a';
console.log(num1); // "20a"
console.log(typeof(num1)); // "string"


var num2 = 'a'+20;
console.log(num2); // "a20"
console.log(typeof(num2)); // "string"

/*
boolean:
True or False
*/

var isExist = true;
console.log(isExist); // true
console.log(typeof(isExist)); // "boolean"

var isExist = false;
console.log(isExist); // false
console.log(typeof(isExist)); // "boolean"

/*
null
*/
var pickedColor = null;
console.log(pickedColor); // null
console.log(typeof(pickedColor)); // "object"

/*
undefined
*/
var selectedCar;
console.log(selectedCar); // undefined
console.log(typeof(selectedCar)); // "undefined"

// it says: It's not necessary to initialize 
// 'selectedCar' to 'undefined'.
var selectedCar = undefined;
console.log(selectedCar); // undefined
console.log(typeof(selectedCar)); // "undefined"