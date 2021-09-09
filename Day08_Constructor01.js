/*
Constructors:
It is another was of creating obects
*/
console.clear();
// Normal Function: camelCase
function carInfo(brand, model, year){
  return{
    brand, model, year
  };
};

// Traditional way to create function
const carFunction = carInfo('Nissan', 'Rogue', 2019);
console.log(carFunction);
/*

[object Object] {
  brand: "Nissan",
  model: "Rogue",
  year: 2019
}
*/

console.log(carFunction.brand); // "Nissan"
console.log(carFunction.model); // "Rogue"
console.log(carFunction.year); // 2019

// Constructor : PascalCase
function CarInfo(brand, model, year){
  this.brand=brand;
  this.model=model;
  this.year=year;
}

const carConstructor = new CarInfo('Tesla', 'Model X', 2021);
console.log(carConstructor);
/*
[object Object] {
  brand: "Tesla",
  model: "Model X",
  year: 2021
}
*/

console.log(carConstructor.brand);
console.log(carConstructor.model);
console.log(carConstructor.year);

//EXAMPLE 2
// Create function
function areaOfCircle(r){
  return{
    r,
    result(){
      console.log('Result : ')
    }
  }
}

const myCircleArea1 = areaOfCircle(7);
console.log(myCircleArea1);

// Create constructor
function AreaOfCircle(r){
  this.r=r;
  this.resulr=function(){
    console.log('Result : ')
  }
}

const myCircleArea2 = areaOfCircle(10);
console.log(myCircleArea2);

// New Keyword: creates an empty object, then returns objects from the constructor
// function of new keywords, wraps the values of given in function and return it as an object. (from Ugur)
