console.clear()
//****reverse(); -> reversed the array

var nums=[5, 3, 7, 3, -6, 11]
console.log(`ORIGINAL : ${nums}`); // "ORIGINAL : 5,3,7,3,-6,11"
nums.reverse();

console.log(`REVERSED : ${nums}`); // "REVERSED : 11,-6,3,7,3,5"




//****sort(); sorts the array in ascending order(smallest to greatest)
nums.sort();
console.log(`SORTED : ${nums}`);// "SORTED : -6,11,3,3,5,7"

// decsending order = sort() + reverse()
nums.reverse();
console.log(`SORTED DECS: ${nums}`);

// actually sort((a,b)=> b-a) is easier(from ozgur)
