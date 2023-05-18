// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two number in the input array sum up to the target sum,
// the function should return them in an array, in any order.
// If no two numbers sum up to the target sum, the function should return an empty
// array.

// Note that the target sum has to be ordained by summing two different integers
// in the array, you can't add an single integer to itself in order to obtain
// the target sum. 

// You can assume that there will be at most one pair of numbers summing up
// to the target sum.

//solution 1
//Time: O(n^2)
//Space: O(1)
// function twoNumberSum(array, targetSum) {
//     // nested for loop
//     for(i = 0; i < array.length - 1; i++){
//         const pointer1 = array[i]
//       for(j = i + 1; j < array.length; j++){
//         const pointer2 = array[j]
//         if((pointer1 + pointer2) === targetSum){
//           return [pointer1, pointer2]
//         }
//       }
//     }
//     return []
//   }
  
//   // Do not edit the line below.
//   exports.twoNumberSum = twoNumberSum;

//Solution 2 (Optimal)
//n = length of input array
//Time: O(n)
//Space: O(n)
function twoNumberSum(array, targetSum) {
    //create hashmap
    const obj = {}
    //loop through array and store complement in object as value
    for(let el of array){
      const complement = targetSum - el
      obj[el] = complement
      //check if the complement is in the object and it is not the same as el
      if(complement in obj && complement !== el){
        //if so, return the pair of elements that sum to targetSum
        return [complement, el]
      }
    }
    //if there is no pair of elements that sum to targetSum, return empty array
    return []
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;

  //two pointer solution
// Time: O(nlog(n))
//Space: O(1)
// function twoNumberSum(array, targetSum) {
//     //sort the array in place
//     array.sort((a, b) => a - b)
//     //create two pointers, left at beginning of array, right at end of array
//     let left = 0
//     let right = array.length - 1
//     //while the two pointers don't cross
//     while(left < right){
//       //check the current sum and see if it matches target sum
//       const currentSum = array[left] + array[right]
//       //if matches, return the two elements at the pointer indices
//       if(currentSum === targetSum){
//         return [array[left], array[right]]
//         //otherwise, if the current sum is less, increment the left pointer
//       } else if (currentSum < targetSum){
//         left++
//         //otherwise if the current sum is more, increment the right pointer to move it left
//       } else if(currentSum > targetSum){
//         right--
//       }
//     }
//     //if you get to the end and don't find that pointers summed make the targetSum, return empty array
//     return []
//   }
  
//   // Do not edit the line below.
//   exports.twoNumberSum = twoNumberSum;
  