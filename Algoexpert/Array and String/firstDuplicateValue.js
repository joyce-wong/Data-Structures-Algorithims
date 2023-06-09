// First Duplicate Value 

// Given an array of integers between 1 and n, inclusive, where n is the length
// of the array, write a function that returns the first integer that appears 
// more than once(when the array is read from left to right).

// In other words, out of all the integers that might occur more than once in 
// the input array, your function should return the one whose first duplicate 
// value has the minimum index. 

// If no integer appears more than once, your function should return -1. 

// Note that you're allowed to mutate the input array. 

//n = length of input array
//time: O(n)
//space: O(n)
// function firstDuplicateValue(array) {
//     //track el occurences using object
//     let obj = {}
//     //loop through array
//     for(let el of array){
//       //if the el is not stored in the obj, store it there
//       if(!obj[el]){
//         obj[el] = 1
//       } else {
//         //if it's already stored there, return the element
//         return el
//       }
//     }
//     //return -1 if there are no duplicated elements
//     return -1
//   }

//n = length of input array
//time: O(n)
//space: O(n)
// function firstDuplicateValue(array) {
//     //initialize a set to track duplicates
//     let dupe = new Set()
//     //loop through array
//     for(let el of array){
//       //if the dupe set does not have el, add el
//       if(!dupe.has(el)){
//         dupe.add(el)
//       } else {
//         //otherwise, return el
//         return el
//       }
//     }
//     //if there are no duplicated els, return -1
//     return -1
//   }

//n = length of input array
//time: O(n)
//space: O(1)
function firstDuplicateValue(array) {
    //loop through array
    for(let n of array){
      //declare absValue variable to track absolute value of each integer
      let absValue = Math.abs(n)
      //if the array at the index of absValue -1 is negative, return the 
      //absolute value of the integer
      if (array[absValue - 1] < 0){
        return absValue
        //otherwise, make the array at the index of absValue -1 into a negative number
      } else {   
      array[absValue - 1] *= -1
      }
    }
    //return -1
    return -1
  }
  
  // Do not edit the line below.
  exports.firstDuplicateValue = firstDuplicateValue;