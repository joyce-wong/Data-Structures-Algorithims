// Kadane's Algorithm

// Write a function that takes in a non-empty array of integers and returns
// the maximum sum that can be obtained by summing up all of the integers 
// in a non-empty subarray of the input array. A subarray must only 
// contain adjacent numbers (numbers next to each other in the input array).

//n = number of elements in array
//time: O(n)
//space: O(1)
function kadanesAlgorithm(array) {
    //initialize maxEndingHere as the 0th element of array
    let maxEndingHere = array[0]
    //initialize maxSoFar as the 0th element of the array
    let maxSoFar = array[0]
    //loop through array
    for(let i = 1; i < array.length; i++){
      //track the current element as num
      let num = array[i]
      //set maxEndingHere to be the maximum of num or maxEndingHere + num
      maxEndingHere = Math.max(num, maxEndingHere + num)
      //set maxSoFar to be the maximum of maxSoFar and maxEndingHere
      maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }
    //exit loop and return maxSoFar
    return maxSoFar
  }
  
  // Do not edit the line below.
  exports.kadanesAlgorithm = kadanesAlgorithm;