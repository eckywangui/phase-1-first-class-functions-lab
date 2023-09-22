// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
const returnLastTwoDrivers= function(driver){
    return driver.slice(2,4)
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function (value) {
      return value * fareMultiplier;
    };
  }


  const fareDoubler = createFareMultiplier(2);

  const fareTripler= createFareMultiplier(3)

 //call the selectingDrivers function with the drivers array as an argument
  const selectDifferentDrivers = function (drivers, selectingDrivers) {
    return selectingDrivers(drivers);
  };