/*
  ARRAYS:
*/
console.clear();
var fruits = ['apple', 'orange', 'banana', false, 10]

console.log(fruits); // ["apple", "orange", "banana", false, 10]



/* 7. splice is used to delete or insert(add) items in any index in an array
Practice link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  splice(1) // delete everything after the first index()
  splice(start, deleteCount)
  splice(start, deleteCount, item1)
  splice(start, deleteCount, item1, item2, itemN)
*/

fruits.splice(2,1);
console.log(fruits);  // ["apple", "orange", false, 10]

fruits.splice(1,0, "kivi", "peach");
console.log(fruits); // ["apple", "kivi", "peach", "orange", false, 10]

fruits.splice(2,2, "cherry", "strawberry","appricot");
console.log(fruits); // ["apple", "kivi", "cherry", "strawberry", "appricot", false, 10]

// NOTE "- number"(-4) means starting from the last index
// startIndex = 4 from last
// deleted item number = 2
fruits.splice(-4,2); // -> 
console.log(fruits); // ["apple", "kivi", "cherry", false, 10]

fruits.splice(-1,0, 'tea', 'coffee'); // -> means delete 0 item. insert tea, coffee at -1 index
console.log(fruits); // ["apple", "kivi", "cherry", false, "tea", "coffee", 10]

fruits.splice(-1,0, 'water'); 
console.log(fruits); // ["apple", "kivi", "cherry", false, "tea", "coffee", "water", 10]
