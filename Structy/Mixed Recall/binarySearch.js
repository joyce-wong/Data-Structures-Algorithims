// binary search
// Write a function, binarySearch, that takes in a sorted array of numbers and a target. The function should return the index where the target can be found within the array. If the target is not found in the array, then return -1.

// You may assume that the input array contains unique numbers sorted in increasing order.

// Your function must implement the binary search algorithm.

test_00
binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6); // -> 6
test_01
binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27); // -> -1
test_02
binarySearch([0, 6, 8, 12, 16, 19, 20, 28], 8); // -> 2
test_03
binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28); // -> 8
test_04
binarySearch([7, 9], 7); // -> 0
test_05
binarySearch([7, 9], 9); // -> 1
test_06
binarySearch([7, 9], 12); // -> -1
test_07
binarySearch([7], 7); // -> 0
test_08
binarySearch([], 7); // -> -1


const binarySearch = (numbers, target) => {
    //declare left and right variable
    //mid as the average of left and right rounded down
    //if we find the target, return the index
    //if we don't find the target within the range
    //move the left or right pointer in until we have no numbers left
    //return -1
    let left = 0
    let right = numbers.length - 1
   
    while(left <= right){
      const mid = Math.ceil((left + right)/2)
      if(target > numbers[mid]) {
        left = mid + 1
      } else if(target < numbers[mid]){
        right = mid - 1
      }  else{
        return mid 
      }
    }
    return -1
  };
  
  module.exports = {
    binarySearch,
  };
  