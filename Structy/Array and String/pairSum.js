// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

test_00:
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
test_01:
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
test_02:
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
test_03:
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
test_04:
pairSum([9, 9], 18); // -> [0, 1]
test_05:
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]

//O(n) time O(n)space
const pairSum = (numbers, targetSum) => {
    // memoize
    //declare variable of empty object
    //declare variable of empty array
  //property will be element, value will be the complement
    //for loop that loops through the array
    //if the element is not in the object, store it in the object
    //subtract the element from the target sum to get the complement
    //store the complement in the object as the value
    //if the element is the complement, push the index of both the element and complement into empty array
  //break
    //exit loop
    //return array variable
    let obj = {}
    for(let i = 0; i < numbers.length; i++){
      let num = numbers[i]
      let complement = targetSum - num  
      if(complement in obj){
        return [obj[complement], i]
        }
      obj[num] = i
      }
  };
  
  //O(n) constant time solution, O(n) space
  
  module.exports = {
    pairSum,
  };
  