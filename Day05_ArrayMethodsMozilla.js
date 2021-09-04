/* ..from Mozilla..
console.clear();
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1); // delete everything after the first index()including first index
// inserts at index 1
console.log(months);
// expected output: ["Jan"]
*/

/*
const months = ['Jan', 'March', 'April', 'June'];
//           STARTINDEX,DELETE NUMBER
months.splice(2,2); // delete ONLY 1 after the first index()including first index
// inserts at index 1
console.log(months);
// expected output: ["Jan"]
*/

/*
const months = ['Jan', 'March', 'April', 'June'];
//           STARTINDEX,DELETE NUMBER,ITEM(INSERTED IN STARTINDEX)
months.splice(2,1,'May'); 
// delete ONLY 1 in the 2nd index
// AND inserts 'May' in the 2nd second index
console.log(months);
// expected output: ["Jan", "March", "May", "June"]
*/

/*
const months = ['Jan', 'March', 'April', 'June'];
//           STARTINDEX,DELETE NUMBER,ITEM(INSERTED IN STARTINDEX)
months.splice(2,1,'May','June','July','August'); 
// delete ONLY 1 in the 2nd index
// AND inserts 'May' in the 2nd second index
console.log(months);
// expected output: ["Jan", "March", "May", "June", "July", "August", "June"]
*/

/*
const months = ['Jan', 'March', 'April', 'June'];
//           STARTINDEX,DELETE NUMBER,ITEM(INSERTED IN STARTINDEX)
months.splice(2,0,'May','June'); 
// delete Nothing in the 2nd index
// AND inserts 'May','June' in the 2nd second index
console.log(months);
// expected output: ["Jan", "March", "May", "June", "April", "June"]
*/
