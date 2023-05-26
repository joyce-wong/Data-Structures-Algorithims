// Three Number Sum 

// Write a function that takes in a non-empty array of distinct integers 
// and an integer representing a target sum. The function should find all 
// triplets in the array that sum up to the target sum and return a two-dimensional
// array of all these triplets. The numbers in each triplet should be ordered
// in ascending order, and the triplets themselves should be ordered in 
// ascending order with respect to the numbers they hold. 

// If no three numbers sum up to the target sum, the function should
// return an empty array. 

//n = number of elements in array
//time: O(n^2)
//space: O(n)
function threeNumberSum(array, targetSum) {
    //sort array in place
    array = array.sort((a, b) => a - b)
    //declare empty result array
    let result = []
    //for loop through array.length - 2 because there are
    //3 pointers and you need at least 2 pointers to the right of the last 
    //current element
    for(let i = 0; i < array.length - 2; i++){
       let current = array[i]
      //declare left pointer directly to right of current
       let left = i + 1
      //declare right pointer on last element
       let right = array.length - 1
      //nested while loop while the left and right pointers don't cross
      while(left < right){
        //current sum to be the sum of elements at the three pointers
       let currentSum = current + array[left] + array[right]
        //if currentSum is the targetSum
        if(currentSum === targetSum){
          //push the triplet into the result
          result.push([current, array[left], array[right]])
          //you must both increment the left pointer and the right pointer here
          //because if you only increment the left pointer, the currentSum
          //will definitely be greater than targetSum
          //and if you only decrement the left pointer, the currentSum
          //will definitely be less than targetSum
          //this would be the case in which current might be present in more than
          //one triplet
          left++
          right--
        }
          //else if the currentSum less than targetSum, increment left pointer
        else if(currentSum < targetSum){
          left++
        }
          //else if the currentSum is more than the targetSum, decrement left pointer 
        else if(currentSum > targetSum){
        right--
        }
      }
    }
    //exit loops and return the result
    return result
  }
  
  // Do not edit the line below.
  exports.threeNumberSum = threeNumberSum;
  