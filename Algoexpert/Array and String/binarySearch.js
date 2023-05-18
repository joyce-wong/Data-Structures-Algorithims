// Binary Search

// Write a function that takes in a sorted array of integers as well as a target
// integer. The function should use the Binary Search algorithm to determine
// if the target integer is contained in the array and should return its index
// if it is, otherwise -1.

// If you're unfamiliar with Binary Search, we recommend watching the Conceptual
// Overview section of this question's video explanation before starting to code.

//n = number of elements in array
//time: O(n)
//space: O(log(n))
// function binarySearch(array, target) {
//     //declare variable to track mid
//     let mid = Math.floor(array.length/2)
//     //declare pointer with ternary dependent on if target is greater than mid value
//     let pointer = target >= array[mid] ? array.length - 1 : 0
//     //if target is greater,
//     if(target > array[mid]){
//       //while the pointers don't cross
//       while(pointer >= mid){
//         //if you find the target, return the index
//         if(target === array[pointer]) return pointer
//         if(target === array[mid]) return mid
//         //decrement pointer
//         pointer--
//         //increment mid
//         mid++
//       }
//       //else if the target is less than mid value
//     } else if (target < array[mid]){
//       //while the two pointers don't cross
//       while(mid >= pointer){
//         //if you find the target value, return the index
//         if(target === array[pointer]) return pointer
//         if(target === array[mid]) return mid
//         //increment pointer
//         pointer++
//         //decrement mid
//         mid--
//       }
//       //else target is the value at middle index so return the middle index
//     } else { 
//       return mid
//     }
//     //return -1 if you don't find the target value
//     return -1
//   }

//recursive solution
//time: O(log(n))
//space: O(log(n))
// function binarySearch(array, target) {
//     //return and initialize helper function with left pointer as 0 and right pointer as last index
//     return binarySearchHelper(array, target, 0, array.length - 1)
//   }
  
//   //declare helper function with left and right parameters to track indices
//   function binarySearchHelper(array, target, left, right){
//     //if the pointers crossed, return -1 because you didn't find target
//     if (left > right) return -1
//     //declare mid index variable
//     const mid = Math.floor((left + right) / 2)
//     //if target is value at mid index, return mid
//     if(target === array[mid]) return mid
//     //if target is less than value at mid index
//     if(target > array[mid]){
//       //return recursive case adding to left pointer to move it to the right
//       return binarySearchHelper(array, target, left + 1, right)
//     }
//     //if target is greater than value at mid index
//     if(target < array[mid]){
//       //return recursive case adding to right pointer to move it to the left
//       return binarySearchHelper(array, target, left, right - 1)
//     }
//   }

//n = number of elements in array
//time: O(log(n))
//space: O(1)
function binarySearch(array, target) {
    //declare left pointer at beginning of array
    let left = 0
    //declare right pointer at end of array
    let right = array.length - 1
    //while the 2 pointers don't cross
    while(left <= right){
      //declare mid variable as middle index using formula below
    const mid = Math.floor((left + right)/2)
      //if target is greater than middle value
      if(target > array[mid]){
        //move left index to one right of mid index
        left = mid + 1
      }
        //else if target is less than middle value
      else if (target < array[mid]){
        //move right index to on left of mid index
        right = mid - 1
      } else {
        //if target value is the middle value, return mid index
        return mid
      }
    }
    //if searched the entire array but didn't find the value, return -1
    return -1
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  
  