// Find Three Largest Numbers 

// Write a function that takes in an array of at least three integers and, 
// without sorting the input array, returns a sorted array of the three
// largest integers in the input array.

// The function should return duplicate integers if necesssary, for example, 
// it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

//n = number of elements in array
//time: O(n)
//space: O(nlogn)
// function findThreeLargestNumbers(array) {
//     //declare variable to track result array
//     let result = []
//     //for loop through array
//     for(let i = 0; i < array.length; i++){
//       let el = array[i]
//       //if index is less than three
//       if(i < 3){
//         //push the first three numbers and sort them
//         result.push(el)
//         result.sort((a, b) => a - b)
//       } else {
//         //if element is greater than any of the numbers in result array, 
//         //push the element and shift the 1st one
//         if(el > result[0] || el > result[1] || el > result[2]) {
//           result.push(el)
//           result.shift()
//         }
//       }
//     }
//     //sort the result array and return it
//     return result.sort((a, b) => a - b)
//   }

  //two helper functions and sort method not used
//n = number of elements in array
//time: O(n)
//space: O(1)
function findThreeLargestNumbers(array) {
    //initialize threeLargest result array as array with 3 null elements
    let threeLargest = [null, null, null]
    //loop through each number in the array using helper function to update result array
    for(let number of array){
      updateLargest(threeLargest, number)
    }
    //return threeLargest result array
    return threeLargest
  }
  
  //helper function that updates the largest numbers in the array
  function updateLargest(threeLargest, number){
    //if the number at the last index is null or the input number is greater
    //than number at the last index, shift and replace the number at last index with the input number
    if(threeLargest[2] === null || number > threeLargest[2]){
      shiftNumber(threeLargest, number, 2)
    }
       //else if the number at the middle index is null or the input number is greater
    //than number at the middle index, shift and replace the number at the middle index with the input number
    else if(threeLargest[1] === null || number > threeLargest[1]){
      shiftNumber(threeLargest, number, 1)
    }
       //else if the number at the beginning index is null or the input number is greater
    //than number at the beginning index, shift and replace the number at the beginning index with the input number
    else if(threeLargest[0] === null || number > threeLargest[0]){
      shiftNumber(threeLargest, number, 0)
    }
  }
  
  //helper function that shifts numbers to the left and replaces them with
  //larger input number
  function shiftNumber(array, number, index){
    //loop through input array
    for(let i = 0; i < array.length; i++){
      //if i in the loop equals input index
      //set the element at i to the input number
      //replace the number at the index of i to the input number
      if(i === index){
        array[i] = number
        //else if the input number is greater than existing number at i
        //shift the existing number in array to left
      } else if(number > array[i]){
        array[i] = array[i + 1]
      }
    }
  }
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  