// Max Subset Sum No Adjacent

// Write a function that takes in an array of positive integers and returns
// the maximum sum of non-adjacent elements in the array. 

// If the input array is empty, the function should return 0. 

//n = number of elements in array
//time: O(n)
//space: O(n)
// function maxSubsetSumNoAdjacent(array) {
//     //if array is empty, return 0
//    if(array.length === 0) return 0
//      //else if array has 1 element, return that 1 element
//     else if(array.length === 1) return array[0]
//     //make a copy of the array and store it in maxSums variable
//     let maxSums = array.slice()
//     //let the element at index 1 be the greater of element in array at index 0 or
//     //element at index 1
//     maxSums[1] = Math.max(array[0], array[1])
//     //loop through the rest of the array starting from index 2
//     for(let i = 2; i < array.length; i++){
//       //store in maxSums array at each index
//       //the maximum of either the element in 
//       //the maxSums at the index before it or 
//       //add maxSums at 2 indices before that plus 
//       //the element in array at the same index
//       maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
//     }
//     //exit loop and return the last element in maxSums
//     return maxSums[maxSums.length - 1]
//   }

  //n = number of elements in array
//time: O(n)
//space: O(1)
function maxSubsetSumNoAdjacent(array) {
    //if the array is empty, return 0
    if(array.length === 0) return 0
      //else if the array has 1 element, return that 1 element
    else if(array.length === 1) return array[0]
    //declare variable second to hold element at 0th index of array
    let second = array[0]
    //declare the variable first to hold the maximum of the 
    //element at 0th index of array or the element at 1st index of array
    let first = Math.max(array[0], array[1])
    //loop through the rest of the array
    for(let i = 2; i < array.length; i++){
      //let current equal the maximum of first or second plus array at
      //the ith index
      let current = Math.max(first, second + array[i])
      //overwrite second with the value of first
      second = first
      //overwrite first with the value of current
      first = current
    }
    //return first
    return first
  }
  
  // Do not edit the line below.
  exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
  