// Imagine you have a set of cities that are laid out in a circle, 
// connected by a circular road that runs clockwise. Each city has a 
// gas station that provides gallons of fuel, and each city is some 
// distance away from the next city. 

// You have a car that can drive some number of miles per gallon of fuel, 
// and your goal is to pick a starting city such that you can fill up 
// your car with that city's fuel, drive to the next city, refill up your car
// with that city's fuel, drive to the next city, and so on and so forth
// until you return back to the starting city with 0 or more gallons 
// of fuel left. 

// This city is called a valid starting city, and it's guaranteed that there will
// always be exactly one valid starting city. 

// For the actual problem, you'll be given an array of distances such that city i 
// is distances[i] away from city i + 1. Since the cities are connected via 
// a circular road, the last city is connected to the first city. In other 
// words, the last distance in the distances array is equal to the distance from 
// the last city to the first city. You'll also be given an array of fuel available
// at each city, where fuel[i] is equal to the fuel available at city i. The 
// total amount of fuel available(from all cities combined) is exactly enough 
// to travel to all cities. Your fuel tank always starts out empty, and you're
// given a positive integer value for the number of miles that your car 
// can travel per gallon of fuel(miles per gallon, or MPG). You can 
// assume that you will always be given at least two cities. 

// Write a function that returns the index of the valid starting city. 

//n = number of cities, length of distances/fuel arrays
//time: O(n)
//space: O(1)
// function validStartingCity(distances, fuel, mpg) {
//     //declare numberOfCities to be the length of distances array
//    const numberOfCities = distances.length
  
//     //loop through numberOfCities
//     for(let startCityIdx = 0; startCityIdx < numberOfCities; startCityIdx++){
//       //initialize milesRemaining as 0
//       let milesRemaining = 0
  
//       //inner loop through startCityIdx + numberOfCities
//       for(
//         let currentCityIdx = startCityIdx; 
//           currentCityIdx < startCityIdx + numberOfCities; 
//           currentCityIdx++
//       ){
//         //if milesRemaining is less than 0, skip cycle
//         if(milesRemaining < 0)continue
//         //declare currentCityIdxRotated as the remainder of currentCityIdx divided by numberOfCities
//         const currentCityIdxRotated = currentCityIdx % numberOfCities
  
//         //declare fuelFromCurrentCity as fuel at currentCityIdxRotated index
//         const fuelFromCurrentCity = fuel[currentCityIdxRotated]
//         //declare distanceToNextCity as distances at currentCityIdxRotated index
//         const distanceToNextCity = distances[currentCityIdxRotated]
//         //add fuelFromCurrentCity multiplied by mpg - disatnceToNextCity to milesRemaining
//         milesRemaining += fuelFromCurrentCity * mpg - distanceToNextCity
//       }
//       //if milesRemaining is more than or equal to 0, return startCityIdx
//       if(milesRemaining >= 0) return startCityIdx
//     }
//     //this line should never be reached if inputs are correct
//     //there is always one valid startCityIdx
//     return -1
//   }

//n = number of cities
//time: O(n)
//space: O(1)
function validStartingCity(distances, fuel, mpg) {
    //declare numberOfCities as the length of distances array
    const numberOfCities = distances.length
    //initalize milesRemaining as 0 
    let milesRemaining = 0
  
    //initialize indexOfStartingCityCandidate as 0
    let indexOfStartingCityCandidate = 0
    //initialize milesRemainingAtStartingCityCandidate as 0
    let milesRemainingAtStartingCityCandidate = 0
  
    //loop through numberOfCities
    for(let cityIdx = 1; cityIdx < numberOfCities; cityIdx++){
      //declare distanceFromPreviousCity as distances at the index of cityIdx - 1
      const distanceFromPreviousCity = distances[cityIdx - 1]
      //declare fuelFromPreviousCity as the fuel at the index of cityIdx - 1
      const fuelFromPreviousCity = fuel[cityIdx - 1]
      //add fuelFromPreviousCity multiplied by mpg minus distanceFromPreviousCity to milesRemaining
      milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity
  
      //if milesRemaining is less than milesRemainingAtStartingCityCandidate
      if(milesRemaining < milesRemainingAtStartingCityCandidate){
        //set milesRemainingAtStartingCityCandidate equal to milesRemaining
        milesRemainingAtStartingCityCandidate = milesRemaining
        //set indexOfStartingCityCandidate equal to cityIdx
        indexOfStartingCityCandidate = cityIdx
      }
    }
    //return indexOfStartingCityCandidate
    return indexOfStartingCityCandidate
  }
  
  // Do not edit the line below.
  exports.validStartingCity = validStartingCity;
  
  