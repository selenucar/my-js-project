/*
  ARRAYS:
*/
console.clear();
// Normal way to reacy data from array 
const x = [1, 2, 3, 4, 5];
console.log(x[0]); //1
console.log(x[1]); //2
  
// Destructing 
// . 1. 2 
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2


const user = {
    id: 42,
    isVerified: true
};
// traditional usage
console.log(user.id); // 42
console.log(user['id']); //42 


const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true
