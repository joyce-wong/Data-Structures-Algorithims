// Sorted Squared Array

// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the 
// squares of the original integers also sorted in ascending order.

// n = length of array
// time: O(nlogn)
//space: O(n)

// function sortedSquaredArray(array) {
//     //create empty array
//     let result = []
//     //for loop through array
//     for(let i = 0; i < array.length; i++){
//       let el = array[i]
//       //push each element into array
//       result.push(el * el)
//       }
//     //return sorted result array
//     return result.sort((a, b) => a - b)
//   }
  
  // function sortedSquaredArray(array){
  //map over array to square each element and then sort resulting array
  //   return array.map((el) => el * el).sort((a, b) => a - b)
  // }

  //n = length of array
//time: O(n)
//space: O(n)
function sortedSquaredArray(array) {
    //declare result array
    let result = []
    //declare pointer at beginning and end of input array
    let pointer1 = 0
    let pointer2 = array.length - 1
    //loop through input array backwards
    for(let i = array.length - 1; i >= 0; i--){
      //declare variables for lowest and highest value in input array
      const inMin = array[pointer1]
      const inMax = array[pointer2]
      //if the absolute value of the lowest value in input array is greater,
      //set the square of the lowest value to the last element of output array
      //move the pointer to the right
      if(Math.abs(inMin) > Math.abs(inMax)){
        result[i] = inMin * inMin
        pointer1++
        //otherwise, if the absolute value of the highest value in the input
        //array is greater, set the square of the highest value to the last 
        //element of the output array
        //move the pointer to the left
      } else {
        result[i] = inMax * inMax
        pointer2--
      }
    }
    //return output array that is already sorted
    return result
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;