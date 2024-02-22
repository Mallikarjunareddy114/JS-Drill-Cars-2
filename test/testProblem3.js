// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const inventory=require('../carData');
let findCarModel=require('../problem3');

let result=findCarModel(inventory);
console.log(result);