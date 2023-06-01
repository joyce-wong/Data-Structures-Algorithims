// Monotonic Array

// Write a function that takes in an array of integers and returns a boolean 
// representing whether the array is monotonic. 

// An array is said to be monotonic if its elements, from left to right, are 
// entirely non-increasing or entirely non-decreasing. 

// Non-increasing elements aren't necessarily exclusively decreasing; they 
// simply don't increase. Similarly, non-decreasing elements aren't 
// necessarily exclusively increasing; they simply don't decrease. 

// Note that empty arrays and arrays of one element are monotonic. 

// function isMonotonic(array) {
//     //if the array length is 2 or less, return true
//     if(array.length <= 2) return true
//     //declare variables to track increase and decrease
//     let increase = 0
//     let decrease = 0
//     //for loop through array
//     for(let i = 0; i < array.length - 1; i++){
//       let current = array[i]
//       let next = array[i + 1]
//       //if current is less than next, increment increase
//       if(current < next){
//         increase++ 
//         //else if current is more than next, increment decrease
//       } else if(current > next){
//         decrease++
//       }
//     }
//     //if they are both 1 or more, then the array decreased and increased
//     //at the same time so return false
//     if(increase >= 1 && decrease >= 1){
//       return false
//       //otherwise return true
//     } else { 
//     return true
//     }
//   }

  //n = length of array
//time: O(n)
//space: O(1)
function isMonotonic(array) {
    //declare variables to track if the array is nonIncreasing or nonDecreasing
    let nonIncreasing = true
    let nonDecreasing = true
    //loop through array
    for(let i = 0; i < array.length - 1; i++){
      let current = array[i]
      let next = array[i + 1]
      //if current is more than next
      if(current > next){
        //set nonIncreasing to false
        nonIncreasing = false
      }
        //else if current is less than next
      else if(current < next){
        //set nonDecreasing to false
        nonDecreasing = false
      }
    }
    //if either nonIncreasing or nonDecreasing is true, return true
    return nonIncreasing || nonDecreasing
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  