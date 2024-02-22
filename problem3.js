// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const inventory=require('./carData');

function carmodel(data){
    if(Array.isArray(data)){
        return data.map(car => car.car_model).sort();
    }
}
// let result=carmodel(inventory);
// console.log(result);
module.exports=carmodel;