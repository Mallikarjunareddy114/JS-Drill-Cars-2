// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const inventory=require('./carData');

function getCarYears(data){
    if(Array.isArray(data)){
        return data.map(car => car.car_year);
    }
}
// let result=getCarYears(inventory);
// console.log(result);
module.exports=getCarYears;