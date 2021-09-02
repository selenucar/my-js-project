/*
  {JSON} --> JavaScript Object Notation
  OBJECTS:
  In JS the reference types;
  Function
  Object
  Array
  
  {} is used to create an object
  :  is used to create key-value pairs
  ,  is used to add multiple key-value pairs
  
*/

console.clear();

var fName = 'John'
var lName = 'Cash'
var age = 18

console.log(`${fName} ${lName} ${age}`) // "John Cash 18"


// Creating person object with 3 data
var person = {
  fName:'John',
  lName: 'Cash',
  age: 18,
  isEmployed:true
};

// Calling the data from person object
// NOTE: We can call data using . notation or [] notatio
// . notation is more common

console.log(person) // getting entire person object
console.log(person.fName); // "John"
console.log(typeof(person.fName));// "string"
console.log(person.lName);// "Cash"
console.log(person.age); //18
console.log(person.isEmployed); // true
console.log(typeof(person.isEmployed)); // "boolean"

// calling single data from person using [] notation 
console.log(person['fName']); // "John"
console.log(typeof(person['fName']));// "string"










