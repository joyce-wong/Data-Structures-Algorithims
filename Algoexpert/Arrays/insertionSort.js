// Insertion Sort 

// Write a function that takes in an array of integers and returns a sorted 
// version of that array. Use the Insertion Sort algorithm to sort the array.

// If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual Overview
// section of this question's video explanation before starting to code. 

//n = number of elements in array
//time: best: O(n), average: O(n^2), worst: O(n^2)
//space: O(1)
function insertionSort(array) {
    //loop through input array from front
    for(let i = 0; i < array.length; i++){
      //set index j to i
      let j = i
      //nested while loop through array
      //compare array[j] to the element in front of it
      while(j > 0 && array[j] < array[j - 1]){
      //if it's less, then swap array[j] with the element in front of it
        swap(j, j - 1, array)
        //decrement j
        j--
      }
    }
    //return array sorted in place
    return array
    }
  
  // helper function to swap elements at i and j indices
  function swap(i, j, array){
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  
  
  // Do not edit the line below.
  exports.insertionSort = insertionSort;