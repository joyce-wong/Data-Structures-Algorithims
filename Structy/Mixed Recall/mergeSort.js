// merge sort
// Write a function, mergeSort, that takes in an array of numbers as an argument. The function should return a new array containing elements of the original array sorted in ascending order. Your function must implement the merge sort algorithm.

test_00
const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
mergeSort(numbers);
// -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ] 
test_01
const numbers = [7, -30, -4, -1, 12, 0, 20];
mergeSort(numbers);
// -> [ -30, -4, -1, 0, 7, 12, 20 ] 
test_02
const numbers = [8, 7, 6, 5, 4, 3, 2, 1, 0];
mergeSort(numbers);
// -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] 
test_03
const numbers = [ 
  72, 42, 16, 81, 84, 17,  2, 81, 22, 79, 86, 38, 
  77, 80, 81, 70, 81, 80, 35, 21, 89, 38, 57, 28, 
   4, 17, 50, 38, 68, 82, 22, 76, 45, 40, 67, 94, 
  37, 27, 81, 53, 36, 18, 28, 60, 45, 74, 40, 29, 
  18,  6, 28, 57, 42, 60, 64, 12, 78, 97, 96,  1, 
  20, 20, 61, 67, 82, 10, 63, 71, 39, 52, 37, 69, 
  37, 24, 66, 74, 15, 92, 49, 31, 56, 67, 50, 57, 
  79,  0, 21, 56, 82, 22,  4, 20, 91, 72, 58, 93, 
  99, 14, 42, 91 
];
mergeSort(numbers);
// -> [ 
//    0,  1,  2,  4,  4,  6, 10, 12, 14, 15, 16, 17, 
//   17, 18, 18, 20, 20, 20, 21, 21, 22, 22, 22, 24, 
//   27, 28, 28, 28, 29, 31, 35, 36, 37, 37, 37, 38, 
//   38, 38, 39, 40, 40, 42, 42, 42, 45, 45, 49, 50, 
//   50, 52, 53, 56, 56, 57, 57, 57, 58, 60, 60, 61, 
//   63, 64, 66, 67, 67, 67, 68, 69, 70, 71, 72, 72, 
//   74, 74, 76, 77, 78, 79, 79, 80, 80, 81, 81, 81, 
//   81, 81, 82, 82, 82, 84, 86, 89, 91, 91, 92, 93, 
//   94, 96, 97, 99 
// ]
test_04
const numbers = new Array(95000).fill(7);
mergeSort(numbers);
// -> [7, 7, 7, 7, 7, ...]
test_05
const numbers = new Array(120000).fill(7);
mergeSort(numbers);
// -> [7, 7, 7, 7, 7, ...]

// n = nums length
// time = O(nlogn)
//space = O(n)
const mergeSort = (nums) => {
    if(nums.length <= 1) return nums
    const mid = Math.floor(nums.length/2)
    const leftMerge = mergeSort(nums.slice(0, mid))
    const rightMerge = mergeSort(nums.slice(mid))
    return merge(leftMerge, rightMerge)
  };
  
  const merge = (nums1, nums2) => {
    let arr = []
    //reversing because popping has lower space complexity than shifting 
    nums1.reverse()
    nums2.reverse()
    
    //while the two arrays still have elements, pop the elements off
    //one by one and push them into the result array
    while(nums1.length > 0 && nums2.length > 0){
       if(nums1[nums1.length - 1] < nums2[nums2.length -1]){
      arr.push(nums1.pop())
    } else {
      arr.push(nums2.pop())
    }
    }
    
    //after the while loop is done, push in the remainders of the two
    //arrays and make sure to reverse the order again
    arr.push(...nums1.reverse())
    arr.push(...nums2.reverse())
    return arr
  }
  
  module.exports = {
    mergeSort,
  };
  