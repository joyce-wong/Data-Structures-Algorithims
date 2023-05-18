// Bubble Sort 

// Write a function that takes in an array of integers and returns a sorted 
// version of that array. Use the Bubble Sort algorithm to sort the array. 

// If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
// Overview section of this question's vidoe explanation before starting to code.

// function bubbleSort(array) {
//     let isSorted = false
//     let counter = 0
//     while (!isSorted){
//       isSorted = true
//     for(let i = 0; i < array.length - 1 - counter; i++){
//       let left = array[i]
//       let right = array[i + 1]
//       if(left > right){
//         const temp = array[i]
//         array[i] = array[i + 1]
//         array[i + 1] = temp
//         isSorted = false
//       }
//     }
//       counter++
//     }
//     return array
//   }

//with swap helper function
//n = number of elements in array
//time: best O(n), average O(n^2), worst O(n^2)
//space: O(1)
function bubbleSort(array) {
    //set isSorted to false so you know array is not done sorting
    let isSorted = false
    //set counter to 0 so you know how many times we've passed through
    //the array
    let counter = 0
    //while the array is not sorted
    while(!isSorted){
      //set sort to true
      isSorted = true
      //for loop through length of array - 1 - counter
      //because each pass, we only go through the front of the array
      //which is not sorted, -1 because we check each element and the element
      //to the right of it
      for(let i = 0; i < array.length - 1 - counter; i++){
        //if the element on the left is greater than the one on the right,
        if(array[i] > array[i + 1]){
          //swap their positions
          swap(i, i + 1, array)
          //if we set isSorted to false, we've used swap function in this pass
          isSorted = false
        }
      }
      //increment the counter for the number of passes through the array
      counter++
    }
    //return sorted array
    return array
  }
  
  //helper function to swap elements at indices i and j
  function swap(i, j, array){
    //store array[j] in a temp variable
    const temp = array[j]
    //switch element at j and i
    array[j] = array[i]
    //set element at i to temp variable
    array[i] = temp
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;
  