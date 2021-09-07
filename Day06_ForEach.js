/*
FOR EACH LOOP: 
ARRAY.forEach(function parameter)
Normal for loop does not take function parameter

For Each loop --> gives the entire data from the array without using any index

When we need to use index, then use regular for loop
*/

console.clear();

const array1 = ['a', 'b', 'c']
const array2 = [1, 2, 3]

// print all items of array1
array1.forEach(
  function(eachItem){
    console.log(eachItem);
  }

)

// print all items of array1 with arrow function
array1.forEach(
  eachItem => console.log(eachItem)
)

array2.forEach(eachItem => console.log(eachItem))
