// Tandem Bicycle

// A tandem bicycle is a bicycle that's operated by two people: person A and
// person B. Both people pedal the bicycle, but the person that pedals faster
// dictates the speed of the bicycle. So if person A pedals at a speed of 5 
// and person B pedals at a speed of 4, the tandem bicycle moves at a speed
// of 5(i.e., tandemSpeed = max(speedA, speedB)).

// You're given two lists of positive integers: one that contains the speeds
// of riders wearing red shirts and one that contains the speeds of riders
// wearing blue shirts. Each rider is represented by a single positive
// integer, which is the speed that they pedal a tandem bicycle at. Both lists
// have the same length, meaning that there are as many red-shirt riders
// as there are blue-shirt riders. Your goal is to pair every rider wearing
// a red shirt with a rider wearing a blue shirt to operate a tandem bicycle.

// Write a function that returns the maximum possible total speed or the 
// minimum possible total speed of all the tandem bicycles being ridden 
// based on an input parameter, fastest. If fastest = true, your function
// should return the maximum possible total speed; otherwise it should 
// return the minimum possible total speed.

// "Total speed" is defined as the sum of the speeds of all the tandem
// bicycles being ridden. For example, if there are 4 riders(2 red-shirt
//     riders and 2 blue-shirt riders) who have speeds of 1, 3, 4, 5, and if
//     they're paired on tandem bicycles as follows: [1, 4], [5, 3], then 
//     the total speed of these tandem bicycles is 4 + 5 = 9.

//n = number of tandem bicycles
//time: O(nlog(n))
//space: O(n)
// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
//     //declare variable to track total speed
//     let totalSpeed = 0 
//     //declare variable for array with fastest speed
//     let fasterShirtSpeeds = Math.max(...redShirtSpeeds) > Math.max(...blueShirtSpeeds) ?  redShirtSpeeds : blueShirtSpeeds 
//     //declare variable for other array
//     let slowerShirtSpeeds = fasterShirtSpeeds === redShirtSpeeds ? blueShirtSpeeds : redShirtSpeeds
//     //sort slowerShirtSpeeds
//     slowerShirtSpeeds = slowerShirtSpeeds.sort((a, b) => a - b)
//     //if fastest is true, sort fasterShirtSpeeds in descending order
//     //so you get a greater difference between the times of each rider
//     //to increase the maximum total speed
//     if(fastest === true){
//       fasterShirtSpeeds = fasterShirtSpeeds.sort((a, b) => b - a)
//       //otherwise, sort fasterShirtSpeeds in ascending order
//       //so you get a smaller difference between the times of each rider
//       //to return the minimum total speed
//     } else {
//       fasterShirtSpeeds = fasterShirtSpeeds.sort((a, b) => a - b)
//     }
//     //iterate through one of the arrays
//       for(let i = 0; i < slowerShirtSpeeds.length; i++){
//         let slowerShirtSpeed = slowerShirtSpeeds[i]
//         let fasterShirtSpeed = fasterShirtSpeeds[i]
//         //tandemSpeed is the faster of the speeds of the two riders
//         let tandemSpeed = Math.max(slowerShirtSpeed, fasterShirtSpeed)
//         //add tandemSpeed to total on each iteration
//         totalSpeed += tandemSpeed
//       }
//     //exit loop and return totalSpeed
//     return totalSpeed
//   }

//n = number of tandem bicycles
//time: O(nlogn)
//space: O(1)
// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
//     //sort both arrays in place
//     redShirtSpeeds.sort((a, b) => a - b)
//     blueShirtSpeeds.sort((a, b) => a - b)
  
//     //if fastest is false, reverse one of the arrays in place
//     //to minimize the time between the faster and slower rider
//     //to get the maximum total time
//     if(!fastest) reverseArrayInPlace(redShirtSpeeds)
  
//     //track total speed with variable
//     let totalSpeed = 0
//     //loop through one of the arrays
//     for(let i = 0; i < redShirtSpeeds.length; i++){
//       //initialize one pointer at the beginning of the array
//       const rider1 = redShirtSpeeds[i]
//       //initialize the other pointer at the end of the other array
//       const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1]
//       //add the maximum speed out of the two riders to the total
//       totalSpeed += Math.max(rider1, rider2)
//     }
//     //return totalSpeed
//     return totalSpeed
//   }
  
//   //helper function that reverses an array in place
//   function reverseArrayInPlace(array){
//     //declare start and end indices
//     let start = 0
//     let end = array.length - 1
//     //while loop that ensures pointer indices don't cross
//     while(start < end){
//       //temp variable holds element at 0 index
//       const temp = array[start]
//       //switch the elements at start and end
//       array[start] = array[end]
//       array[end] = temp
//       //increment start index pointer
//       start++
//       //decrement end index pointer
//       end--
//     }
//   }

//n = number of tandem bicycles
//time: O(nlogn)
//space: O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    //sort one array in place
    blueShirtSpeeds.sort((a, b) => a - b)
  
    //if fastest is true, sort one of the arrays in descending order
    //to minimize the time between the faster and slower rider
    //to get the maximum total time
    if(fastest === true){
      redShirtSpeeds.sort((a, b) => b - a)
    } else {
      redShirtSpeeds.sort((a, b) => a - b)
    }
  
    //track total speed with variable
    let totalSpeed = 0
    //loop through one of the arrays
    for(let i = 0; i < redShirtSpeeds.length; i++){
      //initialize boths pointer at the beginning of the arrays
      const rider1 = redShirtSpeeds[i]
      const rider2 = blueShirtSpeeds[i]
      //add the maximum speed out of the two riders to the total
      totalSpeed += Math.max(rider1, rider2)
    }
    //return totalSpeed
    return totalSpeed
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  