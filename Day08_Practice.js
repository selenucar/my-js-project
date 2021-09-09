/*
Constructors:
It is another was of creating obects
*/
console.clear();

//Create a Person as constructor with 4 params
//Params: name, age, hasLicence, languages

//Name: Jim
//age: 20
//hasLicence: true
//languages: English, Spanish, German -ARRAY

//Print all of the informaton one by one
//3 mins.

function Person(name, age, hasLicence, languages){
  this.name=name;
  this.age=age;
  this.hasLicence=hasLicence;
  this.languages=languages;
}

const thatPerson = new Person('Jim', 20 , true, ['English', 'Spanish', 'German'] );
console.log(thatPerson);
console.log(thatPerson.name);
console.log(thatPerson.age);
console.log(thatPerson.hasLicence);
console.log(thatPerson.languages);
console.log(thatPerson.languages[1]);